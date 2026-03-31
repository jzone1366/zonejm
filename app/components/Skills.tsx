import { Icon } from "@iconify/react"
import skills, { Skill } from "../data/skills"

const proficiencyStyles: Record<string, string> = {
	Expert: 'border-l-blue-500',
	Advanced: 'border-l-blue-300 dark:border-l-blue-400',
	Intermediate: 'border-l-gray-300 dark:border-l-gray-600',
};

export default function Skills() {
	// Group skills by category
	const skillsByCategory = skills.reduce((acc, skill) => {
		if (!acc[skill.category]) {
			acc[skill.category] = [];
		}
		acc[skill.category].push(skill);
		return acc;
	}, {} as Record<string, Skill[]>);

	const categories = Object.keys(skillsByCategory).sort();

	return (
		<div className="space-y-4">
			<div className="flex items-center gap-2 mb-4">
				<div className="w-5 h-5 rounded bg-blue-50 dark:bg-blue-900/50 flex items-center justify-center">
					<Icon icon="heroicons:code-bracket" className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
				</div>
				<h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Skills</h3>
			</div>
			
			<div className="space-y-4">
				{categories.map((category) => (
					<div key={category} className="space-y-2">
						<h4 className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
							{category}
						</h4>
						<div className="flex flex-wrap gap-2">
							{skillsByCategory[category].map((skill, index) => (
								<div
									key={index}
									className={`group flex items-center gap-2 px-2.5 py-1.5 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 border-l-2 rounded-lg hover:bg-white dark:hover:bg-gray-700 hover:border-gray-200 dark:hover:border-gray-600 hover:shadow-sm transition-all duration-200 ${proficiencyStyles[skill.proficiency ?? 'Intermediate']}`}
									itemProp="knowsAbout"
									title={`${skill.name} — ${skill.proficiency ?? 'Intermediate'}`}
								>
									<Icon icon={skill.icon}
										className="w-4 h-4 opacity-80 group-hover:opacity-100 transition-opacity flex-shrink-0"
									/>
									<span className="text-xs text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white font-medium transition-colors">
										{skill.name}
									</span>
								</div>
							))}
						</div>
					</div>
				))}
			</div>

			{/* Proficiency legend */}
			<div className="flex items-center gap-4 pt-1 text-[10px] text-gray-500 dark:text-gray-400">
				<div className="flex items-center gap-1.5">
					<div className="w-3 border-l-2 border-l-blue-500 h-3 rounded-sm bg-gray-50 dark:bg-gray-800"></div>
					<span>Expert</span>
				</div>
				<div className="flex items-center gap-1.5">
					<div className="w-3 border-l-2 border-l-blue-300 dark:border-l-blue-400 h-3 rounded-sm bg-gray-50 dark:bg-gray-800"></div>
					<span>Advanced</span>
				</div>
				<div className="flex items-center gap-1.5">
					<div className="w-3 border-l-2 border-l-gray-300 dark:border-l-gray-600 h-3 rounded-sm bg-gray-50 dark:bg-gray-800"></div>
					<span>Intermediate</span>
				</div>
			</div>
		</div>
	)
}
