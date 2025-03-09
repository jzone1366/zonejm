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
    <p class="prose" itemprop="description">
        Technically-minded professional with substantial experience in software engineering, data-driven architectures,
        and cloud-native solutions. Proven success in building and scaling high-performing teams. 
        Well-versed in architecting, optimizing, and deploying large-scale distributed systems, 
        enhancing ETL pipelines and entity resolution processes. Skilled in infrastructure optimization, 
        performance tuning, and modern software development to drive scalability, cost efficiency, 
        and operational excellence. Adept at aligning engineering roadmaps with business objectives and fostering collaboration across global teams. 
        Passionate about innovation, automation, and data-driven decision-making to accelerate product development and improve system reliability.
    </p>
</template>
