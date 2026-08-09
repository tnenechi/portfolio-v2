import { Project } from "@/lib/types";

export const projectsData: Project[] = [
  {
    id: "ezscents",
    title: "EZScents",
    tagline:
      "Full-stack fragrance e-commerce platform with secure authentication and admin management.",
    description:
      "An e-commerce application developed for a fragrance brand, featuring product discovery, advanced filtering, shopping cart functionality, secure JWT authentication, and a complete admin dashboard for inventory management. Built with a scalable REST API architecture and responsive user experience.",
    // coverImage: "/projects/ezscents.jpg",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    highlights: [
      "JWT authentication with protected user workflows",
      "Product catalogue with search and filtering",
      "Admin CRUD dashboard for inventory management",
      "Responsive frontend integrated with REST APIs",
    ],
    demoUrl: "https://secretscent.org/",
    githubUrl: "https://github.com/tnenechi/EZSCENTS",
    featured: true,
  },

  {
    id: "lets-cook",
    title: "Let's Cook",
    tagline:
      "Recipe discovery platform powered by ingredient search and live API integration.",
    description:
      "A recipe discovery application that helps users find meals using ingredients they already have. The platform integrates the Spoonacular API, supports JWT authentication with persistent sessions, and allows authenticated users to save favourite recipes while delivering a fast and responsive browsing experience.",
    // coverImage: "/projects/lets-cook.jpg",
    tags: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "REST API",
      "Tailwind CSS",
    ],
    highlights: [
      "Ingredient-based recipe discovery powered by Spoonacular",
      "JWT access and refresh token authentication",
      "Persistent favourites and saved recipes",
      "Dynamic recipe rendering with responsive UI",
    ],
    demoUrl: "https://lets-cook.onrender.com/",
    githubUrl: "https://github.com/tnenechi/Lets-Cook",
    featured: false,
  },

  {
    id: "recruitment-management-system",
    title: "Recruitment Management System",
    tagline:
      "Modern recruitment platform with applicant tracking, role-based workflows, and admin analytics.",
    description:
      "A full-stack recruitment platform designed to streamline hiring workflows for both candidates and administrators. The system features role-based dashboards, candidate profile management, CV uploads, job applications, draft saving, and an intuitive admin experience built around scalable frontend architecture and efficient API integration.",
    // coverImage: "/projects/recruitment-management-system.jpg",
    tags: [
      "React",
      "TypeScript",
      "TanStack Query",
      "Tailwind CSS",
      "Formik",
      "JSON Server",
    ],
    highlights: [
      "Role-based candidate and administrator dashboards",
      "Optimized server-state management with TanStack Query",
      "Save draft workflow with CV upload support",
      "Feature-based architecture built for long-term scalability",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/tnenechi/RMS",
    featured: false,
  },
];
