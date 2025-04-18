import Intro from "./components/Intro";
import Details from "./components/Details"
import Socials from "./components/Socials"
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills"
import GithubStatsCard from "./components/GithubStats";
import GithubProjects from "./components/GithubProjects";
import Apps from "./components/Apps";

import Link from 'next/link'
import { Icon } from '@iconify/react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="container max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] lg:grid-cols-[350px_1fr] xl:grid-cols-[450px_1fr] gap-8">
          <aside className="md:sticky md:top-8 h-fit">
            <div className="bg-white rounded-2xl border border-gray-200/75 p-8 shadow-sm">
              <div className="space-y-8">
                <Intro />
                <div className="h-px bg-gray-100"></div>
                <Details />
                <div className="h-px bg-gray-100"></div>
                <Socials />
                <div className="h-px bg-gray-100"></div>
                <Skills />
                <div className="h-px bg-gray-100"></div>
                <GithubStatsCard />
              </div>
            </div>
          </aside>

          <main className="space-y-8">
            <Experience />
            <Apps />
            <Education />
            <GithubProjects />
          </main>
        </div>
      </div>
      <footer className="border-t border-gray-200 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <Link
              href="https://www.netlify.com/"
              className="group flex items-center gap-2 hover:text-blue-600 transition-colors">
              <Icon icon="logos:netlify" />
              <span>Deployed and Hosted via Netlify</span>
            </Link>
            <Link
              href="https://github.com/jzone1366/zonejm"
              className="group flex items-center gap-2 hover:text-blue-600 transition-colors">
              <Icon icon="simple-icons:github" className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity" />
              <span>Last updated on 04/18/2025</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
