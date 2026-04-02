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
		<header className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-blue-950 rounded-2xl border border-gray-800 p-6 md:p-8 shadow-xl print:[background-image:none] print:bg-white print:border-gray-200">
			{/* Subtle depth overlay */}
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.15)_0%,_transparent_65%)] pointer-events-none print:hidden" aria-hidden="true" />

			{/* Top row: profile info + theme toggle */}
			<div className="relative flex items-start justify-between gap-4 mb-6">
				<div className="flex items-start gap-4 md:gap-6 min-w-0">
					<Image
						src="/selfie.jpg"
						alt="Joshua Zone, Software Engineering Leader"
						width={144}
						height={144}
						priority
						itemProp="image"
						className="rounded-2xl object-cover object-[center_20%] ring-4 ring-white/10 shadow-lg w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex-shrink-0"
					/>
					<div className="min-w-0">
						<h1 itemProp="name" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight print:text-gray-900">
							Joshua Zone
						</h1>
						<p className="text-base sm:text-lg text-blue-400 font-medium mt-1 print:text-blue-700">
							Software Engineering Leader
						</p>
						<div className="flex flex-wrap gap-2 mt-3">
							<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-white/10 text-blue-300 border border-white/20 print:bg-blue-50 print:text-blue-700 print:border-blue-200">
								10+ Years Experience
							</span>
							<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-white/10 text-green-300 border border-white/20 print:bg-green-50 print:text-green-700 print:border-green-200">
								Principal Architect
							</span>
							<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-white/10 text-purple-300 border border-white/20 print:bg-purple-50 print:text-purple-700 print:border-purple-200">
								Director of Engineering
							</span>
						</div>
						<a
							href="/resume.pdf"
							download
							className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors shadow-sm mt-4"
						>
							<Icon icon="heroicons:document-arrow-down" className="w-4 h-4" />
							Download Resume
						</a>
					</div>
				</div>
				<ThemeToggle />
			</div>

			{/* Bio */}
			<p className="relative text-sm md:text-base text-gray-300 leading-relaxed mb-6 print:text-gray-600">
				I architect distributed systems that teams can actually ship on — and lead the engineering organizations that run them. Currently building cloud-native data infrastructure at Ten Mile Square; previously cut cloud costs 45% at TealBook and led platform engineering at QL2 across a global team.
			</p>

			{/* Contact bar + social links */}
			<div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-5 border-t border-white/10 print:border-gray-200">
				{/* Contact info */}
				<div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-300 print:text-gray-600">
					<Link
						href="mailto:jzone1229@gmail.com"
						className="inline-flex items-center gap-1.5 hover:text-blue-400 transition-colors print:text-blue-700"
					>
						<Icon icon="heroicons:envelope" className="w-4 h-4 text-gray-500 print:text-gray-400" />
						<span>jzone1229@gmail.com</span>
					</Link>
					<span className="inline-flex items-center gap-1.5">
						<Icon icon="heroicons:map-pin" className="w-4 h-4 text-gray-500 print:text-gray-400" />
						<span>Atlanta, GA</span>
					</span>
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
							className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors print:text-gray-600"
						>
							<Icon icon={link.icon} className="w-4 h-4" />
						</Link>
					))}
				</div>
			</div>
		</header>
	)
}
