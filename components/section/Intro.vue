<template>
    <NuxtPicture
        src="/selfie.jpg"
        alt="Image of Josh"
        itemprop="image"
        :imgAttrs="{class:'object-cover h-64 rounded-lg'}"
    />
    <div>
        <h1 itemprop="name" class="text-3xl font-bold"> Joshua Zone </h1>
        <span itemprop="jobTitle" class="font-medium text-gray-500"> Software Engineering Leader </span>
    </div>
    <p itemprop="description">
        Principal Architect | Director of Engineering with 10+ years of experience in software engineering, system architecture, and
        technical leadership. Proven expertise in distributed systems, microservices, cloud-native architecture, and API strategy.
        Skilled at leading cross-functional teams, optimizing infrastructure, reducing costs, and improving system resilience.
        Passionate about fostering innovation, mentoring teams, and aligning technical strategies with business objectives. Seeking a
        leadership role to drive engineering excellence and scalable solutions.
    </p>
</template>
