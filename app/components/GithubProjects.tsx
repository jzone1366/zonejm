'use client';

import { Disclosure } from '@headlessui/react';
import { Icon } from '@iconify/react';
import { useGithub } from '../hooks/useGithub';

export default function GithubProjects() {
	const { repositories, loading, error, formatSize } = useGithub({
		username: 'jzone1366',
		reposPerPage: 6,
	});

	return (
		<div>
			<div className="flex items-center gap-3 mb-8">
				<h2 className="text-2xl font-bold text-gray-900">Projects</h2>
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
				<div className="space-y-6">
					{repositories.map((project, index) => (
						<Disclosure
							key={project.name}
							defaultOpen={index === 0}
							as="div"
							className="group relative bg-white rounded-2xl border border-gray-200/75 hover:border-blue-500/50 hover:shadow-sm transition-all duration-200"
						>
							{({ open }) => (
								<div className="p-8">
									{/* Header */}
									<div className="flex items-start gap-4 mb-4">
										<div className="relative">
											<div className="w-12 h-12 rounded-xl bg-gray-50 p-2 flex items-center justify-center border border-gray-100 group-hover:border-blue-100 transition-colors">
												<Icon icon="mdi:github" className="w-6 h-6 text-gray-600" />
											</div>
										</div>
										<div className="flex-grow min-w-0">
											<div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
												<h3 className="text-lg font-semibold text-gray-900">
													<a
														href={project.html_url}
														target="_blank"
														rel="noopener noreferrer"
														className="hover:text-blue-600 transition-colors"
													>
														{project.name}
													</a>
												</h3>
												<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
													<Icon icon="mdi:star" className="w-3 h-3" />
													{project.stargazers_count}
												</span>
												<span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-50 text-gray-700">
													{new Date(project.updated_at).toLocaleDateString()}
												</span>
											</div>
											<span className="block text-blue-600 font-medium">{project.language}</span>
										</div>

										<Disclosure.Button className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition-all duration-200">
											<span>{open ? 'Hide Details' : 'View Details'}</span>
											<Icon
												icon="heroicons:chevron-down"
												className={`w-4 h-4 transform transition-transform duration-200 ${open ? 'rotate-180' : ''
													}`}
											/>
										</Disclosure.Button>
									</div>

									{/* Description */}
									<div>
										<p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

										{/* Topics */}
										{project.topics?.length > 0 && (
											<div className="flex flex-wrap gap-2">
												{project.topics.map((topic) => (
													<span
														key={topic}
														className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
													>
														{topic}
													</span>
												))}
											</div>
										)}
									</div>

									{/* Panel */}
									<Disclosure.Panel className="mt-4 pt-4 border-t border-gray-100">
										<div className="grid grid-cols-2 gap-4">
											<div>
												<h4 className="text-sm font-medium text-gray-900 mb-2">Repository Details</h4>
												<dl className="space-y-1 text-sm">
													<div className="flex items-center gap-2">
														<dt className="text-gray-500">Created:</dt>
														<dd className="text-gray-900">
															{new Date(project.created_at).toLocaleDateString()}
														</dd>
													</div>
													<div className="flex items-center gap-2">
														<dt className="text-gray-500">Size:</dt>
														<dd className="text-gray-900">{formatSize(project.size)}</dd>
													</div>
													<div className="flex items-center gap-2">
														<dt className="text-gray-500">Default Branch:</dt>
														<dd className="text-gray-900">{project.default_branch}</dd>
													</div>
												</dl>
											</div>
											<div>
												<h4 className="text-sm font-medium text-gray-900 mb-2">Statistics</h4>
												<dl className="space-y-1 text-sm">
													<div className="flex items-center gap-2">
														<dt className="text-gray-500">Forks:</dt>
														<dd className="text-gray-900">{project.forks_count}</dd>
													</div>
													<div className="flex items-center gap-2">
														<dt className="text-gray-500">Watchers:</dt>
														<dd className="text-gray-900">{project.watchers_count}</dd>
													</div>
													<div className="flex items-center gap-2">
														<dt className="text-gray-500">Visibility:</dt>
														<dd className="text-gray-900">{project.private ? 'Private' : 'Public'}</dd>
													</div>
												</dl>
											</div>
										</div>
									</Disclosure.Panel>
								</div>
							)}
						</Disclosure>
					))}
				</div>
			)}
		</div>
	);
}

