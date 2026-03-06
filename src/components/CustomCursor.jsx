import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
    const [isHovering, setIsHovering] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    // Detect touch device
    useEffect(() => {
        const checkTouch = () => {
            setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
        };
        checkTouch();
        window.addEventListener('resize', checkTouch);
        return () => window.removeEventListener('resize', checkTouch);
    }, []);

    // Track mouse position
    useEffect(() => {
        if (isTouchDevice) return;

        const move = (e) => setMousePos({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", move);

        return () => window.removeEventListener("mousemove", move);
    }, [isTouchDevice]);

    // Track hover on interactive elements
    useEffect(() => {
        if (isTouchDevice) return;

        const targets = document.querySelectorAll(
            "button, a, .project-card, .skill-card, .bento-card, [data-cursor-hover]"
        );
        const enter = () => setIsHovering(true);
        const leave = () => setIsHovering(false);

        targets.forEach(el => {
            el.addEventListener("mouseenter", enter);
            el.addEventListener("mouseleave", leave);
        });

        return () => targets.forEach(el => {
            el.removeEventListener("mouseenter", enter);
            el.removeEventListener("mouseleave", leave);
        });
    }, [isTouchDevice]);

    // Spring for ring and spotlight lag
    const springConfig = { stiffness: 150, damping: 20 };
    const ringX = useSpring(mousePos.x, springConfig);
    const ringY = useSpring(mousePos.y, springConfig);

    if (isTouchDevice) return null;

    return (
        <>
            {/* ELEMENT 3 — Spotlight Effect */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[1]"
                style={{ x: ringX, y: ringY }}
            >
                <div
                    className="rounded-full"
                    style={{
                        width: 500,
                        height: 500,
                        transform: "translate(-50%, -50%)",
                        background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 40%, transparent 70%)"
                    }}
                />
            </motion.div>

            {/* ELEMENT 2 — Outer Ring */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[99998]"
                style={{ x: ringX, y: ringY }}
            >
                <motion.div
                    className="rounded-full"
                    style={{ x: "-50%", y: "-50%" }}
                    animate={{
                        width: isHovering ? 60 : 36,
                        height: isHovering ? 60 : 36,
                        border: "2px solid #f97316",
                        backgroundColor: isHovering ? "rgba(249, 115, 22, 0.25)" : "transparent"
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                />
            </motion.div>

            {/* ELEMENT 1 — Small Dot (Instant follow) */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[99999]"
                style={{ x: mousePos.x, y: mousePos.y }}
            >
                <motion.div
                    className="rounded-full bg-white"
                    style={{ x: "-50%", y: "-50%" }}
                    animate={{
                        width: isHovering ? 4 : 8,
                        height: isHovering ? 4 : 8,
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                />
            </motion.div>
        </>
    );
};

export default CustomCursor;
