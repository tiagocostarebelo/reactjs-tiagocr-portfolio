import { useEffect, useMemo, useRef, useState } from "react";

const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const sampleUnique = (arr, count) => {
    const copy = [...arr];
    const out = [];
    const n = Math.min(count, copy.length);

    for (let i = 0; i < n; i++) {
        const idx = Math.floor(Math.random() * copy.length);
        out.push(copy[idx]);
        copy.splice(idx, 1);
    }
    return out;
};

const PatternBg = ({
    Svg,
    className = "",
    // behaviour
    minActive = 3,
    maxActive = 5,
    intervalMs = 2200,
    // style
    activeOpacity = 0.45,
    colors = ["#F0B90B", "#64CBC9"], // mustard, teal
    rootMargin = "0px 0px -20% 0px",
    threshold = 0.2,
}) => {
    const rootRef = useRef(null);
    const symbolsRef = useRef([]);
    const timerRef = useRef(null);

    const [isActive, setIsActive] = useState(false);

    const colorPalette = useMemo(() => colors.filter(Boolean), [colors]);

    useEffect(() => {
        const root = rootRef.current;
        if (!root) return;

        const svg = root.querySelector("svg");
        if (!svg) return;

        svg.setAttribute("preserveAspectRatio", "xMidYMid slice");

        const symbols = Array.from(svg.querySelectorAll("[data-symbol]"));
        symbolsRef.current = symbols;

        symbols.forEach((el) => {
            el.style.opacity = "0";
            el.style.color = "transparent";
            el.style.transition = "opacity 800ms ease, fill 800ms ease";
            el.style.willChange = "opacity, fill";
        });

        const stop = () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }

            symbols.forEach((el) => {
                el.style.opacity = "0";
                el.style.color = "transparent";
            });
        };

        const tick = () => {
            const all = symbolsRef.current;
            if (!all.length) return;

            // Clear all first (so only 3–5 are visible)
            all.forEach((el) => {
                el.style.opacity = "0";
                el.style.color = "transparent";
            });

            const count = randInt(minActive, maxActive);
            const picked = sampleUnique(all, count);

            picked.forEach((el) => {
                const c = colorPalette[Math.floor(Math.random() * colorPalette.length)];
                el.style.color = c;
                el.style.opacity = String(activeOpacity);
            });
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsActive(true);
                    // start immediately
                    tick();
                    // then rotate
                    if (!timerRef.current) {
                        timerRef.current = setInterval(tick, intervalMs);
                    }
                } else {
                    setIsActive(false);
                    stop();
                }
            },
            { root: null, rootMargin, threshold }
        );

        observer.observe(root);

        return () => {
            observer.disconnect();
            stop();
        };
    }, [
        activeOpacity,
        colorPalette,
        intervalMs,
        maxActive,
        minActive,
        rootMargin,
        threshold,
    ]);

    return (
        <div
            ref={rootRef}
            aria-hidden="true"
            className={`pattern-bg ${className} ${isActive ? "is-active" : ""}`}
        >
            {Svg ? <Svg /> : null}
        </div>
    );
};

export default PatternBg;
