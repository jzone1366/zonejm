import Link from 'next/link';
import { Icon } from '@iconify/react';
import { SOCIAL_URLS } from '../lib/constants';
import buildInfo from '../build-info.json';

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-t border-gray-200 mt-12 bg-white">
			<div className="max-w-6xl mx-auto px-4 py-8">
				<div className="flex flex-col items-center gap-6">
					{/* Main Footer Content */}
					<div className="flex flex-col sm:flex-row justify-between items-center gap-4 w-full text-sm text-gray-600">
						<div className="flex flex-col sm:flex-row items-center gap-4">
							<Link
								href="https://www.netlify.com/"
								className="group flex items-center gap-2 hover:text-blue-600 transition-colors">
								<Icon icon="logos:netlify" className="w-4 h-4" />
								<span>Deployed via Netlify</span>
							</Link>
							<div className="hidden sm:block w-px h-4 bg-gray-300"></div>
							<Link
								href={SOCIAL_URLS.repo}
								className="group flex items-center gap-2 hover:text-blue-600 transition-colors">
								<Icon icon="simple-icons:github" className="w-4 h-4 opacity-80 group-hover:opacity-100 transition-opacity" />
								<span>View Source</span>
							</Link>
						</div>
						<div className="text-center">
							<span>Last updated: {buildInfo.lastUpdated}</span>
							{buildInfo.commitHash && (
								<span className="ml-2 text-xs text-gray-400">({buildInfo.commitHash})</span>
							)}
						</div>
					</div>
					
					{/* Copyright and Additional Info */}
					<div className="text-center text-xs text-gray-500 border-t border-gray-100 pt-4 w-full">
						<p className="mb-2">&copy; {currentYear} Joshua Zone. All rights reserved.</p>
						<p>Built with Next.js, React, TypeScript, and Tailwind CSS</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
