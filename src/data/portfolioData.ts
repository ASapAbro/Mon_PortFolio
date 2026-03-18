// ==========================================
// PORTFOLIO DATA CONFIGURATION
// ==========================================
// Ce fichier contient toutes les données personnalisables du portfolio
// Modifiez les valeurs selon vos besoins

import { 
  Code, 
  Server, 
  Smartphone, 
  Database 
} from 'lucide-react';

export const portfolioData = {
  // Informations personnelles
  name: "Abraham ADODOH",
  title: "Développeur Full-Stack",
  tagline: "Passionné par le développement web et mobile, je crée des solutions innovantes et performantes.",
  
  // Contact
  email: "adodohabro@gmail.com",
  github: "https://github.com/ASapAbro",
  linkedin: "https://linkedin.com/in/abraham-adodoh",
  
  // Diplômes 
  experiences: [
    {
      date: "Études : 2026 - 2027",
      title: "Master Développement Full-Stack (M2)",
      company: "École Efrei, France",
      description: "Spécialisation en développement full-stack avec une approche orientée architecture logicielle avancée, microservices et systèmes distribués. Approfondissement des pratiques DevOps, du cloud computing et des performances applicatives à grande échelle.",
      tags: ["Full-Stack", "Microservices", "DevOps", "Cloud", "Architecture Logicielle"]
    },

    {
      date: "Études : 2024 - 2026",
      title: "Bachelor Développement Web & M1 Expert IT",
      company: "Formation continue",
      description: "Acquisition de compétences complètes en développement web moderne, bases de données, cloud computing et méthodologies agiles.",
      tags: ["Full-Stack", "Agile", "DevOps", "Cloud"],
    },

    {
      date: "Études : 2019 - 2023",
      title: "Licence Architecture Logiciel",
      company: "Université Privée ESGIS, Togo",
      description: "Formation approfondie en architecture logicielle, conception de systèmes distribués et développement full-stack.",
      tags: ["PHP", "Symfony", "Vue.js", "PostgreSQL", "Docker", "GitLab CI"],
    },
  ],
  
  // Compétences techniques
  skills: [
    {
      icon: Code,
      category: "Frontend",
      technologies: "React, Angular, Vue.js, TypeScript, JavaScript, HTML5, CSS3",
    },
    {
      icon: Server,
      category: "Backend",
      technologies: "Node.js, Express, PHP, Python, Java (JEE), C#, Laravel, Symfony, Spring Boot, .NET, Flask",
    },
    {
      icon: Database,
      category: "Databases",
      technologies: "PostgreSQL, MySQL, Oracle, MongoDB",
    },
    {
      icon: Smartphone,
      category: "Mobile & Cloud",
      technologies: "Kotlin, Dart, Docker, Docker Compose, AWS, Azure, Git/GitHub",
    },
  ],
  
  // Projets Personnel réalisés
  projects: [
  {
    title: "Portfolio Développeur",
    description: "Création d’un portfolio moderne pour présenter mes projets, compétences et expériences. Interface responsive avec animations fluides, optimisation des performances et mise en avant de mes réalisations.",
    tech: ["React", "TypeScript", "Tailwind CSS", "JavaScript", "UI/UX"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop",
    link: "#",
    github: "https://github.com/ASapAbro",
  },
  {
    title: "MyContact",
    description: "Application web full-stack de gestion de contacts avec authentification JWT. Frontend React moderne avec navigation et notifications, backend Node.js/Express, base de données MongoDB Atlas. Documentation API Swagger intégrée.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Vercel"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=500&fit=crop",
    link: "https://mycontact-client.vercel.app/",
    github: "https://github.com/ASapAbro/Fil-Rouge.git",
  },
  {
    title: "MyTasks",
    description: "Application MERN Stack de gestion de tâches avec authentification sécurisée JWT. Frontend React 18 avec React Router et Vite, backend Node.js/Express déployé en serverless sur Vercel, base de données MongoDB Atlas. Interface moderne et intuitive pour organiser vos projets et tâches quotidiennes.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Vite", "Vercel", "REST API"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop",
    link: "https://to-do-frnt.vercel.app/login",
    github: "https://github.com/ASapAbro/To_do.git",
  },
  {
    title: "Dernier Metro",
    description: "Application mobile fournissant les horaires du dernier métro et optimisant les déplacements urbains. Intégration d’API pour les trajets en temps réel et notifications en cas de perturbation.",
    tech: ["Android", "Java", "API REST", "Google Maps API"],
    image: "https://images.unsplash.com/photo-1519861538059-8f1432f346ef?w=800&h=500&fit=crop",
    link: "#",
    github: "https://github.com/ASapAbro",  },
  {
    title: "Système de Gestion de Bibliothèque",
    description: "Application Python en ligne de commande pour gérer une bibliothèque complète. Évolution progressive d'une version procédurale vers une architecture orientée objet avec héritage et polymorphisme. Gestion de 4 types de supports (livres classiques, audio, BD, ebooks) avec emprunt/retour et recherche avancée.",
    tech: ["Python 3.13", "POO", "Héritage", "Git", "CLI"],
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=500&fit=crop",
    link: "#",
    github: "https://github.com/ASapAbro/Python_Gestion_biblioth-que_",  }
]
};

export default portfolioData;
