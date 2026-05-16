'use client';

import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';

type Theme = 'light' | 'dark' | 'system';

export default function ThemeToggle() {
	const [theme, setTheme] = useState<Theme>('system');
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		const stored = localStorage.getItem('theme') as Theme | null;
		if (stored) {
			setTheme(stored);
		}
	}, []);

	useEffect(() => {
		if (!mounted) return;

		const root = document.documentElement;
		if (theme === 'dark') {
			root.classList.add('dark');
		} else if (theme === 'light') {
			root.classList.remove('dark');
		} else {
			// System preference
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			root.classList.toggle('dark', prefersDark);
		}

		localStorage.setItem('theme', theme);
	}, [theme, mounted]);

	// Listen for system preference changes when in system mode
	useEffect(() => {
		if (!mounted || theme !== 'system') return;

		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const handler = (e: MediaQueryListEvent) => {
			document.documentElement.classList.toggle('dark', e.matches);
		};

		mediaQuery.addEventListener('change', handler);
		return () => mediaQuery.removeEventListener('change', handler);
	}, [theme, mounted]);

	if (!mounted) return null;

	const cycleTheme = () => {
		const order: Theme[] = ['light', 'dark', 'system'];
		const next = order[(order.indexOf(theme) + 1) % order.length];
		setTheme(next);
	};

	const icon = theme === 'dark'
		? 'heroicons:moon-solid'
		: theme === 'light'
			? 'heroicons:sun-solid'
			: 'heroicons:computer-desktop';

	const label = theme === 'dark'
		? 'Dark mode'
		: theme === 'light'
			? 'Light mode'
			: 'System theme';

	return (
		<button
			onClick={cycleTheme}
			className="p-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-gray-800 transition-colors"
			aria-label={`Theme: ${label}. Click to change.`}
			title={label}
		>
			<Icon icon={icon} className="w-4 h-4" />
		</button>
	);
}
