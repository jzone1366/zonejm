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
						className='rounded-2xl object-cover object-[center_20%] ring-4 ring-gray-50 shadow-lg'
					/>
				</div>
				<h1 itemProp="name" className="text-2xl font-bold text-gray-900 mb-2">Joshua Zone</h1>
				<h2 className="text-lg text-blue-600 font-medium mb-4">Software Engineering Leader</h2>
			</div>
			<div className="prose prose-sm max-w-none text-gray-600">
				<p className="leading-relaxed">
					Principal Architect | Director of Engineering with 10+ years of experience in software engineering, system architecture, and technical leadership. Proven expertise in distributed systems, microservices, cloud-native architecture, and API strategy. Skilled at leading cross-functional teams, optimizing infrastructure, reducing costs, and improving system resilience. Passionate about fostering innovation, mentoring teams, and aligning technical strategies with business objectives.
				</p>
			</div>
		</>
	)
}
