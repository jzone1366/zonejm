import { Suspense } from "react";
import Intro from "./components/Intro";
import Details from "./components/Details";
import Socials from "./components/Socials";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import GithubStatsCard from "./components/GithubStats";
import GithubProjects from "./components/GithubProjects";
import Apps from "./components/Apps";
import About from "./components/About";
import Footer from "./components/Footer";
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
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">Projects</h2>
        <div className="flex-grow border-t border-gray-200" />
      </div>
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
        <span className="sr-only">Loading projects...</span>
      </div>
    </div>
  );
}

async function GithubSection() {
  try {
    const { stats, repositories } = await fetchGithubData();
    return { stats, repositories };
  } catch (err) {
    console.error('Failed to fetch GitHub data:', err);
    return null;
  }
}

export default async function Home() {
  const githubData = await GithubSection();

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="container max-w-6xl mx-auto px-4 py-6 md:py-12">
        <div className="flex flex-col lg:grid lg:grid-cols-[350px_1fr] xl:grid-cols-[400px_1fr] gap-6 lg:gap-8">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-8 h-fit order-1 lg:order-none" aria-label="Profile sidebar">
            <div className="bg-white rounded-2xl border border-gray-200/75 p-6 md:p-8 shadow-sm">
              <div className="space-y-6 md:space-y-8">
                <Intro />
                <div className="h-px bg-gray-100"></div>
                <Details />
                <div className="h-px bg-gray-100"></div>
                <Socials />
                <div className="h-px bg-gray-100"></div>
                <Skills />
                <div className="h-px bg-gray-100 hidden lg:block"></div>
                <div className="hidden lg:block">
                  <Suspense fallback={<GithubStatsLoading />}>
                    {githubData ? (
                      <GithubStatsCard stats={githubData.stats} />
                    ) : (
                      <div className="text-red-600 text-sm text-center py-4">Failed to load stats</div>
                    )}
                  </Suspense>
                </div>
              </div>
            </div>
            
            {/* Mobile GitHub Stats */}
            <div className="mt-6 lg:hidden">
              <div className="bg-white rounded-2xl border border-gray-200/75 p-6 shadow-sm">
                <Suspense fallback={<GithubStatsLoading />}>
                  {githubData ? (
                    <GithubStatsCard stats={githubData.stats} />
                  ) : (
                    <div className="text-red-600 text-sm text-center py-4">Failed to load stats</div>
                  )}
                </Suspense>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="space-y-6 md:space-y-8 order-2 lg:order-none">
            <Experience />
            <About />
            <Apps />
            <Education />
            <Suspense fallback={<GithubProjectsLoading />}>
              {githubData ? (
                <GithubProjects repositories={githubData.repositories} />
              ) : (
                <div className="text-red-600 text-center py-12">
                  Failed to load projects. Please try again later.
                </div>
              )}
            </Suspense>
          </main>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
