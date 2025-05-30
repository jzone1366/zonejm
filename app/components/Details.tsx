import Link from 'next/link'
import { Icon } from '@iconify/react'

export default function Details() {
	return (
		<div className="space-y-4">
			<div className="flex items-center gap-2 mb-4">
				<div className="w-5 h-5 rounded bg-blue-50 flex items-center justify-center">
					<Icon icon="heroicons:identification" className="w-3.5 h-3.5 text-blue-600" />
				</div>
				<h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Contact Details</h3>
			</div>
			<div className="space-y-2">
				<Link
					href="mailto:jzone1229@gmail.com"
					className="group flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-all duration-200 p-2.5 rounded-xl hover:bg-blue-50/50 hover:shadow-sm">
					<div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50/50 group-hover:bg-blue-50 transition-colors">
						<Icon icon="heroicons:envelope" className="w-4 h-4" />
					</div>
					<div className="min-w-0 flex-1">
						<span className="font-medium text-sm">Email</span>
						<span className="block text-xs text-gray-500 truncate">jzone1229@gmail.com</span>
					</div>
				</Link>
				
				<Link
					href="tel:+1234567890"
					className="group flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-all duration-200 p-2.5 rounded-xl hover:bg-blue-50/50 hover:shadow-sm">
					<div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50/50 group-hover:bg-blue-50 transition-colors">
						<Icon icon="heroicons:phone" className="w-4 h-4" />
					</div>
					<div className="min-w-0 flex-1">
						<span className="font-medium text-sm">Phone</span>
						<span className="block text-xs text-gray-500">Available upon request</span>
					</div>
				</Link>

				<a href="/resume.pdf"
					download
					className="group flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-all duration-200 p-2.5 rounded-xl hover:bg-blue-50/50 hover:shadow-sm">
					<div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50/50 group-hover:bg-blue-50 transition-colors">
						<Icon icon="heroicons:document-arrow-down" className="w-4 h-4" />
					</div>
					<div className="min-w-0 flex-1">
						<span className="font-medium text-sm">Resume</span>
						<span className="block text-xs text-gray-500">Download PDF</span>
					</div>
				</a>

				<div className="flex items-center gap-3 text-gray-600 p-2.5">
					<div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-50">
						<Icon icon="heroicons:map-pin" className="w-4 h-4" />
					</div>
					<div className="min-w-0 flex-1">
						<span className="font-medium text-sm">Location</span>
						<span className="block text-xs text-gray-500">Atlanta, GA, USA</span>
					</div>
				</div>
			</div>
		</div>
	)
}
