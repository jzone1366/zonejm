import { useEffect, useState, useCallback } from 'react';

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

interface GithubConfig {
	username: string;
	reposPerPage?: number;
}

export function useGithub(config: GithubConfig) {
	const [repositories, setRepositories] = useState<Repository[]>([]);
	const [stats, setStats] = useState<GithubStats>({
		followers: 0,
		following: 0,
		public_repos: 0,
		totalStars: 0,
		languages: [],
	});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);

	const baseUrl = 'https://api.github.com';

	const fetchUserData = useCallback(async () => {
		try {
			const response = await fetch(`${baseUrl}/users/${config.username}`);
			const userData = await response.json();

			if (!response.ok) {
				throw new Error(userData.message || 'Failed to fetch user data');
			}

			setStats((prev) => ({
				...prev,
				followers: userData.followers,
				following: userData.following,
				public_repos: userData.public_repos,
			}));
		} catch (err) {
			setError(err as Error);
			console.error('Error fetching user data:', err);
		}
	}, [config.username]);

	const fetchRepositories = useCallback(async () => {
		try {
			const response = await fetch(
				`${baseUrl}/users/${config.username}/repos?sort=updated&per_page=${config.reposPerPage || 6}`
			);
			const data: Repository[] = await response.json();

			if (!response.ok) {
				throw new Error(data?.['message'] || 'Failed to fetch repositories');
			}

			setRepositories(data);

			const totalStars = data.reduce((acc, repo) => acc + repo.stargazers_count, 0);

			const languageStats: Record<string, number> = {};
			await Promise.all(
				data.map(async (repo) => {
					const res = await fetch(repo.languages_url);
					if (res.ok) {
						const langs = await res.json();
						for (const lang of Object.keys(langs)) {
							languageStats[lang] = (languageStats[lang] || 0) + 1;
						}
					}
				})
			);

			const topLanguages = Object.entries(languageStats)
				.sort(([, a], [, b]) => b - a)
				.slice(0, 5)
				.map(([lang]) => lang);

			setStats((prev) => ({
				...prev,
				totalStars,
				languages: topLanguages,
			}));
		} catch (err) {
			setError(err as Error);
			console.error('Error fetching repositories:', err);
		}
	}, [config.username, config.reposPerPage]);

	const fetchGithubData = useCallback(async () => {
		setLoading(true);
		setError(null);
		try {
			await Promise.all([fetchUserData(), fetchRepositories()]);
		} catch (err) {
			setError(err as Error);
		} finally {
			setLoading(false);
		}
	}, [fetchUserData, fetchRepositories]);

	const formatSize = (size: number): string => {
		if (size < 1024) return `${size} KB`;
		return `${(size / 1024).toFixed(1)} MB`;
	};

	// Optional: fetch data on mount
	useEffect(() => {
		fetchGithubData();
	}, [fetchGithubData]);

	return {
		repositories,
		stats,
		loading,
		error,
		fetchGithubData,
		formatSize,
	};
}

