<template>
    <div class="text-center">
        <div class="flex justify-center items-center mb-6">
            <NuxtPicture
                src="/selfie.jpg"
                alt="Image of Josh"
                itemprop="image"
                :imgAttrs="{class:'w-36 h-36 rounded-2xl object-cover object-[center_20%] ring-4 ring-gray-50 shadow-lg'}"
            />
        </div>
        <h1 itemprop="name" class="text-2xl font-bold text-gray-900 mb-2">Joshua Zone</h1>
        <h2 class="text-lg text-blue-600 font-medium mb-4">Software Engineering Leader</h2>
    </div>
    <div class="prose prose-sm max-w-none text-gray-600">
        <p class="leading-relaxed">
            Principal Architect | Director of Engineering with 10+ years of experience in software engineering, system architecture, and technical leadership. Proven expertise in distributed systems, microservices, cloud-native architecture, and API strategy. Skilled at leading cross-functional teams, optimizing infrastructure, reducing costs, and improving system resilience. Passionate about fostering innovation, mentoring teams, and aligning technical strategies with business objectives.
        </p>
    </div>
</template>
