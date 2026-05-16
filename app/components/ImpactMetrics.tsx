const metrics = [
	{ value: '20%', label: 'Infrastructure Cost Reduction', source: 'QL2 Software' },
	{ value: '45%', label: 'Cloud Cost Optimization', source: 'TealBook' },
	{ value: '75%', label: 'Dev Cycle Acceleration', source: 'TealBook' },
	{ value: '15+', label: 'Engineers Led', source: 'Career total' },
];

export default function ImpactMetrics() {
	return (
		<div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
			{metrics.map((metric) => (
				<div key={metric.label} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200/75 dark:border-gray-700 p-4 text-center shadow-sm">
					<div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 tabular-nums">
						{metric.value}
					</div>
					<div className="text-xs font-medium text-gray-700 dark:text-gray-300 mt-1 leading-tight">
						{metric.label}
					</div>
					<div className="text-[10px] text-gray-400 dark:text-gray-500 mt-0.5">
						{metric.source}
					</div>
				</div>
			))}
		</div>
	);
}
