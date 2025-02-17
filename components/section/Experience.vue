<script setup>
const experiences = [
  {
    company: "QL2 Software",
    period: "Mar 2024 - Present",
    position: "Director of Engineering",
    description:
      "Travel Industry Leading Price Analytics.",
    tasks: [
      "Increase system stability by improving cloud architecture.",
      "Improve monitoring of all systems by implementing metrics.",
      "Implemented a micoservice architecture in Kubernetes and Go using Kafka."
    ],
    skills: ["Java", "K8s", "Python", "Postgres"],
    logo: "ql2_logo.jpeg",
  },
  {
    company: "TealBook",
    period: "Mar 2023 - Mar 2024",
    position: "Software Engineering Manager",
    description:
      "The most trusted source for supplier data",
    tasks: [
      "Lead Cross Functional team to improve Customer Portal.",
      "Improve Data access by implementing graphql API."
    ],
    logo: "tealbook_logo.jpeg",
  },
  {
    company: "SigFig",
    period: "Nov 2022 - Mar 2023",
    position: "Senior Software Engineer",
    description:
      "Innovating the Heart of Financial Technology.",
    tasks: [
      "Worked on a rapidly adapting emerging product.",
      "Restructure application for easier iteration."
    ],
    logo: "sigfig_logo.jpeg",
  },
  {
    company: "Nathan James",
    period: "May 2022 - Nov 2022",
    position: "Lead Software Engineer",
    description:
      "Furniture Company with Online Store.",
    tasks: [
      "Developed a Warehouse Management System from scratch.",
      "Improved Enterprise Resource Planning Software to focus on Automation."
    ],
    logo: "nathanjames_logo.jpeg",
  },
  {
    company: "PlayVS",
    period: "Nov 2021 - May 2022",
    position: "Senior Software Engineer",
    description:
      "The official platform and league for high school esports.",
    tasks: [
      "Improved System performance by 25%.",
      "Improved User Engagement by adding newly requested features."
    ],
    logo: "playvs_logo.jpeg",
  },
  {
    company: "Nathan James",
    period: "Dec 2020 - Nov 2021",
    position: "Lead Software Engineer",
    description:
      "Furniture Company with Online Store.",
    tasks: [
      "Developed a Warehouse Management System from scratch.",
      "Improved Enterprise Resource Planning Software to focus on Automation."
    ],
    logo: "nathanjames_logo.jpeg",
  },
  {
    company: "Pricespider",
    period: "Jan 2019 - Dec 2020",
    position: "Frontend Web Developer",
    description:
      "Leading E-Commerce Company in Where to Buy and Price Matching Technology.",
    tasks: [
      "Led a cross functional development team to support 16+ services in production.",
      "Increase availability by 30%.",
      "Decrease Time to First Byte by 45%."
    ],
    logo: "pricespider_logo.jpeg",
  },
  {
    company: "Cognizant",
    period: "Sep 2018 - Jan 2019",
    position: "Frontend Web Developer",
    description:
      "Tech Consulting Firm. On Project at Kinsa Health.",
    tasks: [
      "Develop Consumer based frontend application using React.",
      "Enhance the User Experience and API's.",
    ],
    logo: "softvision_logo.jpeg",
  },
  {
    company: "Reflex Media",
    period: "Jun 2017 - Sep 2018",
    position: "Web Application Developer",
    description:
      "Leading Dating Site and Marketing firm.",
    tasks: [
      "Tasked with rebuilding the UI on React and Native App on React Native.",
      "Worked with Product to enhance the User Experience.",
    ],
    logo: "reflexmedia.jpeg",
  },
  {
    company: "Vegas.com",
    period: "Oct 2016 - Jun 2017",
    position: "Web Developer",
    description:
      "Travel site which specializes in Las Vegas travel",
    tasks: [
      "Implemented successful A/B tests.",
      "Successfully migrated a Java app to a React App.",
    ],
    logo: "vegas_com_logo.jpeg",
  },

  {
    company: "Virtusa|Polaris",
    period: "Jun 2014 - Oct 2016",
    position: "Web Development Consultant",
    description:
      "Web Developer on Trading Platform for Morgan Stanley.",
    tasks: [
      "Worked on heavily used real time data platform for Bond Traders.",
      "Became SME on Frontend Application using AngularJS.",
    ],
    logo: "virtusa_logo.jpg",
  },
];
</script>
<template>
  <section>
    <h2 class="text-3xl font-bold">Experience</h2>
    <ol class="flex flex-col gap-6 mt-6">
      <li v-for="experience in experiences" class="bg-white hover:bg-gray-50 border hover:scale-[.98] transition duration-300 p-6 rounded-xl"  itemscope itemtype="http://schema.org/OrganizationRole">
        <div class="flex flex-col sm:flex-row print:flex-row gap-3">
          <img
            :src="'/companies/' + experience.logo"
            :alt="`${experience.company}'s logo'`"
            height="12"
            itemprop="image"
            class="w-12 h-full rounded-full"
          />
          <div class="w-full">
            <div class="flex justify-between items-center">
              <h2 class="text-gray-600 font-medium" itemprop="memberOf" itemscope itemtype="http://schema.org/Organization">
            <span itemprop="name"> {{ experience.company }}</span>
              </h2>
              <span class="text-sm text-gray-500" itemprop="startDate">{{ experience.period }}</span>
            </div>
            <span  itemprop="roleName" class="text-xl block mt-2 sm:mt-0 print:mt-0 font-semibold">{{
              experience.position
            }}</span>
          </div>
        </div>
        <p class="my-2 text-sm text-gray-600"  itemprop="description">
          {{ experience.description }}
        </p>
        <div class="prose-sm prose" itemprop="hasOccupation" itemscope itemtype="http://schema.org/Occupation">
          <ul>
            <li v-for="task in experience.tasks" itemprop="skills">{{ task }}</li>
          </ul>
        </div>
      </li>
    </ol>
  </section>
</template>
