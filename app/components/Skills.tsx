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
		<section id="skills" className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/75 dark:border-gray-700 p-6 md:p-8 shadow-sm">
			<div className="flex items-center gap-3 mb-6 md:mb-8">
				<h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">Skills</h2>
				<div className="flex-grow border-t border-gray-200 dark:border-gray-700"></div>
			</div>

			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{categories.map((category) => (
					<div key={category}>
						<h3 className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
							{category}
						</h3>
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
			<div className="flex items-center gap-4 pt-4 mt-6 border-t border-gray-100 dark:border-gray-800 text-[10px] text-gray-500 dark:text-gray-400">
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
		</section>
	)
}
