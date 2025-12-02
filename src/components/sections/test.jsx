import React from 'react';
import Button from './ui/Button';

// Using a placeholder since local assets aren't available in this environment
const photoUrl = "https://picsum.photos/800/1000?grayscale";

const About: React.FC = () => {
    return (
        <section className="w-full h-auto py-24 px-6 md:px-12 lg:px-24 bg-white text-gray-900">
            {/* 
               Main Container
               - On desktop (md+): uses grid-cols-2 to create two equal-width columns that naturally stretch to the same height.
               - On mobile: defaults to block/flex-col implicitly stacking content.
               - gap-x-12: Spacing between columns.
            */}
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-stretch">

                {/* 
                   Left Column (Text)
                   - 'flex flex-col': allows us to justify content if needed (e.g., button at bottom).
                   - 'justify-center': Vertically centers the text content relative to the image if the image is taller.
                   - Or 'justify-between' if you want the button aligned to the very bottom edge.
                */}
                <div className="flex flex-col justify-center order-1 md:order-1 text-left">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-6 tracking-tight leading-tight">
                        A designer-dev with a focus on <span className="text-gray-400">clarity</span> and <span className="text-gray-400">craft</span>.
                    </h2>

                    <div className="space-y-6 text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-xl">
                        <p>
                            I’m a Designer turned Developer who combines brand thinking with clean, modular code.
                            I care about usability, consistency, and the small details that make something feel right.
                        </p>
                        <p>
                            I work closely with clients to create simple, intentional experiences — whether that’s a brand identity, a marketing site, or a full-stack web app.
                        </p>
                    </div>

                    <div className="mt-10 md:mt-14">
                        <Button as="navlink" to="/about" variant="primary">
                            More about me
                        </Button>
                    </div>
                </div>

                {/* 
                   Right Column (Image)
                   - order-2: Stacks below text on mobile.
                   - h-full: Ensures the container fills the grid cell height.
                   - min-h-[400px]: Ensures image has presence on mobile.
                   - relative: For any absolute overlays if needed (none here).
                */}
                <div className="order-2 md:order-2 h-full min-h-[400px] w-full relative group overflow-hidden rounded-2xl">
                    <img
                        src={photoUrl}
                        alt="Tiago portrait"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                    />
                    {/* Optional overlay for better text contrast if we had text over image, or just style */}
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>

            </div>
        </section>
    )
}

export default About;