const projectDetails = [

    {
        id: "brand-elevate",
        slug: "brand-elevate",
        type: "case-study",
        title: "Brand Elevate",
        category: ["Brand Design", "Web Development"],
        featured: true,
        shortDescription:
            "A full identity system built around clarity, bold shapes, and flexible layouts for creators needing a confident and scalable brand presence.",
        thumbnail: "/images/portfolio/brand-elevate-thumb.jpg",
        year: 2024,

        caseStudy: {
            brief:
                "Brand Elevate needed a visual identity that felt modern, confident, and flexible enough to grow across digital and printed touchpoints.",
            solution:
                "I developed a geometric logo system supported by a clean typography framework, vibrant accents, and a modular layout structure.",
            role: ["Brand Designer", "Web Developer"],

            goals: [
                "Create a versatile system that scales across platforms",
                "Develop a strong, recognizable core mark",
                "Build a consistent visual language for future expansion",
            ],

            process: [
                "Moodboards exploring geometry, bold minimalism, and grid-based layouts",
                "Sketch iterations and refinement of the primary logo symbol",
                "Development of full identity system including color palette and type hierarchy",
                "Application across marketing materials and digital assets",
            ],

            outcome:
                "The final identity increased perceived brand quality and established Brand Elevate as a confident, modern creative business.",
            images: {
                hero: "/images/portfolio/brand-elevate-hero.jpg",
                sections: [
                    {
                        title: "Logo Development",
                        images: [
                            "/images/portfolio/brand-elevate-logo-1.jpg",
                            "/images/portfolio/brand-elevate-logo-2.jpg",
                        ],
                    },
                    {
                        title: "Visual Identity System",
                        images: [
                            "/images/portfolio/brand-elevate-identity-1.jpg",
                            "/images/portfolio/brand-elevate-identity-2.jpg",
                        ],
                    },
                    {
                        title: "Applications",
                        images: [
                            "/images/portfolio/brand-elevate-mockup-1.jpg",
                            "/images/portfolio/brand-elevate-mockup-2.jpg",
                        ],
                    },
                ],
            },
        },
    },

    {
        id: "pulse-app",
        slug: "pulse-app",
        type: "case-study",
        title: "Pulse App",
        category: ["Full Stack Web Development"],
        featured: false,
        shortDescription:
            "A productivity tool with authentication, real-time syncing, and a minimalist UI. Built using React, Node, PostgreSQL, and Supabase.",
        thumbnail: "/images/portfolio/pulse-app-thumb.jpg",
        year: 2025,

        caseStudy: {
            brief:
                "Pulse needed a fast, clean productivity app with real-time task syncing and a frictionless user experience.",
            solution:
                "I designed and built a full-stack application with role-based auth, real-time updates, and a clean component-driven UI.",
            role: ["Full Stack Developer", "UI Designer"],

            goals: [
                "Enable seamless real-time task updates",
                "Implement secure authentication and user roles",
                "Create a clean, distraction-free interface",
            ],

            process: [
                "Wireframing core user flows",
                "Designing a minimalist UI system",
                "Structuring backend API with Express",
                "Building real-time syncing using Supabase channels",
            ],

            features: [
                "Account creation + secure login",
                "Real-time task updates",
                "Drag-and-drop task management",
                "Responsive UI with Tailwind",
            ],

            outcome:
                "Pulse App became a fast, intuitive productivity tool used daily by small teams to stay organized.",
            images: {
                hero: "/images/portfolio/pulse-hero.jpg",
                sections: [
                    {
                        title: "UI Screens",
                        images: [
                            "/images/portfolio/pulse-ui-1.jpg",
                            "/images/portfolio/pulse-ui-2.jpg",
                        ],
                    },
                    {
                        title: "Architecture",
                        images: ["/images/portfolio/pulse-architecture.jpg"],
                    },
                ],
            },
        },
    },

    {
        id: "atelier-botanica",
        slug: "atelier-botanica",
        type: "case-study",
        title: "Atelier Botanica",
        category: ["Brand Design", "Web Development"],
        featured: true,
        shortDescription:
            "A refined identity and modern Shopify storefront designed for a botanical skincare brand.",
        thumbnail: "/images/portfolio/atelier-botanica-thumb.jpg",
        year: 2024,

        caseStudy: {
            brief:
                "Atelier Botanica wanted a brand identity and online store that felt premium, natural, and conversion-focused.",
            solution:
                "I designed a soft, botanical-inspired identity and built a Shopify storefront optimized for browsing, credibility, and sales.",
            role: ["Brand Designer", "Web Developer"],

            goals: [
                "Develop a premium, nature-inspired identity",
                "Improve product discoverability and conversions",
                "Create a cohesive system across packaging and digital",
            ],

            process: [
                "Brand exploration through moodboards and typography studies",
                "Logo refinement and creation of botanical patterns",
                "Shopify theme customization and UX optimization",
            ],

            outcome:
                "The brand achieved a cohesive premium look that increased customer trust and improved store performance.",
            images: {
                hero: "/images/portfolio/atelier-hero.jpg",
                sections: [
                    {
                        title: "Identity System",
                        images: [
                            "/images/portfolio/atelier-identity-1.jpg",
                            "/images/portfolio/atelier-identity-2.jpg",
                        ],
                    },
                    {
                        title: "Website Screens",
                        images: [
                            "/images/portfolio/atelier-web-1.jpg",
                            "/images/portfolio/atelier-web-2.jpg",
                        ],
                    },
                ],
            },
        },
    },

    {
        id: "motionframe",
        slug: "motionframe",
        type: "simple",
        title: "MotionFrame",
        category: ["Web Development", "UI Design"],
        featured: true,
        shortDescription:
            "A micro-interaction–heavy portfolio website with smooth transitions and animation-focused layouts.",
        thumbnail: "/images/portfolio/motionframe-thumb.jpg",
        images: [
            "/images/portfolio/motionframe-1.jpg",
            "/images/portfolio/motionframe-2.jpg",
        ],
        overview: {
            role: ["UI Designer", "Front-End Developer"],
            description:
                "Designed and developed a dynamic portfolio concept focused on animation and seamless transitions.",
        },
        outcome:
            "A polished, interaction-rich experience demonstrating motion principles and clean UI structure.",
    },

    {
        id: "nimbus-dashboard",
        slug: "nimbus-dashboard",
        type: "simple",
        title: "Nimbus Dashboard",
        category: ["Full Stack Web Development", "UI Design"],
        featured: false,
        shortDescription:
            "A modular dashboard UI with user roles, analytics, and customizable widgets.",
        thumbnail: "/images/portfolio/nimbus-thumb.jpg",
        images: [
            "/images/portfolio/nimbus-1.jpg",
            "/images/portfolio/nimbus-2.jpg",
            "/images/portfolio/nimbus-3.jpg",
        ],
        overview: {
            role: ["Full Stack Developer"],
            description:
                "A flexible dashboard system with authenticated user flows and customizable layouts.",
        },
        outcome:
            "Delivered a system capable of scaling with new widgets, roles, and analytics.",
    },

    {
        id: "email-suite",
        slug: "email-suite",
        type: "simple",
        title: "Email Design Suite",
        category: ["Email Development"],
        featured: false,
        shortDescription:
            "A modular set of responsive, accessible email templates built for marketing automation workflows.",
        thumbnail: "/images/portfolio/email-suite-thumb.jpg",
        images: [
            "/images/portfolio/email-suite-1.jpg",
            "/images/portfolio/email-suite-2.jpg",
        ],
        overview: {
            role: ["Email Developer"],
            description:
                "Designed and coded a scalable email design system for repeatable campaign builds.",
        },
        outcome:
            "Reduced email production time by 60% while improving consistency and accessibility.",
    },
];

export default projectDetails;
