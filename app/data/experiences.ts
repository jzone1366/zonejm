export interface Experience {
  company: string;
  period: string;
  position: string;
  description: string;
  highlight?: string;
  tasks: string[];
  skills: string[];
  logo: string;
}

const experiences: Experience[] = [
  {
    company: "Ten Mile Square",
    period: "2025 - present",
    position: "Principal Software Engineer",
    description:
      "Leading modernization of a Personal Loan Origination System, re-platforming a legacy COBOL mainframe application onto a TypeScript and AWS cloud-native architecture — designing scalable services, infrastructure, and workflows from the ground up.",
    tasks: [
      "Architected reusable TypeScript component library, standardizing UI across the origination platform and reducing feature development time for engineering teams.",
      "Designed and implemented configurable loan workflow engine, streamlining the closing process and improving origination team efficiency.",
      "Optimized CI/CD pipelines, reducing build and deployment time by 35% and enabling faster, more reliable releases.",
      "Introduced Agile ceremonies and engineering best practices, improving sprint predictability and cross-team collaboration.",
      "Defined AWS cloud infrastructure architecture (Lambda, API Gateway, RDS, S3), establishing scalable, secure patterns for the modernized platform.",
      "Collaborated with business stakeholders and compliance teams to translate mainframe business logic into well-documented TypeScript services.",
    ],
    skills: [
      "K8s",
      "Python",
      "Postgres",
      "AWS",
      "Angular",
      "Typescript",
      "Apollo",
      "GraphQL",
      "Claude Code",
      "Open Code",
    ],
    logo: "tenmile_logo.jpeg",
  },
  {
    company: "QL2 Software",
    period: "2024 - 2025",
    position: "Director of Engineering",
    description:
      "Elevate engineering expertise by orchestrating comprehensive training and collaborative working sessions on core systems. Strengthen monitoring and alerting by deploying InfluxDB and Grafana.",
    highlight: "Reduced infra costs 20% via cloud-native re-architecture",
    tasks: [
      "Reduced ingestion costs by 20% and lowered cloud expenses by over 50% by re-architecting the high-throughput data pipeline as cloud-native TypeScript microservices on AWS.",
      "Accelerated pipeline processing speed by 75% through distributed systems reengineering; improved SAN resiliency with a 45% performance boost and cut latency by over 50%.",
      "Built real-time data quality monitoring pipeline using AWS, Snowflake, and Python, processing millions of records with high accuracy across global data sources.",
    ],
    skills: [
      "Java",
      "K8s",
      "Python",
      "Postgres",
      "Go",
      "MongoDB",
      "AWS",
      "React",
      "JavaScript",
    ],
    logo: "ql2_logo.jpeg",
  },
  {
    company: "TealBook",
    period: "2023 - 2024",
    position: "Software Engineering Manager",
    description:
      "Drove the end-to-end development of greenfield data portal, ensuring scalable architecture and seamless implementation. Built high-performance GraphQL API, streamlining access to complex datasets for faster data retrieval.",
    highlight: "Cut cloud costs 45% · Dev cycles 75% faster",
    tasks: [
      "Shortened delivery cycles by over 75% through process optimization and enhanced product management strategies.",
      "Cut cloud costs by 45% by restructuring the AWS data ingestion architecture for efficiency and scalability.",
      "Boosted customer engagement by 60% through the development of an enhanced user interface using React.",
    ],
    skills: ["K8s", "Python", "Postgres", "React", "JavaScript", "Nest.js"],
    logo: "tealbook_logo.jpeg",
  },
  {
    company: "SigFig",
    period: "2022 - 2023",
    position: "Senior Software Engineer",
    description:
      "Accelerated feature development for cutting-edge finance product by collaborating with small team of engineers. Improved usability by swiftly refining feature sets within small Pods. Managed code reviews, ensuring high-quality standards and maintaining code integrity.",
    highlight: "Increased feature delivery speed 30%",
    tasks: [
      "Enhanced financial product usability by designing modular React components for improved customization.",
      "Increased feature delivery speed by 30% through agile sprints and streamlined deployment.",
    ],
    skills: ["PHP", "Laravel", "React", "Postgres"],
    logo: "sigfig_logo.jpeg",
  },
  {
    company: "Nathan James",
    period: "2020 - 2022",
    position: "Lead Software Engineer",
    description:
      "Spearhead engineering initiatives to streamline business operations through scalable automation and real-time data processing. Enhance ERP efficiency with API-driven solutions and optimize logistics with intelligent barcode scanning integrations.",
    tasks: [
      "Developed and delivered an API-driven ERP system, automating invoicing & business operations.",
      "Integrated real-time barcode scanning, optimizing warehouse management workflows.",
    ],
    skills: ["PHP", "Laravel", "Vue.js", "Postgres"],
    logo: "nathanjames_logo.jpeg",
  },
  {
    company: "PriceSpider",
    period: "2019 - 2020",
    position: "Lead Software Engineer",
    description:
      "Lead engineering efforts to optimize microservices and enhance system scalability, ensuring high-performance B2C experiences. Drive data pipeline efficiency, reliability, and accuracy through cloud-native architectures, proactive monitoring, and cross-system data integration.",
    tasks: [
      "Led a team managing 15+ microservices, ensuring performance, reliability, and scalability.",
      "Migrated data pipelines to a RabbitMQ-based system, increasing processing efficiency.",
      "Directed AWS cloud migration, improving infrastructure scalability and cost efficiency.",
    ],
    skills: ["C#", "React", "Go", "JavaScript", "MySQL", "PHP", ".Net", "CSS"],
    logo: "pricespider_logo.jpeg",
  },
  {
    company: "Softvision (now Cognizant)",
    period: "2018 - 2019",
    position: "Frontend Web Developer",
    description:
      "Enhanced onboarding process by implementing efficient new user flow, optimizing frontend development for smoother user experiences. Collaborated with design teams to innovate and improve user interfaces, ensuring alignment with brand guidelines and user needs. Applied debugging skills to resolve performance issues, consistently maintaining and updating web applications for optimal efficiency and user satisfaction.",
    tasks: [
      "Visualized Flu patterns across the U.S. by implementing interactive D3.js map using collected temperature data.",
      "Enabled seamless research access by developing a centralized Data Portal for collected data.",
      "Directed all frontend strategy in collaboration with the VP of Engineering, ensuring optimal technical decisions and execution.",
    ],
    skills: ["Node.js", "JavaScript", "React", "CSS"],
    logo: "softvision_logo.jpeg",
  },
  {
    company: "Reflex Media",
    period: "2017 - 2018",
    position: "Web Application Developer",
    description:
      "Ensured unified web and mobile experience by spearheading the comprehensive redesign of multiple social platforms, using React and React Native. Optimized release cadence by migrating legacy applications to a modern tech stack.",
    tasks: [
      "Enhanced in-app communication by 50% through the implementation of a real-time user chat experience.",
    ],
    skills: ["PHP", "JavaScript", "React", "CSS"],
    logo: "reflexmedia.jpeg",
  },
  {
    company: "Vegas.com",
    period: "2016 - 2017",
    position: "Web Developer",
    description:
      "Drive product optimization and user engagement through data-driven experimentation and modern frontend architectures. Enhance performance and conversion rates by deploying A/B testing tools and migrating legacy applications to scalable, React-based solutions.",
    highlight: "Boosted conversion rates 40%+ via A/B testing",
    tasks: [
      "Boosted conversion rates by over 40% via deployment of A/B testing tools.",
      "Led the migration of a legacy Java application to a modern architecture by developing a scalable Java API and React-based frontend, enhancing performance, maintainability, and user experience.",
    ],
    skills: ["Java", "JavaScript", "React", "CSS"],
    logo: "vegas_com_logo.jpeg",
  },
  {
    company: "Virtusa|Polaris",
    period: "2014 - 2016",
    position: "Web Development Consultant",
    description:
      "Architect and develop high-performance, real-time systems that empower data-driven decision-making. Deliver scalable solutions for financial applications, ensuring speed, reliability, and seamless user experience.",
    tasks: [
      "Delivered real-time, data-intensive application enabling Bond Traders to make informed decisions by architecting and developing high-performance system under contract with Morgan Stanley.",
    ],
    skills: ["Java", "JavaScript", "Angular.js", "CSS"],
    logo: "virtusa_logo.jpg",
  },
];

export default experiences;
