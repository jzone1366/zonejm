'use client';

import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';

const sections = [
	{ id: 'experience', label: 'Experience', icon: 'heroicons:briefcase' },
	{ id: 'skills', label: 'Skills', icon: 'heroicons:code-bracket' },
	{ id: 'about', label: 'About', icon: 'heroicons:user' },
	{ id: 'projects', label: 'Projects', icon: 'heroicons:wrench-screwdriver' },
] as const;

export default function SectionNav() {
	const [activeSection, setActiveSection] = useState('experience');
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				}
			},
			{ rootMargin: '-20% 0px -60% 0px' }
		);

		let footerEl: HTMLElement | null = null;
		let footerVisible = false;

		const footerObserver = new IntersectionObserver(
			(entries) => {
				footerVisible = entries[0]?.isIntersecting ?? false;
				// Re-evaluate visibility when footer state changes
				setIsVisible(window.scrollY > 300 && !footerVisible);
			},
			{ threshold: 0.1 }
		);

		const handleScroll = () => {
			setIsVisible(window.scrollY > 300 && !footerVisible);
		};

		for (const section of sections) {
			const el = document.getElementById(section.id);
			if (el) observer.observe(el);
		}

		footerEl = document.querySelector('footer');
		if (footerEl) footerObserver.observe(footerEl);

		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll();

		return () => {
			observer.disconnect();
			footerObserver.disconnect();
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	if (!isVisible) return null;

	return (
		<nav
			aria-label="Section navigation"
			className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border border-gray-200/75 dark:border-gray-700 rounded-full shadow-lg px-2 py-1.5 flex items-center gap-1"
		>
			{sections.map((section) => (
				<a
					key={section.id}
					href={`#${section.id}`}
					className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
						activeSection === section.id
							? 'bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300'
							: 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
					}`}
					aria-current={activeSection === section.id ? 'true' : undefined}
				>
					<Icon icon={section.icon} className="w-3.5 h-3.5" />
					<span className="hidden sm:inline">{section.label}</span>
				</a>
			))}
		</nav>
	);
}
