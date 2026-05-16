import { Icon } from '@iconify/react';
import Image from 'next/image';
import type { Repository } from '../lib/github';
import apps from '../data/apps';

export default function GithubProjects({ repositories }: { repositories: Repository[] }) {
	return (
		<section id="projects">
			<div className="flex items-center gap-3 mb-6 md:mb-8">
				<h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">Projects</h2>
				<div className="flex-grow border-t border-gray-200 dark:border-gray-700" />
			</div>

			<div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{/* Featured apps */}
				{apps.map((app) => (
					<div
						key={app.name}
						className="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/75 dark:border-gray-700 p-4 md:p-6 hover:border-blue-500/50 hover:shadow-md transition-all duration-200 ring-1 ring-blue-100/50 dark:ring-blue-800/30"
					>
						{/* Header with featured badge */}
						<div className="flex items-center justify-between mb-3">
							<div className="flex items-center gap-2">
								<div className="w-8 h-8 rounded-lg bg-gray-50 dark:bg-gray-800 p-1 flex items-center justify-center border border-gray-100 dark:border-gray-700">
									<Image
										src={`/apps/${app.icon}`}
										alt={`${app.name} icon`}
										width={24}
										height={24}
										className="w-full h-full object-contain"
									/>
								</div>
								<span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/50 px-2 py-0.5 rounded-full">
									Featured
								</span>
							</div>
						</div>

						{/* App name */}
						<h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-2">
							{app.name}
						</h3>

						{/* Description */}
						<p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3">
							{app.description}
						</p>

						{/* Store links */}
						<div className="flex flex-wrap gap-3 pt-3 border-t border-gray-100 dark:border-gray-800">
							{app.appStoreUrl && (
								<a
									href={app.appStoreUrl}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={`Download ${app.name} on the App Store`}
									className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
								>
									<Icon icon="logos:apple-app-store" className="w-4 h-4" />
									<span>App Store</span>
								</a>
							)}
							{app.playStoreUrl && (
								<a
									href={app.playStoreUrl}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={`Download ${app.name} on Google Play`}
									className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
								>
									<Icon icon="logos:google-play-icon" className="w-4 h-4" />
									<span>Play Store</span>
								</a>
							)}
						</div>
					</div>
				))}

				{/* GitHub repositories */}
				{repositories.map((project) => (
					<a
						key={project.name}
						href={project.html_url}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`View ${project.name} on GitHub`}
						className="group block bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/75 dark:border-gray-700 p-4 md:p-6 hover:border-blue-500/50 hover:shadow-md transition-all duration-200"
					>
						{/* Header with language and stats */}
						<div className="flex items-center justify-between mb-3">
							<div className="flex items-center gap-2">
								<Icon icon="mdi:github" className="w-5 h-5 text-gray-500 dark:text-gray-400" />
								{project.language && (
									<span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/50 px-2 py-0.5 rounded-full">
										{project.language}
									</span>
								)}
							</div>
							<div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
								<div className="flex items-center gap-1">
									<Icon icon="mdi:star" className="w-3 h-3" />
									<span>{project.stargazers_count}</span>
								</div>
								<div className="flex items-center gap-1">
									<Icon icon="mdi:source-fork" className="w-3 h-3" />
									<span>{project.forks_count}</span>
								</div>
							</div>
						</div>

						{/* Project name */}
						<h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
							{project.name}
						</h3>

						{/* Description */}
						<p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3">
							{project.description || 'No description available'}
						</p>

						{/* Topics (first 3 only) */}
						{project.topics && project.topics.length > 0 && (
							<div className="flex flex-wrap gap-1.5 mb-3">
								{project.topics.slice(0, 3).map((topic) => (
									<span
										key={topic}
										className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
									>
										{topic}
									</span>
								))}
								{project.topics.length > 3 && (
									<span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
										+{project.topics.length - 3}
									</span>
								)}
							</div>
						)}

						{/* Footer with update date */}
						<div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 pt-3 border-t border-gray-100 dark:border-gray-800">
							<span>Updated {new Date(project.updated_at).toLocaleDateString()}</span>
							<Icon icon="heroicons:arrow-top-right-on-square" className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
						</div>
					</a>
				))}
			</div>
		</section>
	);
}
