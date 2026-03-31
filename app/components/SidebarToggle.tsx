'use client';

import { useState } from 'react';
import { Icon } from '@iconify/react';

export default function SidebarToggle({ children }: { children: React.ReactNode }) {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<>
			{/* Collapsed: show toggle button on mobile */}
			<div className="lg:hidden">
				<button
					onClick={() => setIsExpanded(!isExpanded)}
					className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
					aria-expanded={isExpanded}
					aria-controls="sidebar-details"
				>
					<span>{isExpanded ? 'Show less' : 'View full profile'}</span>
					<Icon
						icon="heroicons:chevron-down"
						className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
					/>
				</button>
			</div>

			{/* Content: always visible on desktop, toggled on mobile */}
			<div
				id="sidebar-details"
				className={`lg:contents ${isExpanded ? 'contents' : 'hidden'}`}
			>
				{children}
			</div>
		</>
	);
}
