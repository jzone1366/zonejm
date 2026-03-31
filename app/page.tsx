import { Suspense } from "react";
import Intro from "./components/Intro";
import Details from "./components/Details";
import Socials from "./components/Socials";
import SidebarEducation from "./components/SidebarEducation";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import GithubStatsCard from "./components/GithubStats";
import GithubProjects from "./components/GithubProjects";
import About from "./components/About";
import Footer from "./components/Footer";
import SidebarToggle from "./components/SidebarToggle";
import SectionNav from "./components/SectionNav";
import ThemeToggle from "./components/ThemeToggle";
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
			<div className="container max-w-6xl mx-auto px-4 py-6 md:py-12">
				<div className="flex flex-col lg:grid lg:grid-cols-[350px_1fr] xl:grid-cols-[400px_1fr] gap-6 lg:gap-8">
					{/* Sidebar */}
					<aside className="lg:sticky lg:top-8 lg:max-h-[calc(100vh-4rem)] lg:overflow-y-auto scrollbar-hide h-fit order-1 lg:order-none" aria-label="Profile sidebar">
						<div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/75 dark:border-gray-700 p-6 md:p-8 shadow-sm">
							<div className="space-y-6 md:space-y-8">
								<div className="flex justify-end -mb-4">
									<ThemeToggle />
								</div>
								<Intro />
								<SidebarToggle>
									<div className="h-px bg-gray-100 dark:bg-gray-800"></div>
									<Details />
									<div className="h-px bg-gray-100 dark:bg-gray-800"></div>
									<Socials />
									<div className="h-px bg-gray-100 dark:bg-gray-800"></div>
								<Skills />
								<div className="h-px bg-gray-100 dark:bg-gray-800"></div>
								<SidebarEducation />
								<div className="h-px bg-gray-100 dark:bg-gray-800"></div>
								<Suspense fallback={<GithubStatsLoading />}>
										<GithubStatsSection />
									</Suspense>
								</SidebarToggle>
							</div>
						</div>
					</aside>

					{/* Main Content */}
					<main id="main-content" className="space-y-6 md:space-y-8 order-2 lg:order-none">
						<Experience />
						<About />
						<Suspense fallback={<GithubProjectsLoading />}>
							<GithubProjectsSection />
						</Suspense>
					</main>
				</div>
			</div>
			
			<Footer />
		</div>
		</IconProvider>
	);
}
