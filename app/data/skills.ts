export interface Skill {
	name: string;
	icon: string;
	category: string;
	proficiency?: 'Expert' | 'Advanced' | 'Intermediate';
}

const skills: Skill[] = [
	// Programming Languages
	{ "name": "Python", "icon": "logos:python", "category": "Languages", "proficiency": "Expert" },
	{ "name": "Golang", "icon": "logos:go", "category": "Languages", "proficiency": "Advanced" },
	{ "name": "Java", "icon": "logos:java", "category": "Languages", "proficiency": "Expert" },
	{ "name": "JavaScript", "icon": "logos:javascript", "category": "Languages", "proficiency": "Expert" },
	{ "name": "TypeScript", "icon": "logos:typescript-icon", "category": "Languages", "proficiency": "Advanced" },
	{ "name": "C#", "icon": "logos:c-sharp", "category": "Languages", "proficiency": "Advanced" },

	// Frontend Technologies
	{ "name": "React", "icon": "logos:react", "category": "Frontend", "proficiency": "Expert" },
	{ "name": "Vue.js", "icon": "logos:vue", "category": "Frontend", "proficiency": "Advanced" },
	{ "name": "Angular", "icon": "logos:angular-icon", "category": "Frontend", "proficiency": "Advanced" },
	{ "name": "Next.js", "icon": "logos:nextjs-icon", "category": "Frontend", "proficiency": "Advanced" },
	{ "name": "Tailwind CSS", "icon": "logos:tailwindcss-icon", "category": "Frontend", "proficiency": "Expert" },

	// Backend & APIs
	{ "name": "Node.js", "icon": "logos:nodejs-icon", "category": "Backend", "proficiency": "Expert" },
	{ "name": "Nest.js", "icon": "logos:nestjs", "category": "Backend", "proficiency": "Advanced" },
	{ "name": "Laravel", "icon": "logos:laravel", "category": "Backend", "proficiency": "Expert" },
	{ "name": ".NET", "icon": "logos:dotnet", "category": "Backend", "proficiency": "Advanced" },
	{ "name": "GraphQL", "icon": "logos:graphql", "category": "Backend", "proficiency": "Advanced" },

	// Cloud & Infrastructure
	{ "name": "AWS", "icon": "logos:aws", "category": "Cloud", "proficiency": "Expert" },
	{ "name": "GCP", "icon": "logos:google-cloud", "category": "Cloud", "proficiency": "Advanced" },
	{ "name": "Kubernetes", "icon": "logos:kubernetes", "category": "Cloud", "proficiency": "Expert" },
	{ "name": "Docker", "icon": "logos:docker-icon", "category": "Cloud", "proficiency": "Expert" },

	// Databases
	{ "name": "PostgreSQL", "icon": "logos:postgresql", "category": "Database", "proficiency": "Expert" },
	{ "name": "MySQL", "icon": "logos:mysql", "category": "Database", "proficiency": "Advanced" },
	{ "name": "MongoDB", "icon": "logos:mongodb", "category": "Database", "proficiency": "Advanced" }
]

export default skills
