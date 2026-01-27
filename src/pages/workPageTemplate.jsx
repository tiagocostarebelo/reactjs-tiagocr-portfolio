import React from "react";
import MediaRenderer from "../components/ui/MediaRenderer";
import Contact from "../components/sections/Contact";

const WorkPageTemplate = ({ project }) => {
    const isWebProject =
        project.category?.includes("Web Development") ||
        project.category?.includes("Email Development");

    const caseStudy = project.caseStudy || {};
    const hero = caseStudy?.images?.hero;
    const gallerySections = caseStudy?.images?.sections || [];

    return (
        <div className="min-h-screen font-body ">
            {/* HERO (dark) */}
            <header className="relative flex h-[90vh] flex-col justify-end overflow-hidden bg-black-rich text-white">
                {hero ? (
                    <div className="absolute inset-0 z-0">
                        <img
                            src={hero}
                            alt={project.title}
                            className={[
                                "h-full w-full opacity-70",
                                isWebProject ? "object-contain" : "object-cover",
                            ].join(" ")}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black-rich via-black-rich/40 to-transparent" />
                    </div>
                ) : null}

                <div className="relative z-10 w-full pb-16">
                    <div className="mx-auto w-full ">
                        <div className="mb-6 flex flex-wrap gap-3">
                            {(project.category || []).map((cat) => (
                                <span
                                    key={cat}
                                    className="rounded-full border border-mustard/30 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-mustard backdrop-blur-md"
                                >
                                    {cat}
                                </span>
                            ))}

                            {project.year ? (
                                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium tracking-widest text-white/70 backdrop-blur-sm">
                                    Est. {project.year}
                                </span>
                            ) : null}
                        </div>

                        <h1 className="font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-7xl">
                            {project.title}
                        </h1>

                        {project.shortDescription ? (
                            <p className="mt-6 max-w-2xl border-l-2 border-mustard pl-6 text-base leading-relaxed text-white/80 md:text-lg">
                                {project.shortDescription}
                            </p>
                        ) : null}
                    </div>
                </div>
            </header>

            {/* BODY*/}
            <main className="bg-white text-black-rich">
                {/* INTRO GRID */}
                <section className="w-full h-auto py-24 border-b border-gray-light bg-white">
                    <div className="mx-auto w-full ">
                        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
                            {/* LEFT */}
                            <div className="lg:col-span-7 space-y-12">
                                <div>
                                    <h2 className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-mustard">
                                        01. The Brief
                                    </h2>

                                    <p className="text-base font-light leading-snug text-black-rich md:text-xl">
                                        {caseStudy.brief}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 gap-10 pt-2 sm:grid-cols-2">
                                    <div>
                                        <h3 className="mb-4 text-[10px] font-bold uppercase tracking-widest text-gray-dark">
                                            Roles
                                        </h3>

                                        <ul className="space-y-2">
                                            {(caseStudy.role || []).map((r) => (
                                                <li key={r} className="text-sm text-gray-dark">
                                                    {r}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {project.liveUrl ? (
                                        <div>
                                            <h3 className="mb-4 text-[10px] font-bold uppercase tracking-widest text-gray-dark">
                                                Link
                                            </h3>

                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="group inline-flex items-center gap-2 text-sm font-semibold text-black-rich transition-colors hover:text-mustard"
                                            >
                                                Visit Live Site
                                                <svg
                                                    className="h-4 w-4 transform transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                    ) : null}
                                </div>
                            </div>

                            {/* RIGHT */}
                            <div className="lg:col-span-5 flex flex-col justify-center">
                                <div className="rounded-2xl bg-gray-light p-8 md:p-10">
                                    <h2 className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-mustard">
                                        02. The Solution
                                    </h2>

                                    <p className="text-sm italic text-gray-dark md:text-base">
                                        “{caseStudy.solution}”
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* GALLERY*/}
                {gallerySections.map((section, sIdx) => (
                    <section key={sIdx} className="w-full h-auto py-16 bg-gray-light">
                        <div className="mx-auto w-full ">
                            <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
                                {(section.images || []).map((item, iIdx) => {
                                    const isItemObject = typeof item === "object" && item !== null;
                                    const layout = isItemObject ? item.layout : "full";

                                    let colSpan = "md:col-span-12";
                                    if (layout === "half") colSpan = "md:col-span-6";
                                    if (layout === "third") colSpan = "md:col-span-4";

                                    if (isWebProject && !isItemObject) colSpan = "md:col-span-12";

                                    return (
                                        <div key={iIdx} className={`${colSpan} flex flex-col`}>
                                            <MediaRenderer
                                                media={item}
                                                className="w-full rounded-lg shadow-sm"
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                ))}

                {/* GOALS / PROCESS / OUTCOME */}
                <section className="w-full h-auto py-24 border-y border-gray-light bg-white">
                    <div className="mx-auto w-full ">
                        <div className="grid gap-16 md:grid-cols-2 md:gap-20">
                            {/* GOALS */}
                            <div>
                                <h2 className="mb-10 text-xs font-bold uppercase tracking-[0.3em] text-mustard">
                                    Goals
                                </h2>

                                <div className="space-y-10">
                                    {(caseStudy.goals || []).map((goal, i) => (
                                        <div key={i} className="grid grid-cols-[40px_1fr] gap-6">
                                            <span className="font-display text-2xl font-bold text-black-rich/15 hover:text-mustard transition-all duration-500">
                                                {String(i + 1).padStart(2, "0")}
                                            </span>
                                            <p className="pt-1 text-sm leading-relaxed text-gray-dark md:text-base">
                                                {goal}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* PROCESS */}
                            <div>
                                <h2 className="mb-10 text-xs font-bold uppercase tracking-[0.3em] text-mustard">
                                    Process
                                </h2>

                                <div className="space-y-10">
                                    {(caseStudy.process || []).map((step, i) => (
                                        <div key={i} className="grid grid-cols-[40px_1fr] gap-6">
                                            <span className="font-display text-2xl font-bold text-black-rich/15 hover:text-black-rich transition-all duration-500">
                                                {String(i + 1).padStart(2, "0")}
                                            </span>
                                            <p className="pt-1 text-sm leading-relaxed text-gray-dark md:text-base">
                                                {step}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* OUTCOME */}
                        <div className="mt-20 max-w-3xl">
                            <h2 className="mb-8 text-xs font-bold uppercase tracking-[0.3em] text-mustard">
                                Outcome
                            </h2>

                            <p className="font-display text-2xl font-medium leading-tight text-black-rich md:text-4xl">
                                {caseStudy.outcome}
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <Contact
                heading="Ready to elevate your project?"
                text="Whether it's a high-performance web platform, a unique visual identity, or a strategic digital campaign, I'm here to bring your vision to life."
            />
        </div>
    );
};

export default WorkPageTemplate;
