import { useEffect, useRef, useState } from "react";

const FadeIn = ({
    children,
    delay = 0,
    className = "",
    direction = "up",
    once = true,
    threshold = 0.1,
    rootMargin = "0px 0px -10% 0px",
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef(null);

    useEffect(() => {
        // Respect reduced motion
        const prefersReducedMotion = window.matchMedia?.(
            "(prefers-reduced-motion: reduce)"
        )?.matches;

        if (prefersReducedMotion) {
            setIsVisible(true);
            return;
        }

        const element = domRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (once) observer.unobserve(entry.target);
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [once, threshold, rootMargin]);

    const translateClass =
        direction === "up"
            ? isVisible
                ? "translate-y-0"
                : "translate-y-8"
            : direction === "down"
                ? isVisible
                    ? "translate-y-0"
                    : "-translate-y-8"
                : direction === "left"
                    ? isVisible
                        ? "translate-x-0"
                        : "translate-x-8"
                    : direction === "right"
                        ? isVisible
                            ? "translate-x-0"
                            : "-translate-x-8"
                        : "";

    return (
        <div
            ref={domRef}
            className={[
                "transition-all duration-700 ease-out will-change-transform",
                isVisible ? "opacity-100" : "opacity-0",
                translateClass,
                className,
            ].join(" ")}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default FadeIn;
