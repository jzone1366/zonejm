'use client'

import { useEffect, useRef } from 'react'

export default function FadeUp({ children }: { children: React.ReactNode }) {
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const el = ref.current
		if (!el) return

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					el.classList.remove('opacity-0')
					el.classList.add('animate-fade-up')
					observer.disconnect()
				}
			},
			{ threshold: 0.05 }
		)
		observer.observe(el)
		return () => observer.disconnect()
	}, [])

	return (
		<div ref={ref} className="opacity-0">
			{children}
		</div>
	)
}
