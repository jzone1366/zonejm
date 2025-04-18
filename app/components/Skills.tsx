import { Icon } from "@iconify/react"
import skills from "../data/skills"

export default function Skills() {
	return (
		<div className="space-y-4">
			<div className="flex items-center gap-2 mb-4">
				<div className="w-5 h-5 rounded bg-blue-50 flex items-center justify-center">
					<Icon icon="heroicons:code-bracket" className="w-3.5 h-3.5 text-blue-600" />
				</div>
				<h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Skills</h3>
			</div>
			<div className="flex flex-wrap gap-2.5">
				{
					skills.map((skill, index) => (
						<div
							key={index}
							className="group flex items-center gap-2.5 px-3 py-2 bg-gray-50 border border-gray-100 rounded-xl hover:bg-white hover:border-gray-200 hover:shadow-sm transition-all duration-200"
							itemProp="knowsAbout"
						>
							<Icon icon={skill.icon}
								className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity"
							/>
							<span className="text-sm text-gray-600 group-hover:text-gray-900 font-medium transition-colors">{skill.name}</span>
						</div>
					))

				}
			</div>
		</div>
	)
}
