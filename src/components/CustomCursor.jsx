import React, { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useTheme } from './ThemeContext';

const CustomCursor = () => {
    const { theme } = useTheme();
    const [isHovering, setIsHovering] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { stiffness: 150, damping: 20 };
    const ringX = useSpring(cursorX, springConfig);
    const ringY = useSpring(cursorY, springConfig);

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

        const move = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };
        window.addEventListener("mousemove", move);

        return () => window.removeEventListener("mousemove", move);
    }, [isTouchDevice, cursorX, cursorY]);

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

    if (isTouchDevice) return null;

    return (
        <>
            {/* ELEMENT 3 — Spotlight Effect */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[1]"
                style={{ x: ringX, y: ringY }}
            >
                <div
                    className="rounded-full flex items-center justify-center pointer-events-none"
                    style={{
                        width: 500,
                        height: 500,
                        transform: "translate(-50%, -50%)",
                        background: theme === 'dark'
                            ? "radial-gradient(circle, rgba(255,115,34,0.15) 0%, rgba(255,115,34,0.06) 40%, transparent 70%)"
                            : "radial-gradient(circle, rgba(37,99,235,0.15) 0%, rgba(37,99,235,0.06) 40%, transparent 70%)"
                    }}
                />
            </motion.div>

            {/* ELEMENT 2 — Outer Ring */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[99998]"
                style={{ x: ringX, y: ringY }}
            >
                <motion.div
                    className="rounded-full flex items-center justify-center relative pointer-events-none"
                    style={{ transform: "translate(-50%, -50%)" }}
                    animate={{
                        width: isHovering ? 60 : 36,
                        height: isHovering ? 60 : 36,
                        border: theme === 'dark' ? "2px solid #f97316" : "2px solid #2563eb",
                        backgroundColor: isHovering ? (theme === 'dark' ? "rgba(249, 115, 22, 0.25)" : "rgba(37, 99, 235, 0.25)") : "transparent"
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                />
            </motion.div>

            {/* ELEMENT 1 — Small Dot (Instant follow) */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[99999]"
                style={{ x: cursorX, y: cursorY }}
            >
                <motion.div
                    className={`rounded-full relative ${theme === 'dark' ? 'bg-white' : 'bg-black'}`}
                    style={{ transform: "translate(-50%, -50%)" }}
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
