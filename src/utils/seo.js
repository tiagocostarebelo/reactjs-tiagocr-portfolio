import projectDetails from "../content/projects";

export function getPageTitle(pathname) {
    // Static routes first
    const staticTitles = {
        "/": "TiagoCR | Brand Designer & Web Developer",
        "/about": "TiagoCR | About",
        "/portfolio": "TiagoCR | Portfolio",
        "/services": "TiagoCR | Services",
        "/contact": "TiagoCR | Contact",
        "/privacy-policy": "TiagoCR | Privacy Policy",
        "/terms-and-conditions": "TiagoCR | Terms and Conditions",
    };

    if (staticTitles[pathname]) return staticTitles[pathname];

    // Dynamic project route: /portfolio/:slug
    if (pathname.startsWith("/portfolio/")) {
        const slug = pathname.split("/portfolio/")[1];
        const project = projectDetails.find((p) => p.slug === slug);

        if (project) {
            const category = project.category?.[0] ?? "Project";
            return `TiagoCR | ${project.title}`;
        }

        // Slug not found (still a valid URL pattern)
        return `TiagoCR | Project`;
    }

    // Fallbacks
    return "TiagoCR | Page Not Found";
}

export function getMetaDescription(pathname) {
    const staticDescriptions = {
        "/":
            "Brand designer and web developer creating distinctive brands and modern websites for businesses, creators, and founders.",

        "/about":
            "Designer turned developer with a background in brand design and web development, focused on clarity, usability, and clean execution.",

        "/portfolio":
            "A selection of brand identity, web design, and web development projects built with clarity and purpose.",

        "/services":
            "Brand design, web development, and email development services focused on clear communication and strong visual systems.",

        "/contact":
            "Get in touch to discuss brand design, web development, or digital projects. Open to collaborations and new ideas.",

        "/privacy-policy":
            "Privacy policy outlining how personal data is collected, used, and protected on this website.",

        "/terms-and-conditions":
            "Terms and conditions governing the use of this website and its content.",
    };

    if (staticDescriptions[pathname]) {
        return staticDescriptions[pathname];
    }

    // Dynamic portfolio project pages
    if (pathname.startsWith("/portfolio/")) {
        const slug = pathname.split("/portfolio/")[1];
        const project = projectDetails.find((p) => p.slug === slug);

        if (project) {
            return `${project.title} – A ${project.category?.[0]?.toLowerCase() || "project"} focused on ${project.shortDescription?.toLowerCase() || "clarity and execution"}.`;
        }

        return "A selected project showcasing brand design and web development work.";
    }

    // Fallback
    return "Brand designer and web developer creating thoughtful digital experiences.";
}

export function setCanonical(url) {
    let link = document.querySelector("link[rel='canonical']");

    if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
    }

    link.setAttribute("href", url);
}