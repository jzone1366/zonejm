import { Icon } from '@iconify/react'
import Link from 'next/link'
import { GITHUB_USERNAME, SOCIAL_URLS } from '../lib/constants'

export default function Socials() {
	return (
		<div className="space-y-4">
			<div className="flex items-center gap-2 mb-4">
				<div className="w-5 h-5 rounded bg-blue-50 dark:bg-blue-900/50 flex items-center justify-center">
					<Icon icon="heroicons:user-group" className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
				</div>
				<h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Connect With Me</h3>
			</div>
		<div className="space-y-2.5">
			<Link href={SOCIAL_URLS.github}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Visit GitHub profile"
				className="group flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-200 p-2.5 rounded-xl hover:bg-gray-50/80 dark:hover:bg-gray-800 hover:shadow-sm">
				<div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-50 dark:bg-gray-800 group-hover:bg-gray-100 dark:group-hover:bg-gray-700 transition-colors">
					<Icon icon="simple-icons:github" className="w-5 h-5" />
				</div>
				<span className="font-medium">GitHub</span>
			</Link>
			<Link href={SOCIAL_URLS.linkedin}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Visit LinkedIn profile"
				className="group flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-[#0A66C2] transition-all duration-200 p-2.5 rounded-xl hover:bg-blue-50/50 dark:hover:bg-blue-900/20 hover:shadow-sm">
				<div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50/50 dark:bg-blue-900/30 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/50 transition-colors">
					<Icon icon="simple-icons:linkedin" className="w-5 h-5" />
				</div>
				<span className="font-medium">LinkedIn</span>
			</Link>
			<Link href={SOCIAL_URLS.kaggle}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Visit Kaggle profile"
				className="group flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-[#20BEFF] transition-all duration-200 p-2.5 rounded-xl hover:bg-blue-50/50 dark:hover:bg-blue-900/20 hover:shadow-sm">
				<div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50/50 dark:bg-blue-900/30 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/50 transition-colors">
					<Icon icon="simple-icons:kaggle" className="w-5 h-5" />
				</div>
				<span className="font-medium">Kaggle</span>
			</Link>
			<Link href={SOCIAL_URLS.x}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Visit X (Twitter) profile"
				className="group flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-[#000000] dark:hover:text-white transition-all duration-200 p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-sm">
				<div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-50 dark:bg-gray-800 group-hover:bg-[#000000] dark:group-hover:bg-white transition-colors">
					<Icon icon="simple-icons:x" className="w-5 h-5 group-hover:text-white dark:group-hover:text-black transition-colors" />
				</div>
				<span className="font-medium">@{GITHUB_USERNAME}</span>
			</Link>
		</div>
		</div>

	)
}
