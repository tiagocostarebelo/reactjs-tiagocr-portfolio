import React from "react";
import Button from "../components/ui/Button";

const NotFound = () => {
    return (
        <section className="w-full min-h-[70vh] flex items-center justify-center text-center px-6">
            <div className="max-w-xl">
                <p className="text-lg font-semibold uppercase tracking-widest text-gray-dark mb-4">
                    404
                </p>

                <h1 className="text-3xl md:text-4xl font-bold text-black-rich tracking-tight mb-6">
                    Page not found
                </h1>

                <p className="text-base text-gray-dark mb-3">
                    The page you’re looking for doesn’t exist or may have been moved.<br />
                    No problem, just follow the links bellow and you'll be safe.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <Button as="link" to="/" className="btn-primary">
                        Back to Home
                    </Button>

                    <Button as="link" to="/portfolio" className="btn-ghost">
                        View Portfolio
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default NotFound;
