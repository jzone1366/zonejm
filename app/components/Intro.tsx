import Image from "next/image"

export default function Intro() {
	return (
		<>
			<div className="text-center">
				<div className="flex justify-center items-center mb-6">
					<Image
						src="/selfie.jpg"
						alt="Image of Josh"
						width={144}
						height={144}
						itemProp="image"
						className='rounded-2xl object-cover object-[center_20%] ring-4 ring-gray-50 shadow-lg w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36'
					/>
				</div>
				<h1 itemProp="name" className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Joshua Zone</h1>
				<h2 className="text-base sm:text-lg text-blue-600 font-medium mb-4 px-2">Software Engineering Leader</h2>
				<div className="flex flex-wrap justify-center gap-2 mb-4">
					<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
						10+ Years Experience
					</span>
					<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
						Principal Architect
					</span>
					<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-purple-50 text-purple-700">
						Director of Engineering
					</span>
				</div>
			</div>
			<div className="prose prose-sm max-w-none text-gray-600">
				<p className="leading-relaxed text-sm sm:text-base mb-4">
					Passionate about distributed systems, microservices, and cloud-native architecture. I lead cross-functional teams to build scalable solutions that drive business growth while fostering innovation and technical excellence.
				</p>
				<div className="grid grid-cols-2 gap-3 text-xs">
					<div className="bg-gray-50 rounded-lg p-3 text-center">
						<div className="font-semibold text-gray-900">45%</div>
						<div className="text-gray-600">Cost Reduction</div>
					</div>
					<div className="bg-gray-50 rounded-lg p-3 text-center">
						<div className="font-semibold text-gray-900">75%</div>
						<div className="text-gray-600">Faster Delivery</div>
					</div>
					<div className="bg-gray-50 rounded-lg p-3 text-center">
						<div className="font-semibold text-gray-900">30%</div>
						<div className="text-gray-600">Performance Gain</div>
					</div>
					<div className="bg-gray-50 rounded-lg p-3 text-center">
						<div className="font-semibold text-gray-900">20%</div>
						<div className="text-gray-600">Cost Savings</div>
					</div>
				</div>
			</div>
		</>
	)
}
