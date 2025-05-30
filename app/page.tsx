import Intro from "./components/Intro";
import Details from "./components/Details"
import Socials from "./components/Socials"
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills"
import GithubStatsCard from "./components/GithubStats";
import GithubProjects from "./components/GithubProjects";
import Apps from "./components/Apps";
import About from "./components/About";

import Link from 'next/link'
import { Icon } from '@iconify/react'
import buildInfo from './build-info.json';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="container max-w-6xl mx-auto px-4 py-6 md:py-12">
        <div className="flex flex-col lg:grid lg:grid-cols-[350px_1fr] xl:grid-cols-[400px_1fr] gap-6 lg:gap-8">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-8 h-fit order-1 lg:order-none">
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
                  <GithubStatsCard />
                </div>
              </div>
            </div>
            
            {/* Mobile GitHub Stats */}
            <div className="mt-6 lg:hidden">
              <div className="bg-white rounded-2xl border border-gray-200/75 p-6 shadow-sm">
                <GithubStatsCard />
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="space-y-6 md:space-y-8 order-2 lg:order-none">
            <Experience />
            <About />
            <Apps />
            <Education />
            <GithubProjects />
          </main>
        </div>
      </div>
      
      <footer className="border-t border-gray-200 mt-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col items-center gap-6">
            {/* Main Footer Content */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 w-full text-sm text-gray-600">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="https://www.netlify.com/"
                  className="group flex items-center gap-2 hover:text-blue-600 transition-colors">
                  <Icon icon="logos:netlify" className="w-4 h-4" />
                  <span>Deployed via Netlify</span>
                </Link>
                <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
                <Link
                  href="https://github.com/jzone1366/zonejm"
                  className="group flex items-center gap-2 hover:text-blue-600 transition-colors">
                  <Icon icon="simple-icons:github" className="w-4 h-4 opacity-80 group-hover:opacity-100 transition-opacity" />
                  <span>View Source</span>
                </Link>
              </div>
              <div className="text-center">
                <span>Last updated: {buildInfo.lastUpdated}</span>
                {buildInfo.commitHash && (
                  <span className="ml-2 text-xs text-gray-400">({buildInfo.commitHash})</span>
                )}
              </div>
            </div>
            
            {/* Copyright and Additional Info */}
            <div className="text-center text-xs text-gray-500 border-t border-gray-100 pt-4 w-full">
              <p className="mb-2">© 2025 Joshua Zone. All rights reserved.</p>
              <p>Built with Next.js, React, TypeScript, and Tailwind CSS</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
