const projectDetails = [
    {
        id: "anonymous-lover",
        slug: "anonymous-lover",
        title: "Anonymous Lover",
        category: ["Web Development", "UI/UX Design"],
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
        category: ["Web Development", "UI/UX Design"],
        featured: true,
        shortDescription: "A lightweight moodboard composer for designers and creatives to quickly collect images, colors, and notes on a single canvas and export as a PNG.",
        thumbnail: "https://res.cloudinary.com/dfnqamudd/image/upload/Captura_de_ecr%C3%A3_2026-01-28_174400_qjsuke.png",
        liveUrl: "https://moodser.netlify.app",
        year: 2026,
        caseStudy: {
            brief: "Moodser started from a personal idea to try and simplify the moodboarding creation process. Instead of saving images locally, opening design tools, importing assets, and navigating interfaces before any real visual thinking begins. The goal was to design a faster, more focused alternative for the early stages of a creative project.",
            solution: "Moodser is a browser-based moodboard composer built around a single canvas. Users can add images via URL, drop color swatches, write short text notes, freely arrange elements, and export the result as a PNG, all without accounts, setup, or unnecessary UI.",
            role: ["Web Developer", "UI Designer"],
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

    {
        id: "good-nuts",
        slug: "good-nuts",
        title: "Good Nuts",
        category: ["Brand Design", "Packaging Design"],
        featured: true,
        shortDescription: "A cheeky and bold brand identity for a nut butter brand, combining expressive typography, vibrant colours, playful copy, and a packaging system designed to stand proudly on the kitchen counter.",
        thumbnail: "https://res.cloudinary.com/dfnqamudd/image/upload/v1773226075/good_nuts-splash_aq5cbl.webp",
        liveUrl: "",
        year: 2026,
        caseStudy: {
            brief: "Good Nuts is a nut butter brand built around the idea that conscious products don’t have to feel serious or sterile. The brief was to create a brand identity that balances sustainability with personality, something cheeky, bold and memorable. Instead of looking like a typical health food product, Good Nuts should feel fun, confident and display-worthy: a jar people proudly leave on their kitchen counter rather than hide in the pantry.",
            solution: "The final identity combines expressive lettering inspired by nut shapes, a vibrant but grounded colour palette, playful tone of voice, and a flexible packaging system across multiple flavours. The brand was extended into campaign visuals and supporting applications to build a world that feels energetic, memorable, and display-worthy.",
            role: ["Brand Designer"],
            goals: [
                "Create a cheeky and bold identity that feels distinctive in the food category",
                "Design a packaging system that works across multiple nut butter flavours",
                "Translate the brief into a cohesive brand world with clear personality and strong shelf presence"
            ],
            process: [
                "Analysed the brief and defined the key brand attributes: cheeky, bold, and sustainable",
                "Explored moodboards, colour directions, and early logo concepts rooted in nut shapes and playful typography",
                "Refined the wordmark by integrating almond, hazelnut, and peanut references directly into the letterforms",
                "Built a packaging system across multiple flavours, then extended the brand into posters, mockups, tote bag, and billboard applications"
            ],
            outcome: "The result is a distinctive brand identity built around expressive typography, nut-inspired letterforms and a vibrant colour system. The packaging was designed as a flexible system that works across multiple flavours while maintaining strong shelf recognition. Supporting visuals and brand applications extend the playful tone of voice and reinforce the idea of a product that feels proud, visible and shareable in everyday kitchens. The project demonstrates a complete brand concept from identity through packaging and real-world applications.",
            images: {
                hero: "https://res.cloudinary.com/dfnqamudd/image/upload/v1773226075/good_nuts-splash_aq5cbl.webp",
                sections: [
                    {
                        // Introduction Media
                        images: [
                            { url: "https://res.cloudinary.com/dfnqamudd/image/upload/v1773226075/good_nuts-hero_w2x6fj.webp" }
                        ]
                    },
                    {
                        // Main Gallery
                        images: [
                            { url: "https://res.cloudinary.com/dfnqamudd/image/upload/v1773226077/good_nuts-brand_qfygzi.webp", layout: "half", caption: "Brand identity and packaging overview" },
                            { url: "https://res.cloudinary.com/dfnqamudd/image/upload/v1773226075/good-nuts_nuts-twirl_sb9bki.webp", layout: "half" },
                            { url: "https://res.cloudinary.com/dfnqamudd/image/upload/v1773226075/good-nuts_peanut-swirl_qwvnq0.webp", layout: "half" },
                            { url: "https://res.cloudinary.com/dfnqamudd/image/upload/v1773226076/good-nuts_tote_bag_r2fdoz.webp", layout: "half" },
                            { url: "https://res.cloudinary.com/dfnqamudd/image/upload/v1773226077/good-nuts_billboard_oqvrvt.webp", layout: "half" },
                        ]
                    }
                ]
            }
        }
    },
    {
        id: "odette",
        slug: "odette",
        title: "Odette",
        category: ["Brand Design", "Packaging Design"],
        featured: true,
        shortDescription: "A premium at-home coffee brand identity inspired by the elegance of a white swan, built on movement, restraint, and the quiet luxury of a daily ritual.",
        thumbnail: "https://res.cloudinary.com/dfnqamudd/image/upload/v1776170026/cover_odette_rqh6e8.jpg",
        liveUrl: "",
        year: 2026,
        caseStudy: {
            brief: "Odette is a premium at-home coffee brand inspired by the elegance of a white swan. The brand offers both flavoured and classic blends, targeting design-conscious young professionals aged 20–35 who value refined daily rituals and small everyday luxuries. The brief called for a complete brand identity: primary logo, at least one secondary mark or variation, and packaging for a minimum of two flavour variants. The identity needed to demonstrate how the brand adapts across different touchpoints. The twist: subtly incorporate a swan-inspired element within the branding, literal or abstract, without it being required in the primary logo.",
            solution: "Odette is built on movement. The wordmark draws from three sources: the fluid arc of a swan in motion, the oval of a coffee bean, and the discipline of a ballet dancer's form. Rather than illustrating these literally, the letterforms carry them. The 'O' holds the weight of a bean. The 'd' curves with the quiet grace of a swan's neck. The line is never still. The monogram distils this further, a single abstract form that rewards attention without demanding explanation.",
            role: ["Brand Designer"],
            goals: [
                "Create a premium brand identity that feels refined and design-conscious without relying on generic luxury conventions",
                "Subtly incorporate a swan-inspired element within the branding without making it the centrepiece of the primary logo",
                "Design a packaging system across multiple blend variants that reads as a coherent family while maintaining individual character",
                "Demonstrate how the identity adapts across different brand touchpoints beyond the logo itself"
            ],
            process: [
                "Analysed the brief and defined the core brand tension: warmth of coffee ritual meeting the cool elegance of a swan",
                "Built a moodboard around three pillars: swan geometry, ballet movement, and premium at-home coffee culture. Then locked a colour palette of warm caramel, terracotta, sage and near-black",
                "Explored abstract mark-making through sketchbook development, moving away from literal swan illustration toward form and movement carried within the letterforms themselves",
                "Refined the wordmark by integrating coffee bean, swan neck and dancer references directly into the 'O' and 'd' letterforms, paired with a standalone monogram mark",
                "Built a three-variant rigid box packaging system: Classic, Adagio and Still Water. Each differentiated by colour while maintaining a consistent layout grid, gold accent and monogram language",
                "Extended the identity into a brand pattern derived from the monogram, a shopping bag application, and lifestyle mockups to demonstrate the full brand world"
            ],
            outcome: "The result is a layered brand identity where nothing is literal and everything is felt. The wordmark carries the movement of a swan, the discipline of a dancer and the form of a coffee bean,not as illustration, but as memory held in the letterforms. The packaging system demonstrates how a single identity logic can stretch across a product range while maintaining coherence and premium presence. The brand pattern, derived directly from the monogram, extends the identity into tactile touchpoints that reward the consumer who looks closer. Restraint on the outside. Richness within.",
            images: {
                hero: "https://res.cloudinary.com/dfnqamudd/image/upload/v1776170026/cover_odette_rqh6e8.jpg",
                sections: [
                    {
                        // Introduction Media
                        images: [
                            { url: "" }
                        ]
                    },
                    {
                        // Main Gallery
                        images: [
                            { url: "https://res.cloudinary.com/dfnqamudd/image/upload/v1776170538/odette_wordmark_cmleml.jpg", layout: "full", caption: "Brand identity — wordmark and monogram" },
                            { url: "https://res.cloudinary.com/dfnqamudd/image/upload/v1776170901/mockup_lady_whrslq.jpg", layout: "half", caption: "Still Water — Limited Edition" },
                            { url: "https://res.cloudinary.com/dfnqamudd/image/upload/v1776170539/odette_pattern_ec0td0.jpg", layout: "half", caption: "Brand pattern derived from the monogram mark" },
                            { url: "https://res.cloudinary.com/dfnqamudd/image/upload/v1776170026/art5_n52cfq.jpg", layout: "half", caption: "Classic — Single Origin, Medium Roast" },
                            { url: "https://res.cloudinary.com/dfnqamudd/image/upload/v1776170701/art6_rnarnd.jpg", layout: "half", caption: "Adagio — Smooth, Slow Roasted" },
                            { url: "https://res.cloudinary.com/dfnqamudd/image/upload/v1776170027/bag_bg_lo2zsa.png", layout: "full", caption: "Shopping bag application" },

                        ]
                    }
                ]
            }
        }
    },

];

export default projectDetails;
