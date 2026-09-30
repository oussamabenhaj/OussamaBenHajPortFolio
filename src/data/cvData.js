export const cvData = {
  personalInfo: {
    name: "Oussama Ben Haj",
    title: {
      fr: "Développeur Full Stack JavaScript",
      en: "Full Stack JavaScript Developer"
    },
    bio: {
      fr: "Passionné par le développement d'applications web et mobiles modernes, performantes et intuitives. Spécialisé dans l'écosystème JavaScript (React, Next.js, React Native, Node.js) avec une solide maîtrise des architectures full-stack et des bases de données.",
      en: "Passionate about building modern, high-performance, and intuitive web & mobile applications. Specialized in the JavaScript ecosystem (React, Next.js, React Native, Node.js) with strong expertise in full-stack architecture and database systems."
    },
    email: "Benhajoussama99@gmail.com",
    phone: "+216-92513313",
    location: "Elmay Djerba, Tunisie",
    linkedin: "https://linkedin.com/in/oussama-ben-haj",
    linkedinDisplay: "linkedin.com/in/oussama-ben-haj",
    status: {
      fr: "Disponible pour de nouvelles opportunités",
      en: "Available for new opportunities"
    },
    avatar: "/profile.png"
  },
  
  stats: [
    { label: { fr: "Années d'études", en: "Years of Study" }, value: "3+" },
    { label: { fr: "Projets Réalisés", en: "Completed Projects" }, value: "5+" },
    { label: { fr: "Mentions Très Bien", en: "Highest Honors" }, value: "2" },
    { label: { fr: "Technologies", en: "Technologies" }, value: "10+" }
  ],

  education: [
    {
      id: "licence",
      degree: {
        fr: "LICENCE EN DÉVELOPPEMENT SYSTÈMES INFORMATIQUES",
        en: "BACHELOR IN COMPUTER SYSTEMS DEVELOPMENT"
      },
      institution: "Institut Supérieur d'Étude Technologique de Djerba (ISET Djerba)",
      location: "Djerba, Tunisie",
      year: "2022 - 2025",
      badge: {
        fr: "Mention Très Bien",
        en: "Highest Honors (Très Bien)"
      },
      description: {
        fr: "Formation de 3 ans spécialisée en développement de systèmes informatiques, génie logiciel, bases de données et architectures web. Terminée par un stage de fin d'études évalué avec la mention Très Bien.",
        en: "3-year specialized degree in computer systems development, software engineering, databases, and web architectures. Completed with a final graduation project awarded Highest Honors."
      },
      courses: ["Génie Logiciel", "Bases de Données", "Développement Web & Mobile", "Architectures Logicielles", "Algorithmique"]
    },
    {
      id: "bac",
      degree: {
        fr: "BACCALAURÉAT EN INFORMATIQUE",
        en: "HIGH SCHOOL DIPLOMA IN COMPUTER SCIENCE"
      },
      institution: "Lycée El May Djerba",
      location: "Djerba, Tunisie",
      year: "2022",
      badge: null,
      description: {
        fr: "Spécialité en bases de la programmation, algorithmique, logique informatique et structures de données.",
        en: "Specialization in programming fundamentals, algorithms, computer logic, and data structures."
      },
      courses: ["Programmation", "Algorithmique", "Systèmes d'Information", "TIC"]
    }
  ],

  experiences: [
    {
      id: "eduspher",
      role: {
        fr: "Projet de Fin d'Études : EduSpher",
        en: "Graduation Project: EduSpher"
      },
      company: "Amitech Smart Solution",
      location: "Djerba, Tunisie",
      period: "Janv. 2025 – Juin 2025",
      type: { fr: "Stage PFE", en: "Graduation Internship" },
      badge: {
        fr: "Mention Très Bien",
        en: "Highest Honors"
      },
      summary: {
        fr: "EduSpher est une solution Web & Mobile multiplateforme pour une éducation connectée et collaborative.",
        en: "EduSpher is a cross-platform Web & Mobile solution designed for connected and collaborative education."
      },
      description: {
        fr: "Conception et développement d'une plateforme d'apprentissage intelligente intégrant un site web interactif sous Next.js et une application mobile sous React Native. Backend microservices basé sur Node.js (Express) et base de données MySQL. Optimisation de l'expérience utilisateur, architecture modulaire et sécurisée.",
        en: "Designed and developed an intelligent learning platform featuring an interactive Next.js web application and a React Native mobile app. Powered by a Node.js (Express) backend microservice and MySQL database. Enhanced UX, robust architecture, and high security."
      },
      technologies: ["Next.js", "React Native", "Node.js", "Express", "MySQL", "REST API", "Tailwind/CSS"],
      highlights: [
        { fr: "Évalué par l'ISET Djerba avec Mention Très Bien", en: "Evaluated by ISET Djerba with Highest Honors" },
        { fr: "Développement multiplateforme Web (Next.js) & Mobile (React Native)", en: "Multiplatform Web (Next.js) & Mobile (React Native) development" },
        { fr: "Architecture RESTful & gestion sécurisée des utilisateurs", en: "RESTful architecture & secure user authentication" }
      ]
    },
    {
      id: "ecommerce",
      role: {
        fr: "Stage Développeur Full Stack",
        en: "Full Stack Developer Intern"
      },
      company: "Cyber Park",
      location: "Djerba, Tunisie",
      period: "Janv. 2024 – Févr. 2024",
      type: { fr: "Stage Technique", en: "Technical Internship" },
      badge: null,
      summary: {
        fr: "Développement d'une plateforme E-commerce moderne avec la stack MERN.",
        en: "Development of a modern E-commerce platform built with the MERN stack."
      },
      description: {
        fr: "Développement complet d'une plateforme de commerce électronique permettant la gestion des produits, du panier d'achat, du processus de commande et des comptes utilisateurs. Création des APIs Node.js/Express et intégration avec MongoDB.",
        en: "End-to-end development of an e-commerce web platform managing product catalogs, shopping carts, checkout workflows, and user accounts. Built custom Node.js/Express APIs integrated with MongoDB."
      },
      technologies: ["React.js", "Node.js", "MongoDB", "Express", "State Management", "JWT"],
      highlights: [
        { fr: "Gestion dynamique des stocks et commandes", en: "Dynamic stock and order management" },
        { fr: "Interface d'administration responsive et interactive", en: "Responsive and interactive admin dashboard" }
      ]
    },
    {
      id: "hotel",
      role: {
        fr: "Stage Développeur PHP",
        en: "PHP Developer Intern"
      },
      company: "Vacancia Travel",
      location: "Djerba, Tunisie",
      period: "Janv. 2023 – Févr. 2023",
      type: { fr: "Stage d'Initiation", en: "Introductory Internship" },
      badge: {
        fr: "Mention Bien",
        en: "Honors (Mention Bien)"
      },
      summary: {
        fr: "Création d'un système web de réservation d'hôtel avec PHP & MySQL.",
        en: "Creation of a web-based hotel booking & reservation system with PHP & MySQL."
      },
      description: {
        fr: "Conception et mise en place d'une application web pour la gestion sécurisée des réservations d'hôtels, la vérification de disponibilité des chambres et le traitement des réservations clients.",
        en: "Designed and implemented a web application for secure hotel bookings, room availability checks, and customer reservation management."
      },
      technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
      highlights: [
        { fr: "Évalué dans le cadre d'un stage avec la mention Bien", en: "Evaluated during internship with Honors" },
        { fr: "Base de données relationnelle MySQL optimisée", en: "Optimized relational MySQL database schema" }
      ]
    }
  ],

  projects: [
    {
      id: "eduspher-app",
      title: "EduSpher - Educational Ecosystem",
      category: "Full Stack",
      type: "Web & Mobile",
      image: "/52.jpeg",
      gallery: ["/52.jpeg", "/53.jpg"],
      description: {
        fr: "Solution Web & Mobile complète pour l'enseignement connecté chez Amitech Smart Solution. Comprend un portail web d'apprentissage interactif sous Next.js et une application mobile réactive sous React Native avec backend Node.js (Express) et MySQL.",
        en: "Complete Web & Mobile solution for connected education built at Amitech Smart Solution. Features an interactive Next.js web portal, a responsive React Native mobile app, and a Node.js (Express) backend with MySQL."
      },
      tags: ["Next.js", "React Native", "Node.js", "Express", "MySQL"],
      honors: { fr: "Mention Très Bien (PFE)", en: "Highest Honors (PFE)" },
      features: [
        { fr: "Interface Web Next.js & Application Mobile React Native", en: "Next.js Web Interface & React Native Mobile App" },
        { fr: "Tableau de bord interactif pour étudiants et enseignants", en: "Interactive dashboard for students and educators" },
        { fr: "Gestion sécurisée des accès et notifications en temps réel", en: "Secure authentication and real-time notification engine" }
      ],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: "vacancia-booking",
      title: "Vacancia Travel Booking System",
      category: "Web",
      type: "PHP / MySQL",
      image: "/image.png",
      gallery: ["/image.png"],
      description: {
        fr: "Système complet de réservation d'hôtel et gestion des séjours développé pour Vacancia Travel Djerba. Interface web sécurisée pour la recherche et réservation de chambres.",
        en: "Comprehensive hotel booking & reservation management platform developed for Vacancia Travel Djerba. Secure web interface for room searches and bookings."
      },
      tags: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
      honors: { fr: "Mention Bien", en: "Honors" },
      features: [
        { fr: "Plateforme officielle Vacancia Travel", en: "Official Vacancia Travel platform" },
        { fr: "Calendrier dynamique de disponibilité des séjours", en: "Dynamic room availability & booking calendar" },
        { fr: "Panneau d'administration sécurisé en PHP/MySQL", en: "Secure PHP/MySQL administrative management dashboard" }
      ],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: "ecommerce-platform",
      title: "CyberPark E-Commerce Platform",
      category: "Web",
      type: "MERN Stack",
      image: "/projetecomerce.jpg",
      gallery: ["/projetecomerce.jpg"],
      description: {
        fr: "Plateforme web de commerce électronique complète développée avec React.js, Express, Node.js et MongoDB pour la gestion des utilisateurs, des catalogues et des commandes.",
        en: "Comprehensive e-commerce web platform built with React.js, Express, Node.js, and MongoDB for managing users, product catalogs, and live orders."
      },
      tags: ["React.js", "Node.js", "MongoDB", "Express", "CSS3"],
      honors: null,
      features: [
        { fr: "Panier dynamique & filtrage multi-critères", en: "Dynamic cart & multi-criteria product filter" },
        { fr: "Authentification sécurisée JWT et rôles", en: "Secure JWT authentication & role management" },
        { fr: "Back-office d'administration des ventes", en: "Sales administration back-office" }
      ],
      demoUrl: "#",
      githubUrl: "#"
    }
  ],

  skills: [
    { name: "Node.js", category: "Backend", level: 90, icon: "Server", primary: true },
    { name: "React.js", category: "Frontend", level: 92, icon: "Code2", primary: true },
    { name: "React Native", category: "Mobile", level: 85, icon: "Smartphone", primary: true },
    { name: "Next.js", category: "Frontend", level: 88, icon: "Layers", primary: true },
    { name: "MySQL", category: "Database", level: 85, icon: "Database", primary: true },
    { name: "MongoDB", category: "Database", level: 82, icon: "Database", primary: true },
    { name: "Vue.js", category: "Frontend", level: 75, icon: "Layout", primary: false },
    { name: "Express.js", category: "Backend", level: 88, icon: "Cpu", primary: true },
    { name: "PHP", category: "Backend", level: 78, icon: "Code", primary: false },
    { name: "JavaScript (ES6+)", category: "Frontend", level: 92, icon: "FileCode", primary: true },
    { name: "HTML5 / CSS3", category: "Frontend", level: 95, icon: "Paintbrush", primary: true },
    { name: "Git & GitHub", category: "Tools", level: 88, icon: "GitBranch", primary: true }
  ],

  languages: [
    {
      name: { fr: "Français", en: "French" },
      level: { fr: "Courant / Professionnel", en: "Full Professional / Fluent" },
      dots: 4,
      percentage: 85
    },
    {
      name: { fr: "Anglais", en: "English" },
      level: { fr: "Intermédiaire / Professionnel", en: "Professional Working" },
      dots: 3,
      percentage: 70
    },
    {
      name: { fr: "Italien", en: "Italian" },
      level: { fr: "Notions / Élémentaire", en: "Elementary / Basic" },
      dots: 2,
      percentage: 40
    }
  ]
};
