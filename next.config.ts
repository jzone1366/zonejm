import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// Performance optimizations
	compress: true,
	poweredByHeader: false,
	
	// Image optimization
	images: {
		formats: ['image/webp', 'image/avif'],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
	},

	// Experimental features for better performance
	experimental: {
		optimizePackageImports: [
			'@iconify/react',
			'@iconify-json/heroicons',
			'@iconify-json/logos',
			'@iconify-json/mdi',
			'@iconify-json/simple-icons',
		],
	},

	// Security headers
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
					{
						key: 'X-Frame-Options',
						value: 'DENY',
					},
					{
						key: 'Referrer-Policy',
						value: 'origin-when-cross-origin',
					},
					{
						key: 'Strict-Transport-Security',
						value: 'max-age=63072000; includeSubDomains; preload',
					},
					{
						key: 'Content-Security-Policy',
						value: [
							"default-src 'self'",
							"script-src 'self' 'unsafe-inline'",
							"style-src 'self' 'unsafe-inline'",
							"img-src 'self' data:",
							"font-src 'self'",
							"connect-src 'self'",
							"frame-ancestors 'none'",
						].join('; '),
					},
				],
			},
		]
	},
};

export default nextConfig;
