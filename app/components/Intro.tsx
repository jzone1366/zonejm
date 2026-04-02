import Image from "next/image"
import Link from "next/link"
import { Icon } from "@iconify/react"
import ThemeToggle from "./ThemeToggle"
import { SOCIAL_URLS } from "../lib/constants"

const socialLinks = [
	{ href: SOCIAL_URLS.github, icon: 'simple-icons:github', label: 'GitHub' },
	{ href: SOCIAL_URLS.linkedin, icon: 'simple-icons:linkedin', label: 'LinkedIn' },
	{ href: SOCIAL_URLS.kaggle, icon: 'simple-icons:kaggle', label: 'Kaggle' },
	{ href: SOCIAL_URLS.x, icon: 'simple-icons:x', label: 'X (Twitter)' },
];

export default function Intro() {
	return (
		<header className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/75 dark:border-gray-700 p-6 md:p-8 shadow-sm">
			{/* Top row: profile info + theme toggle */}
			<div className="flex items-start justify-between gap-4 mb-6">
				<div className="flex items-start gap-4 md:gap-6 min-w-0">
					<Image
						src="/selfie.jpg"
						alt="Joshua Zone, Software Engineering Leader"
						width={144}
						height={144}
						priority
						itemProp="image"
						className="rounded-2xl object-cover object-[center_20%] ring-4 ring-gray-50 dark:ring-gray-800 shadow-lg w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex-shrink-0"
					/>
					<div className="min-w-0">
						<h1 itemProp="name" className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
							Joshua Zone
						</h1>
						<p className="text-base sm:text-lg text-blue-600 dark:text-blue-400 font-medium mt-1">
							Software Engineering Leader
						</p>
						<div className="flex flex-wrap gap-2 mt-3">
							<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
								10+ Years Experience
							</span>
							<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 dark:bg-green-900/50 dark:text-green-300">
								Principal Architect
							</span>
							<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-purple-50 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300">
								Director of Engineering
							</span>
						</div>
					</div>
				</div>
				<ThemeToggle />
			</div>

			{/* Bio */}
			<p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
				Passionate about distributed systems, microservices, and cloud-native architecture. I lead cross-functional teams to build scalable solutions that drive business growth while fostering innovation and technical excellence.
			</p>

			{/* Contact bar + social links */}
			<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-5 border-t border-gray-100 dark:border-gray-800">
				{/* Contact info */}
				<div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-600 dark:text-gray-300">
					<Link
						href="mailto:jzone1229@gmail.com"
						className="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
					>
						<Icon icon="heroicons:envelope" className="w-4 h-4 text-gray-400 dark:text-gray-500" />
						<span>jzone1229@gmail.com</span>
					</Link>
					<span className="inline-flex items-center gap-1.5">
						<Icon icon="heroicons:map-pin" className="w-4 h-4 text-gray-400 dark:text-gray-500" />
						<span>Atlanta, GA</span>
					</span>
					<a
						href="/resume.pdf"
						download
						className="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
					>
						<Icon icon="heroicons:document-arrow-down" className="w-4 h-4 text-gray-400 dark:text-gray-500" />
						<span>Resume</span>
					</a>
				</div>

				{/* Social links */}
				<div className="flex items-center gap-1.5">
					{socialLinks.map((link) => (
						<Link
							key={link.label}
							href={link.href}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`Visit ${link.label} profile`}
							className="p-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-gray-800 transition-colors"
						>
							<Icon icon={link.icon} className="w-4 h-4" />
						</Link>
					))}
				</div>
			</div>
		</header>
	)
}
