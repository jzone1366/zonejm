import educations from "@/app/data/education";
import Image from 'next/image';

export default function SidebarEducation() {
	return (
		<div id="education" itemScope itemType="https://schema.org/EducationalOrganization">
			<h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Education</h3>
			{educations.map((education, index) => (
				<div key={index} className="flex items-start gap-3">
					<div className="w-10 h-10 rounded-lg bg-gray-50 dark:bg-gray-800 p-1.5 flex items-center justify-center border border-gray-100 dark:border-gray-700 flex-shrink-0">
						<Image
							src={`/schools/${education.logo}`}
							alt={`${education.institution} logo`}
							width={32}
							height={32}
							className="w-full h-full object-contain"
						/>
					</div>
					<div className="min-w-0">
						<p className="text-sm font-semibold text-gray-900 dark:text-white" itemProp="name">{education.institution}</p>
						<p className="text-xs text-gray-600 dark:text-gray-300 mt-0.5">{education.degree}</p>
						<p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{education.period}</p>
					</div>
				</div>
			))}
		</div>
	);
}
