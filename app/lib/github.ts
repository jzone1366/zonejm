import { GITHUB_USERNAME } from './constants';

const BASE_URL = 'https://api.github.com';
const REPOS_PER_PAGE = 6;

export interface Repository {
	name: string;
	description: string | null;
	language: string | null;
	stargazers_count: number;
	forks_count: number;
	watchers_count: number;
	html_url: string;
	topics: string[];
	updated_at: string;
	created_at: string;
	private: boolean;
	default_branch: string;
	size: number;
	languages_url: string;
}

export interface GithubStats {
	followers: number;
	following: number;
	public_repos: number;
	totalStars: number;
	languages: string[];
}

export interface GithubData {
	stats: GithubStats;
	repositories: Repository[];
}

async function fetchUserData(username: string): Promise<Partial<GithubStats>> {
	const response = await fetch(`${BASE_URL}/users/${username}`, {
		next: { revalidate: 3600 },
	});

	if (!response.ok) {
		throw new Error(`Failed to fetch user data: ${response.statusText}`);
	}

	const userData = await response.json();
	return {
		followers: userData.followers,
		following: userData.following,
		public_repos: userData.public_repos,
	};
}

async function fetchRepositories(username: string, perPage: number): Promise<Repository[]> {
	const response = await fetch(
		`${BASE_URL}/users/${username}/repos?sort=updated&per_page=${perPage}`,
		{ next: { revalidate: 3600 } }
	);

	if (!response.ok) {
		throw new Error(`Failed to fetch repositories: ${response.statusText}`);
	}

	return response.json();
}

async function fetchLanguageStats(repos: Repository[]): Promise<string[]> {
	const languageStats: Record<string, number> = {};

	await Promise.all(
		repos.map(async (repo) => {
			try {
				const res = await fetch(repo.languages_url, {
					next: { revalidate: 3600 },
				});
				if (res.ok) {
					const langs = await res.json();
					for (const lang of Object.keys(langs)) {
						languageStats[lang] = (languageStats[lang] || 0) + 1;
					}
				}
			} catch {
				// Skip repos where language fetch fails
			}
		})
	);

	return Object.entries(languageStats)
		.sort(([, a], [, b]) => b - a)
		.slice(0, 5)
		.map(([lang]) => lang);
}

export async function fetchGithubData(): Promise<GithubData> {
	const [userData, repositories] = await Promise.all([
		fetchUserData(GITHUB_USERNAME),
		fetchRepositories(GITHUB_USERNAME, REPOS_PER_PAGE),
	]);

	const totalStars = repositories.reduce((acc, repo) => acc + repo.stargazers_count, 0);
	const languages = await fetchLanguageStats(repositories);

	return {
		stats: {
			followers: userData.followers ?? 0,
			following: userData.following ?? 0,
			public_repos: userData.public_repos ?? 0,
			totalStars,
			languages,
		},
		repositories,
	};
}
