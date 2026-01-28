const projectDetails = [
    {
        id: "anonymous-lover",
        slug: "anonymous-lover",
        title: "Anonymous Lover",
        category: ["Web Development"],
        featured: true,
        shortDescription: "A responsive eCommerce website for Anonymous Lover, a natural skincare brand selling tallow-based moisturisers and essentials.",
        thumbnail: "https://res.cloudinary.com/dfnqamudd/image/upload/Captura_de_ecr%C3%A3_2026-01-23_221145_g5z2h6.png",
        liveUrl: "https://anonymouslover.co.uk/",
        year: 2025,
        caseStudy: {
            brief: "Anonymous Lover needed a clean, mobile-first eCommerce website to showcase and sell its natural skincare range, communicate the brand’s romantic tone of voice, and give customers a simple path from product discovery to purchase.",
            solution: "I built and launched a fast, responsive storefront with clear product presentation, consistent brand styling, and a conversion-focused structure. The site was set up to support ongoing updates as the product line evolves.",
            role: ["Web Developer", "UI Designer"],
            goals: [
                "Create a mobile-first shopping experience that feels simple, premium, and trustworthy.",
                "Present products with clear hierarchy (benefits, sizes/options, and purchase actions) to reduce friction.",
                "Lay a foundation for SEO basics and scalable content updates."
            ],
            process: [
                "Defined the site structure and user journey (entry points, discovery, details, purchase).",
                "Designed a clean UI system with consistent CTAs aligned to brand tone.",
                "Implemented responsive layouts and performance-minded components.",
                "Launched the live site and prepared for seasonal enhancements."
            ],
            outcome: "Anonymous Lover now has a live, branded storefront that makes it easy for customers to browse and buy. The layout prioritises clarity and conversion while keeping the brand's 'love letter' personality front and centre.",
            images: {
                hero: "https://res.cloudinary.com/dfnqamudd/image/upload/Captura_de_ecr%C3%A3_2026-01-23_221145_g5z2h6.png",
                sections: [
                    {
                        // Introduction Media
                        images: [
                            { url: "https://res.cloudinary.com/dfnqamudd/image/upload/Captura_de_ecr%C3%A3_2026-01-23_221145_g5z2h6.png", layout: 'full' }
                        ]
                    },
                    {
                        // Main Gallery
                        images: [
                            { url: "https://res.cloudinary.com/dfnqamudd/image/upload/Captura_de_ecr%C3%A3_2026-01-23_221529_kw0fne.png", layout: 'full', caption: 'Product listing page showing the clean, romantic grid' },
                            { url: "https://res.cloudinary.com/dfnqamudd/image/upload/Captura_de_ecr%C3%A3_2026-01-23_221518_alwisg.png", layout: 'half' },
                            { url: "https://res.cloudinary.com/dfnqamudd/image/upload/Captura_de_ecr%C3%A3_2026-01-23_221505_yu8xwh.png", layout: 'half' },
                            { url: "https://res.cloudinary.com/dfnqamudd/image/upload/Captura_de_ecr%C3%A3_2026-01-23_221541_rpujbs.png", layout: 'full' },
                            { url: "https://res.cloudinary.com/dfnqamudd/image/upload/Captura_de_ecr%C3%A3_2026-01-23_221556_syujgc.png", layout: 'full' },
                        ]
                    }
                ]
            }
        }
    },

    {
        id: "moodser",
        slug: "moodser",
        title: "Moodser",
        category: ["Web Development"],
        featured: true,
        shortDescription: "A lightweight moodboard composer for designers and creatives to quickly collect images, colors, and notes on a single canvas and export as a PNG.",
        thumbnail: "https://res.cloudinary.com/dfnqamudd/image/upload/Captura_de_ecr%C3%A3_2026-01-28_174400_qjsuke.png",
        liveUrl: "https://moodser.netlify.app",
        year: 2026,
        caseStudy: {
            brief: "Moodser started from a personal frustration with the traditional moodboarding process. Creating a moodboard often means saving images locally, opening heavy design tools, importing assets, and navigating complex interfaces before any real visual thinking begins. The goal was to design a faster, more focused alternative for the early stages of a creative project.",
            solution: "Moodser is a browser-based moodboard composer built around a single canvas. Users can add images via URL, drop color swatches, write short text notes, freely arrange elements, and export the result as a PNG, all without accounts, setup, or unnecessary UI.",
            role: ["Web Developer"],
            goals: [
                "Reduce friction in the early moodboarding process",
                "Create a focused, minimal interface that encourages visual thinking",
                "Use the project as a hands-on way to deepen React and TypeScript skills"
            ],
            process: [
                "Defined the core problem and intentionally limited the scope to an MVP",
                "Designed the interaction model around a single, freeform canvas",
                "Built the app using React, TypeScript, and a reducer-driven state architecture",
                "Iterated on drag, resize, selection, responsiveness, and export features through testing and refinement"
            ],
            outcome: "Moodser was successfully launched as a fully functional v1 product. It delivers a fast, intuitive moodboarding experience and serves as both a useful creative tool and a strong portfolio project demonstrating frontend architecture, interaction design, and design-led development thinking.",
            images: {
                hero: "https://res.cloudinary.com/dfnqamudd/image/upload/Captura_de_ecr%C3%A3_2026-01-28_174400_qjsuke.png",
                sections: [
                    {
                        // Introduction Media
                        images: [
                            { url: "https://res.cloudinary.com/dfnqamudd/video/upload/Moodser_-_Video_intro_utcupt.mp4", }
                        ]
                    },
                    {
                        // Main Gallery
                        images: [
                            { url: "https://res.cloudinary.com/dfnqamudd/image/upload/Captura_de_ecr%C3%A3_2026-01-28_174431_f90jfb.png", layout: 'full', caption: 'Product features list' },
                            { url: "https://res.cloudinary.com/dfnqamudd/image/upload/Captura_de_ecr%C3%A3_2026-01-28_174509_xnnvma.png", layout: 'full' },
                            { url: "https://res.cloudinary.com/dfnqamudd/image/upload/Captura_de_ecr%C3%A3_2026-01-28_174459_ebiqta.png", layout: 'half' },
                            { url: "https://res.cloudinary.com/dfnqamudd/image/upload/Captura_de_ecr%C3%A3_2026-01-16_220314_el7euu.png", layout: 'half' },
                        ]
                    }
                ]
            }
        }
    },









];

export default projectDetails;
