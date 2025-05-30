import { Icon } from "@iconify/react"
import skills, { Skill } from "../data/skills"

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
				<div className="w-5 h-5 rounded bg-blue-50 flex items-center justify-center">
					<Icon icon="heroicons:code-bracket" className="w-3.5 h-3.5 text-blue-600" />
				</div>
				<h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Skills</h3>
			</div>
			
			<div className="space-y-4">
				{categories.map((category) => (
					<div key={category} className="space-y-2">
						<h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider">
							{category}
						</h4>
						<div className="flex flex-wrap gap-2">
							{skillsByCategory[category].map((skill, index) => (
								<div
									key={index}
									className="group flex items-center gap-2 px-2.5 py-1.5 bg-gray-50 border border-gray-100 rounded-lg hover:bg-white hover:border-gray-200 hover:shadow-sm transition-all duration-200"
									itemProp="knowsAbout"
									title={skill.name}
								>
									<Icon icon={skill.icon}
										className="w-4 h-4 opacity-80 group-hover:opacity-100 transition-opacity flex-shrink-0"
									/>
									<span className="text-xs text-gray-600 group-hover:text-gray-900 font-medium transition-colors">
										{skill.name}
									</span>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
