import { Icon } from '@iconify/react';
import type { GithubStats } from '../lib/github';

export default function GithubStatsCard({ stats }: { stats: GithubStats }) {
	return (
		<div>
			<div className="flex items-center gap-2 mb-4">
				<div className="w-5 h-5 rounded bg-blue-50 dark:bg-blue-900/50 flex items-center justify-center">
					<Icon icon="mdi:github" className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
				</div>
				<h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">GitHub Stats</h3>
			</div>

			<div className="space-y-4">
				{/* Stats Grid */}
				<div className="grid grid-cols-2 gap-3">
					<StatCard icon="mdi:account-group" label="Followers" value={stats.followers} bg="blue" />
					<StatCard icon="mdi:account-multiple" label="Following" value={stats.following} bg="green" />
					<StatCard icon="mdi:source-repository" label="Repos" value={stats.public_repos} bg="purple" />
					<StatCard icon="mdi:star" label="Stars" value={stats.totalStars} bg="yellow" />
				</div>

				{/* Top Languages */}
				{stats.languages.length > 0 && (
					<div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200/75 dark:border-gray-700 p-4 hover:border-blue-500/50 hover:shadow-sm transition-all duration-200">
						<div className="flex items-center gap-3 mb-3">
							<div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-900/50 flex items-center justify-center">
								<Icon icon="mdi:code-braces" className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
							</div>
							<div>
								<div className="text-xs text-gray-600 dark:text-gray-400">Top Languages</div>
								<div className="text-sm font-semibold text-gray-900 dark:text-white">Most Used</div>
							</div>
						</div>
						<div className="flex flex-wrap gap-2">
							{stats.languages.map((language) => (
								<span
									key={language}
									className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300"
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

function StatCard({
	icon,
	label,
	value,
	bg,
}: {
	icon: string;
	label: string;
	value: number;
	bg: 'blue' | 'green' | 'purple' | 'yellow';
}) {
	const bgColor = {
		blue: 'bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400',
		green: 'bg-green-50 text-green-600 dark:bg-green-900/50 dark:text-green-400',
		purple: 'bg-purple-50 text-purple-600 dark:bg-purple-900/50 dark:text-purple-400',
		yellow: 'bg-yellow-50 text-yellow-600 dark:bg-yellow-900/50 dark:text-yellow-400',
	};

	return (
		<div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200/75 dark:border-gray-700 p-3 hover:border-blue-500/50 hover:shadow-sm transition-all duration-200">
			<div className="flex flex-col items-center text-center">
				<div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 ${bgColor[bg]}`}>
					<Icon icon={icon} className="w-4 h-4" />
				</div>
				<div className="text-xs text-gray-600 dark:text-gray-400">{label}</div>
				<div className="text-lg font-bold text-gray-900 dark:text-white">{value}</div>
			</div>
		</div>
	);
}
