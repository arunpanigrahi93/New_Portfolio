import type { Project, Experience, SkillCategory, Education, SocialLink } from "@/types";

export const personalInfo = {
	name: "Venkata Arunakumar Panigrahi",
	firstName: "Venkata Arunakumar",
	lastName: "Panigrahi",
	role: "Senior Frontend Developer",
	tagline: "SDE · React · Next.js Specialist",
	email: "arunpanigrahi93@gmail.com",
	phone: "+91 9000255357",
	location: "Hyderabad, Telangana, India",
	about: `Senior Full-Stack Developer with 7+ years of experience building modern web applications using React, Next.js, TypeScript, Node.js, Express.js, and MongoDB. I transform complex business requirements into scalable, secure, and high-performance solutions with clean, maintainable code.`,
	// resumeUrl: "https://drive.google.com/file/d/1uxxbt2JSOuiwcFaV76N5qSMkyAf1pYLM/view?usp=drive_link",
	resumeUrl: "/resume.pdf",
};

export const socialLinks: SocialLink[] = [
	{ name: "LinkedIn", url: "https://www.linkedin.com/in/arun-kumar-panigrahi-5190399b", icon: "linkedin" },
	{ name: "GitHub", url: "https://github.com/arunpanigrahi93", icon: "github" },
	{ name: "Email", url: "mailto:arunpanigrahi93@gmail.com", icon: "email" },
	{ name: "Phone", url: "tel:+919000255357", icon: "phone" },
];

export const achievements = [
	{ value: "7+", label: "Years Experience" },
	{ value: "~80%", label: "Publishing Time Reduced" },
	{ value: "~35%", label: "Performance Boost" },
	{ value: "20+", label: "Projects Shipped" },
];

export const experiences: Experience[] = [
  {
    id: "tcs",
    company: "TATA CONSULTANCY SERVICES (TCS)",
    role: "Systems Engineer",
    period: "Sep 2021 – Present",
    location: "Hyderabad, India",
    description: [
      "Developed reusable React.js components and optimized frontend performance using code splitting, lazy loading, memoization, and bundle optimization, reducing bundle size by ~30% and improving page load time by ~25%.",
      "Accelerated development using GitHub Copilot, Claude Code, and ChatGPT for code generation, debugging, testing, and documentation, reducing development effort by ~35%.",
      "Built a LangChain.js-based AI assistant to analyze vulnerability reports, recommend secure dependency versions, and automate remediation workflows, reducing manual effort by ~60%.",
      "Implemented automated certificate lifecycle management, reducing manual effort by ~80% while improving deployment reliability through code reviews and automated testing.",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JWT",
      "GitHub Copilot",
      "Claude Code",
      "ChatGPT",
      "LangChain.js",
      "Git",
      "Jest",
    ],
  },

  {
    id: "crown",
    company: "CROWN SOLUTIONS I.P.L (Contract to TCS)",
    role: "BA Associate",
    period: "Oct 2020 – Aug 2021",
    location: "Hyderabad, India",
    description: [
      "Engineered scalable React.js user interfaces using reusable component architecture, reducing feature delivery time by ~30%.",
      "Improved application performance by ~40% through rendering optimization, lazy loading, code splitting, caching, and image optimization.",
      "Integrated React frontends with Python/PostgreSQL backend services and AWS infrastructure to deliver secure enterprise applications.",
      "Worked closely with cross-functional teams to deliver responsive, accessible, and production-ready business applications.",
    ],
    technologies: [
      "React.js",
      "Bootstrap",
      "JavaScript",
      "Python",
      "PostgreSQL",
      "REST APIs",
      "AWS",
      "Git",
    ],
  },

  {
    id: "wml",
    company: "WML Technologies",
    role: "Application Developer",
    period: "Jan 2020 – Sep 2020",
    location: "Hyderabad, India",
    description: [
      "Developed responsive e-commerce applications using React.js, Material UI, Node.js, MongoDB, and AWS.",
      "Built reusable UI components and integrated REST APIs to improve maintainability and development speed.",
      "Implemented authentication, product management, and order management features for scalable web applications.",
      "Collaborated with backend developers to deliver secure and high-performance full-stack solutions.",
    ],
    technologies: [
      "React.js",
      "Material UI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AWS",
      "REST APIs",
      "Git",
    ],
  },

  {
    id: "ksl",
    company: "Kakinada Seaports Limited",
    role: "Systems Executive",
    period: "Dec 2018 – Dec 2019",
    location: "Kakinada, India",
    description: [
      "Automated import/export operational workflows, reducing manual effort and improving process efficiency.",
      "Developed internal reporting and data management solutions to improve operational accuracy.",
      "Created Excel automation and business reports for logistics and port operations.",
      "Worked with multiple departments to streamline business processes and improve productivity.",
    ],
    technologies: [
      "MS Excel",
      "Automation",
      "Reporting",
      "SQL",
      "Business Process",
    ],
  },
];

export const certifications: Certification[] = [
  {
    name: "React - The Complete Guide",
    issuer: "Udemy",
    year: "2024",
    credentialUrl: "https://www.udemy.com/",
  },
  {
    name: "Node.js, Express & MongoDB",
    issuer: "Udemy",
    year: "2024",
    credentialUrl: "https://www.udemy.com/",
  },
  {
    name: "TypeScript Bootcamp",
    issuer: "Udemy",
    year: "2025",
    credentialUrl: "https://www.udemy.com/",
  },
  {
    name: "Generative AI with Large Language Models",
    issuer: "Coursera",
    year: "2026",
    credentialUrl: "https://www.coursera.org/",
  },
  {
    name: "LangChain & AI Agents",
    issuer: "DeepLearning.AI",
    year: "2026",
    credentialUrl: "https://www.deeplearning.ai/",
  }
];

export const skillCategories: SkillCategory[] = [
	{
		category: "Frontend",
		icon: "🎨",
		skills: ["React.js", "Next.js", "Angular", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Bootstrap"],
	},
	{
		category: "Backend",
		icon: "⚙️",
		skills: ["Node.js", "Express.js", "Firebase", "MongoDB", "REST APIs"],
	},
	{
		category: "State & CMS",
		icon: "🗄️",
		skills: ["Redux", "Zustand", "Context API", "Directus", "AEM (Headless)"],
	},
	{
		category: "Tools & DevOps",
		icon: "🛠️",
		skills: ["Git", "Bitbucket", "Jira", "npm", "AWS", "Jest", "React Testing Library"],
	},
	{
		category: "Practices",
		icon: "✅",
		skills: [
			"Responsive Design",
			"Lazy Loading",
			"Code Splitting",
			"WCAG Accessibility",
			"Modular Architecture",
			"Agile",
		],
	},
];

export const projects: Project[] = [
	{
		id: "Food App",
		title: "Food App",
		description: "Real-time chatting application with social features",
		longDescription:
			"his Food App brings your favorite meals from local restaurants straight to your door. Fast, easy, and reliable, our app offers a wide variety of dishes to satisfy any craving. With seamless ordering and real-time tracking, enjoying delicious food has never been simpler. Experience convenience and flavor, just like Swiggy, but with our own unique touch",
		techStack: ["React (Vite)", "React Hooks", "Redux Toolkit", "Vercel Deployment"],
		liveUrl: "https://arun-food-app.vercel.app/",
		codeUrl: "https://github.com/arunpanigrahi93/food_app",
		image: "/assets/projects/food_app.png",
		gradient: "from-violet-500 to-purple-700",
		featured: true,
	},
	{
		id: "youtube-clone",
		title: "You Tube clone",
		description: "Full-featured music streaming application",
		longDescription:
			"I developed a YouTube clone that replicates the core features of the popular video-sharing platform. and The app allows users to search, watch videos, with a sleek interface and responsive design. it by passing It includes functionality for user authentication, video recommendations, and real-time comments, delivering an engaging and interactive experience.",
		techStack: ["React", "React hocks", "TailwindCss", "Vercel"],
		liveUrl: "https://arun-youtube-clone.vercel.app/",
		codeUrl: "https://github.com/arunpanigrahi93/Youtube_clone",
		image: "/assets/projects/youtube.png",
		gradient: "from-green-500 to-emerald-700",
		featured: true,
	}
];

export const education: Education[] = [
  {
    institution: "Chaitanya Institute of Science & Technology, JNTUK",
    degree: "M.Tech",
    period: "2016 – 2018",
  },
  {
    institution: "Sri Aditya Engineering College, JNTUK",
    degree: "B.Tech",
    period: "2011 – 2014",
  },
    {
    institution: "Sri YVS and BRM Polytecnic, SBTET",
    degree: "Diploma",
    period: "2008 – 2011",
  },
];