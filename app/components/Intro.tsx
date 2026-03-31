import Image from "next/image"

export default function Intro() {
	return (
		<>
			<div className="text-center">
				<div className="flex justify-center items-center mb-6">
				<Image
					src="/selfie.jpg"
					alt="Joshua Zone, Software Engineering Leader"
					width={144}
					height={144}
					priority
					itemProp="image"
						className='rounded-2xl object-cover object-[center_20%] ring-4 ring-gray-50 dark:ring-gray-800 shadow-lg w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36'
					/>
				</div>
				<h1 itemProp="name" className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">Joshua Zone</h1>
				<p className="text-base sm:text-lg text-blue-600 dark:text-blue-400 font-medium mb-4 px-2">Software Engineering Leader</p>
				<div className="flex flex-wrap justify-center gap-2 mb-4">
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
			<div className="prose prose-sm max-w-none text-gray-600 dark:text-gray-300">
				<p className="leading-relaxed text-sm sm:text-base mb-4">
					Passionate about distributed systems, microservices, and cloud-native architecture. I lead cross-functional teams to build scalable solutions that drive business growth while fostering innovation and technical excellence.
				</p>
				<div className="grid grid-cols-3 gap-3 text-xs">
					<div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 text-center">
						<div className="font-semibold text-gray-900 dark:text-white">11+</div>
						<div className="text-gray-600 dark:text-gray-400">Years</div>
					</div>
					<div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 text-center">
						<div className="font-semibold text-gray-900 dark:text-white">9</div>
						<div className="text-gray-600 dark:text-gray-400">Companies</div>
					</div>
					<div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 text-center">
						<div className="font-semibold text-gray-900 dark:text-white">15+</div>
						<div className="text-gray-600 dark:text-gray-400">Engineers Led</div>
					</div>
				</div>
			</div>
		</>
	)
}
