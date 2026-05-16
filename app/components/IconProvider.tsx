'use client';

import { addCollection, type IconifyJSON } from '@iconify/react';
import iconCollections from '../icon-data.json';

// Preload icon data synchronously on module load — icons render immediately
// without needing to fetch from the Iconify API
for (const collection of iconCollections) {
	addCollection(collection as unknown as IconifyJSON);
}

// This component has no visual output — it ensures icon data is loaded
// before any Icon components render
export default function IconProvider({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
