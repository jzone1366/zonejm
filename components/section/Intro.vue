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
        Software Engineering Leader with over 11 years of experience leading dynamic teams to drive technical
excellence and innovation. Specializes in agile methodologies, data-driven decision-making, and cross-functional collaboration to align technical solutions with business objectives. Proficient in a range of
technologies including PHP, Java, Python with a proven track record of optimizing development
workflows and enhancing user experience.
    </p>
</template>
