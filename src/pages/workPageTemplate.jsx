import Contact from "../components/sections/Contact"

const WorkPageTemplate = ({ project }) => {
    return (
        <>
            <section className="bg-cover bg-black-rich text-white border" style={{ backgroundImage: project.caseStudy?.images?.hero ? `url(${project.caseStudy.images.hero})` : "none" }} >
                <div className="w-full h-[60dvh] flex flex-col items-center justify-end">
                    <h1 className="text-3xl tracking-tight leading-tight font-bold uppercase">{project.title}</h1>

                    <div className="flex space-x-6 mt-16">
                        {project.category.map((cat) => (
                            <span key={cat}
                                className="text-sm text-gray-dark px-3 py-1 bg-gray-light rounded-lg">{cat}</span>
                        ))}
                    </div>
                </div>
            </section>

            {project.shortDescription && <section className="w-full h-auto py-24 bg-gray-light space-y-12">
                <p className="text-xl text-gray-dark text-center">{project.shortDescription}</p>
            </section>}

            <section className="w-full h-auto py-24 bg-white">
                <div className="grid md:grid-cols-2 md:grid-rows-2 gap-12 items-stretch">

                    {project.caseStudy?.images?.sections?.length > 0 && <div className="order-2 md:order-1 h-full min-h-[600px] w-full relative group overflow-hidden border">
                        <img src={project.caseStudy?.images?.sections[0]?.images[0]} alt={project.title} className="absolute w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-125" />
                    </div>}

                    <div className="flex flex-col space-y-6 justify-center order-1 md:order-1 text-left">
                        <h2 className="text-2xl md:text-3xl font-bold text-black-rich uppercase mb-6 tracking-tight leading-tight">The Brief</h2>
                        <p className="text-base text-gray-dark">{project.caseStudy?.brief}</p>


                        <h2 className="text-2xl md:text-3xl font-bold text-black-rich uppercase mb-6 tracking-tight leading-tight mt-8">The Solution</h2>
                        <p className="text-base text-gray-dark">{project.caseStudy?.solution}</p>

                        <h3 className="text-lg font-bold text-black-rich uppercase mb-6 tracking-tight leading-tight mt-8">My roles</h3>
                        <div>
                            {project.caseStudy?.role?.map((el, index) => (
                                <p key={index} className="text-base text-gray-dark">{el}</p>
                            ))}
                        </div>
                    </div>

                    {project.caseStudy?.images?.sections?.length > 0 && <div className="order-3 md:order-3 h-full min-h-[600px] w-full relative group overflow-hidden border">
                        <img src={project.caseStudy?.images?.sections[0]?.images[1]} alt={project.title} className="absolute w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-125" />
                    </div>}
                </div>

            </section >

            <section className="w-full h-auto py-24 bg-gray-light space-y-12">
                <div className="grid md:grid-cols-2 md:grid-rows-1 gap-12 items-stretch">
                    <div className="flex flex-col space-y-6 justify-center order-1 md:order-1 text-left">
                        <h2 className="text-2xl md:text-3xl font-bold text-black-rich uppercase mb-6 tracking-tight leading-tight">Goals</h2>
                        <ul className="space-y-4 list-disc list-inside">
                            {project.caseStudy?.goals?.map((goal, index) => (
                                <li key={index} className="text-base text-gray-dark">{goal}</li>
                            ))}
                        </ul>


                        <h2 className="text-2xl md:text-3xl font-bold text-black-rich uppercase mb-6 tracking-tight leading-tight mt-8">My Process</h2>
                        <ul className="space-y-4 list-disc list-inside">
                            {project.caseStudy?.process?.map((step, index) => (
                                <li key={index} className="text-base text-gray-dark">{step}</li>
                            ))}
                        </ul>

                        <h2 className="text-2xl md:text-3xl font-bold text-black-rich uppercase mb-6 tracking-tight leading-tight mt-8">Outcome</h2>
                        <p className="text-base text-gray-dark md:max-w-[700px]">{project.caseStudy?.outcome}</p>
                    </div>
                </div>
            </section>

            {project.caseStudy?.images?.sections?.length >= 2 && <section className="w-full h-auto py-24 bg-white">
                <div className="grid lg:grid-cols-4 lg:grid-rows-4 gap-6">

                    <div className="order-1 lg:col-span-4 h-full min-h-[400px] w-full relative group overflow-hidden border">
                        <img src={project.caseStudy?.images?.sections[1]?.images[0]} alt={project.title} className="absolute w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-125" />
                    </div>

                    <div className="order-2 lg:col-span-2 lg:row-start-2 h-full min-h-[400px] w-full relative group overflow-hidden border">
                        <img src={project.caseStudy?.images?.sections[1]?.images[1]} alt={project.title} className="absolute w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-125" />
                    </div>

                    <div className="order-3 lg:col-start-3 lg:row-start-2 h-full min-h-[400px] w-full relative group overflow-hidden border">
                        <img src={project.caseStudy?.images?.sections[1]?.images[2]} alt={project.title} className="absolute w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-125" />
                    </div>

                    <div className="order-4 lg:col-start-4 lg:row-start-2 h-full min-h-[400px] w-full relative group overflow-hidden border">
                        <img src={project.caseStudy?.images?.sections[1]?.images[3]} alt={project.title} className="absolute w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-125" />
                    </div>

                    <div className="order-5 lg:row-start-3 h-full min-h-[400px] w-full relative group overflow-hidden border">
                        <img src={project.caseStudy?.images?.sections[1]?.images[4]} alt={project.title} className="absolute w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-125" />
                    </div>

                    <div className="order-6 lg:row-start-3 h-full min-h-[400px] w-full relative group overflow-hidden border">
                        <img src={project.caseStudy?.images?.sections[1]?.images[5]} alt={project.title} className="absolute w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-125" />
                    </div>

                    <div className="order-7 lg:col-span-2 lg:row-start-3 h-full min-h-[400px] w-full relative group overflow-hidden border">
                        <img src={project.caseStudy?.images?.sections[1]?.images[6]} alt={project.title} className="absolute w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-125" />
                    </div>

                    <div className="order-8 lg:col-span-2 lg:row-start-4 h-full min-h-[400px] w-full relative group overflow-hidden border">
                        <img src={project.caseStudy?.images?.sections[1]?.images[7]} alt={project.title} className="absolute w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-125" />
                    </div>

                    <div className="order-9 lg:col-span-2 lg:col-start-3 lg:row-start-4 h-full min-h-[400px] w-full relative group overflow-hidden border">
                        <img src={project.caseStudy?.images?.sections[1]?.images[8]} alt={project.title} className="absolute w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-125" />
                    </div>
                </div>

            </section >}
            <Contact
                heading="Have a project in mind?"
                text="If you’d like to work together on branding, web, or a digital product, I’d love to hear from you."
            />
        </>
    )
}

export default WorkPageTemplate