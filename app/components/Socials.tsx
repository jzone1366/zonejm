import { Icon } from '@iconify/react'
import Link from 'next/link'

export default function Socials() {
	return (
		<div className="space-y-4">
			<div className="flex items-center gap-2 mb-4">
				<div className="w-5 h-5 rounded bg-blue-50 flex items-center justify-center">
					<Icon icon="heroicons:user-group" className="w-3.5 h-3.5 text-blue-600" />
				</div>
				<h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Connect With Me</h3>
			</div>
			<div className="space-y-2.5">
				<Link href="https://github.com/jzone1366"
					target="_blank"
					rel="noopener noreferrer"
					className="group flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-all duration-200 p-2.5 rounded-xl hover:bg-gray-50/80 hover:shadow-sm">
					<div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-50 group-hover:bg-gray-100 transition-colors">
						<Icon icon="simple-icons:github" className="w-5 h-5" />
					</div>
					<span className="font-medium">GitHub</span>
				</Link>
				<Link href="https://linkedin.com/in/zonejm"
					target="_blank"
					rel="noopener noreferrer"
					className="group flex items-center gap-3 text-gray-600 hover:text-[#0A66C2] transition-all duration-200 p-2.5 rounded-xl hover:bg-blue-50/50 hover:shadow-sm">
					<div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50/50 group-hover:bg-blue-50 transition-colors">
						<Icon icon="simple-icons:linkedin" className="w-5 h-5" />
					</div>
					<span className="font-medium">LinkedIn</span>
				</Link>
				<Link href="https://www.kaggle.com/zonejm"
					target="_blank"
					rel="noopener noreferrer"
					className="group flex items-center gap-3 text-gray-600 hover:text-[#20BEFF] transition-all duration-200 p-2.5 rounded-xl hover:bg-blue-50/50 hover:shadow-sm">
					<div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50/50 group-hover:bg-blue-50 transition-colors">
						<Icon icon="simple-icons:kaggle" className="w-5 h-5" />
					</div>
					<span className="font-medium">Kaggle</span>
				</Link>
				<Link href="https://x.com/jzone1366"
					target="_blank"
					rel="noopener noreferrer"
					className="group flex items-center gap-3 text-gray-600 hover:text-[#000000] transition-all duration-200 p-2.5 rounded-xl hover:bg-gray-100 hover:shadow-sm">
					<div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-50 group-hover:bg-[#000000] transition-colors">
						<Icon icon="simple-icons:x" className="w-5 h-5 group-hover:text-white transition-colors" />
					</div>
					<span className="font-medium">@jzone1366</span>
				</Link>
			</div>
		</div>

	)
}
