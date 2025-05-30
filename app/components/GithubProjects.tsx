'use client';

import { Icon } from '@iconify/react';
import { useGithub } from '../hooks/useGithub';

export default function GithubProjects() {
	const { repositories, loading, error } = useGithub({
		username: 'jzone1366',
		reposPerPage: 6,
	});

	return (
		<div>
			<div className="flex items-center gap-3 mb-6 md:mb-8">
				<h2 className="text-xl md:text-2xl font-bold text-gray-900">Projects</h2>
				<div className="flex-grow border-t border-gray-200" />
			</div>

			{loading ? (
				<div className="flex justify-center items-center py-12">
					<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
				</div>
			) : error ? (
				<div className="text-red-600 text-center py-12">
					Failed to load projects. Please try again later.
				</div>
			) : (
				<div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{repositories.map((project) => (
						<a
							key={project.name}
							href={project.html_url}
							target="_blank"
							rel="noopener noreferrer"
							className="group block bg-white rounded-2xl border border-gray-200/75 p-4 md:p-6 hover:border-blue-500/50 hover:shadow-md transition-all duration-200"
						>
							{/* Header with language and stats */}
							<div className="flex items-center justify-between mb-3">
								<div className="flex items-center gap-2">
									<Icon icon="mdi:github" className="w-5 h-5 text-gray-400" />
									{project.language && (
										<span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
											{project.language}
										</span>
									)}
								</div>
								<div className="flex items-center gap-3 text-xs text-gray-500">
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
							<h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
								{project.name}
							</h3>

							{/* Description */}
							<p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-3">
								{project.description || 'No description available'}
							</p>

							{/* Topics (first 3 only) */}
							{project.topics && project.topics.length > 0 && (
								<div className="flex flex-wrap gap-1.5 mb-3">
									{project.topics.slice(0, 3).map((topic) => (
										<span
											key={topic}
											className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-700"
										>
											{topic}
										</span>
									))}
									{project.topics.length > 3 && (
										<span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-gray-50 text-gray-500">
											+{project.topics.length - 3}
										</span>
									)}
								</div>
							)}

							{/* Footer with update date */}
							<div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100">
								<span>Updated {new Date(project.updated_at).toLocaleDateString()}</span>
								<Icon icon="heroicons:arrow-top-right-on-square" className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
							</div>
						</a>
					))}
				</div>
			)}
		</div>
	);
}

