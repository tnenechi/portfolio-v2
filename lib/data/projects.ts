import { Project } from "@/lib/types";

export const projectsData: Project[] = [
  {
    id: "ezscents",
    title: "EZScents",
    tagline:
      "Full-stack fragrance e-commerce platform with secure authentication and admin management.",
    description:
      "An e-commerce website for a fragrance brand, featuring product discovery, shopping cart functionality, user authentication, and product management.",
    coverImage: "/ez-scents.png",
    tags: ["TypeScript", "React", "Node.js", "Express", "MongoDB"],
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
    id: "bipron-energy",
    title: "Bipron Energy",
    tagline:
      "Corporate web platform for an energy company delivering clear business presentation and services showcase.",
    description:
      "A corporate website for an energy company, built to present its business and services through a clear, professional online presence.",
    coverImage: "/bipron.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    highlights: [
      "Modern Next.js architecture with optimized performance",
      "Responsive presentation of energy services and corporate identity",
      "Accessible structure with streamlined navigation",
    ],
    demoUrl: "https://bipronenergy.net/",
    featured: false,
  },
  {
    id: "lets-cook",
    title: "Let’s Cook",
    tagline:
      "Recipe discovery platform powered by ingredient search and live API integration.",
    description:
      "A recipe discovery application that helps users find recipes based on available ingredients, explore recipe details, and save their favourite dishes.",
    coverImage: "/let'sCook.png",
    tags: ["React", "Express", "PostgreSQL", "Spoonacular API"],
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
];
