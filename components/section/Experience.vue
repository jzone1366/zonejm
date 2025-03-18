<script setup>
const experiences = [
  {
    company: "QL2 Software",
    period: "2024 - Present",
    position: "Director of Engineering",
    description: "Elevate engineering expertise by orchestrating comprehensive training and collaborative working sessions on core systems. Strengthen monitoring and alerting by deploying InfluxDB and Grafana.",
    tasks: [
      "Led a global engineering team to architect high-performance distributed systems.",
      "Reduced ingestion costs by 20% through cloud-native microservice re-architecture.",
      "Implemented real-time monitoring with Snowflake & Python, ensuring data accuracy.",
      "Developed and deployed an advanced ingestion tool, improving success rate by 10%.",
      "Enhanced incident management processes, reducing downtime and increasing system reliability.",
    ],
    skills: ["Java", "K8s", "Python", "Postgres"], //Figure out how to show these... chips?
    logo: "ql2_logo.jpeg",
  },
  {
    company: "TealBook",
    period: "2023 - 2024",
    position: "Software Engineering Manager",
    description: "Drove the end-to-end development of greenfield data portal, ensuring scalable architecture and seamless implementation. Built high-performance GraphQL API, streamlining access to complex datasets for faster data retrieval.",
    tasks: [
      "Spearheaded the development of a greenfield data portal, ensuring scalability and maintainability.",
      "Designed a GraphQL API for seamless data retrieval, reducing query time by 30%.",
      "Cut cloud infrastructure costs by 45% through architectural optimizations.",
      "Accelerated development cycles by 75% by refining Agile workflows.",
      "Led and mentored a team of engineers, fostering collaboration and technical excellence.",
    ],
    logo: "tealbook_logo.jpeg",
  },
  {
    company: "SigFig",
    period: "2022 - 2023",
    position: "Senior Software Engineer",
    description: "Accelerated feature development for cutting-edge finance product by collaborating with small team of engineers. Improved usability by swiftly refining feature sets within small Pods. Managed code reviews, ensuring high-quality standards and maintaining code integrity.",
    tasks: [
      "Enhanced financial product usability by designing modular React components for improved customization.",
      "Increased feature delivery speed by 30% through agile sprints and streamlined deployment.",
    ],
    logo: "sigfig_logo.jpeg",
  },
  {
    company: "Nathan James",
    period: "2020 - 2021, 2022 - 2022",
    position: "Lead Software Engineer",
    description: "Spearhead engineering initiatives to streamline business operations through scalable automation and real-time data processing. Enhance ERP efficiency with API-driven solutions and optimize logistics with intelligent barcode scanning integrations.",
    tasks: [
      "Developed and delivered an API-driven ERP system, automating invoicing & business operations.",
      "Integrated real-time barcode scanning, optimizing warehouse management workflows.",
    ],
    logo: "nathanjames_logo.jpeg",
  },
  {
    company: "PlayVS",
    period: "2021 - 2022",
    position: "Senior Software Engineer",
    description: "Standardized UI with custom component library, aligning with product design. Strengthened team expertise by refining GraphQL API design and best practices. Enhanced processes by establishing engineering standards and mentoring teams.",
    tasks: [
      "Improved client-side GraphQL caching, reducing page load times by 45%.",
      "Developed company-wide design systems, ensuring UI/UX consistency across applications.",
    ],
    logo: "playvs_logo.jpeg",
  },
  {
    company: "PriceSpider",
    period: "2019 - 2020",
    position: "Lead Software Engineer",
    description: "Lead engineering efforts to optimize microservices and enhance system scalability, ensuring high-performance B2C experiences. Drive data pipeline efficiency, reliability, and accuracy through cloud-native architectures, proactive monitoring, and cross-system data integration.",
    tasks: [
      "Led a team managing 15+ microservices, ensuring performance, reliability, and scalability.",
      "Migrated data pipelines to a RabbitMQ-based system, increasing processing efficiency.",
      "Directed AWS cloud migration, improving infrastructure scalability and cost efficiency.",
    ],
    logo: "pricespider_logo.jpeg",
  },
  {
    company: "Cognizant",
    period: "2018 - 2019",
    position: "Frontend Web Developer",
    description: "Enhanced onboarding process by implementing efficient new user flow, optimizing frontend development for smoother user experiences. Collaborated with design teams to innovate and improve user interfaces, ensuring alignment with brand guidelines and user needs. Applied debugging skills to resolve performance issues, consistently maintaining and updating web applications for optimal efficiency and user satisfaction.",
    tasks: [
        "Visualized Flu patterns across the U.S. by implementing interactive D3.js map using collected temperature data.",
        "Enabled seamless research access by developing a centralized Data Portal for collected data.",
        "Directed all frontend strategy in collaboration with the VP of Engineering, ensuring optimal technical decisions and execution.",
    ],
    logo: "softvision_logo.jpeg",
  },
  {
    company: "Reflex Media",
    period: "2017 - 2018",
    position: "Web Application Developer",
    description: "Ensured unified web and mobile experience by spearheading the comprehensive redesign of multiple social platforms, using React and React Native. Optimized release cadence by migrating legacy applications to a modern tech stack.",
    tasks: [
        "Enhanced in-app communication by 50% through the implementation of a real-time user chat experience.",
    ],
    logo: "reflexmedia.jpeg",
  },
  {
    company: "Vegas.com",
    period: "2016 - 2017",
    position: "Web Developer",
    description: "Drive product optimization and user engagement through data-driven experimentation and modern frontend architectures. Enhance performance and conversion rates by deploying A/B testing tools and migrating legacy applications to scalable, React-based solutions.",
    tasks: [
        "Boosted conversion rates by over 40% via deployment of A/B testing tools.",
        "Led the migration of a legacy Java application to a modern architecture by developing a scalable Java API and React-based frontend, enhancing performance, maintainability, and user experience.",
    ],
    logo: "vegas_com_logo.jpeg",
  },
  {
    company: "Virtusa|Polaris",
    period: "2014 - 2016",
    position: "Web Development Consultant",
    description: "Architect and develop high-performance, real-time systems that empower data-driven decision-making. Deliver scalable solutions for financial applications, ensuring speed, reliability, and seamless user experience.",
    tasks: [
        "Delivered real-time, data-intensive application enabling Bond Traders to make informed decisions by architecting and developing high-performance system under contract with Morgan Stanley.",
    ],
    logo: "virtusa_logo.jpg",
  },
];
</script>

<template>
  <section>
    <h2 class="text-3xl font-bold">Experience</h2>
    <ol class="flex flex-col gap-6 mt-6">
      <li v-for="experience in experiences" class="bg-white border hover:scale-[1.05] transition duration-300 p-5 rounded-xl"  itemscope itemtype="http://schema.org/OrganizationRole">
        <div class="flex flex-col sm:flex-row print:flex-row gap-3 mb-2">
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
        <div itemprop="hasOccupation" itemscope itemtype="http://schema.org/Occupation">
          <p class="font-semibold mb-2"> {{ experience.description }} </p>
          <ul>
            <li v-for="task in experience.tasks" itemprop="skills" class="list-inside list-disc">{{ task }}</li>
          </ul>
        </div>
      </li>
    </ol>
  </section>
</template>
