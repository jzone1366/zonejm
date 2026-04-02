import { Icon } from '@iconify/react';
import type { GithubStats } from '../lib/github';

export default function GithubStatsCard({ stats }: { stats: GithubStats }) {
	return (
		<div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/75 dark:border-gray-700 p-6 md:p-8 shadow-sm">
			<h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">GitHub</h3>

			<div className="space-y-4">
				{/* Top Languages */}
				{stats.languages.length > 0 && (
					<div>
						<div className="flex items-center gap-2 mb-3">
							<Icon icon="mdi:code-braces" className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
							<span className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Top Languages</span>
						</div>
						<div className="flex flex-wrap gap-2">
							{stats.languages.map((language) => (
								<span
									key={language}
									className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800/50"
								>
									{language}
								</span>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

