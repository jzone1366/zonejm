import { Suspense } from "react";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import GithubStatsCard from "./components/GithubStats";
import GithubProjects from "./components/GithubProjects";
import About from "./components/About";
import Footer from "./components/Footer";
import SectionNav from "./components/SectionNav";
import SidebarEducation from "./components/SidebarEducation";
import IconProvider from "./components/IconProvider";
import { fetchGithubData } from "./lib/github";

function GithubStatsLoading() {
	return (
		<div className="flex justify-center items-center py-8" role="status" aria-label="Loading GitHub stats">
			<div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500" />
			<span className="sr-only">Loading GitHub stats...</span>
		</div>
	);
}

function GithubProjectsLoading() {
	return (
		<div role="status" aria-label="Loading projects">
			<div className="flex items-center gap-3 mb-6 md:mb-8">
				<h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">Projects</h2>
				<div className="flex-grow border-t border-gray-200 dark:border-gray-700" />
			</div>
			<div className="flex justify-center items-center py-12">
				<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
				<span className="sr-only">Loading projects...</span>
			</div>
		</div>
	);
}

async function GithubStatsSection() {
	try {
		const { stats } = await fetchGithubData();
		return <GithubStatsCard stats={stats} />;
	} catch (err) {
		console.error('Failed to fetch GitHub stats:', err);
		return <div className="text-red-600 dark:text-red-400 text-sm text-center py-4">Failed to load stats</div>;
	}
}

async function GithubProjectsSection() {
	try {
		const { repositories } = await fetchGithubData();
		return <GithubProjects repositories={repositories} />;
	} catch (err) {
		console.error('Failed to fetch GitHub projects:', err);
		return (
			<div className="text-red-600 dark:text-red-400 text-center py-12">
				Failed to load projects. Please try again later.
			</div>
		);
	}
}

export default function Home() {
	return (
		<IconProvider>
		<div className="min-h-screen bg-gray-50/50 dark:bg-gray-950">
			<a
				href="#main-content"
				className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:text-sm focus:font-medium focus:shadow-lg"
			>
				Skip to main content
			</a>
			<SectionNav />

			<div className="max-w-4xl mx-auto px-4 py-6 md:py-12">
				{/* Profile Header */}
				<Intro />

				{/* Main Content */}
				<main id="main-content" className="space-y-6 md:space-y-8 mt-6 md:mt-8">
					<Experience />
					<Skills />
					<About />
					<Suspense fallback={<GithubProjectsLoading />}>
						<GithubProjectsSection />
					</Suspense>
					<div className="grid gap-6 md:grid-cols-2">
						<SidebarEducation />
						<Suspense fallback={<GithubStatsLoading />}>
							<GithubStatsSection />
						</Suspense>
					</div>
				</main>
			</div>

			<Footer />
		</div>
		</IconProvider>
	);
}
