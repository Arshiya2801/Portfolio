import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const MagneticButton = ({ children, className = '', onClick, type = "button" }) => {
    const magneticRef = useRef(null);

    useEffect(() => {
        const xTo = gsap.quickTo(magneticRef.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(magneticRef.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { height, width, left, top } = magneticRef.current.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            xTo(x * 0.4); // Magnetic strength
            yTo(y * 0.4);
        };

        const handleMouseLeave = () => {
            xTo(0);
            yTo(0);
        };

        const element = magneticRef.current;
        if (element) {
            element.addEventListener("mousemove", handleMouseMove);
            element.addEventListener("mouseleave", handleMouseLeave);
        }

        return () => {
            if (element) {
                element.removeEventListener("mousemove", handleMouseMove);
                element.removeEventListener("mouseleave", handleMouseLeave);
            }
        };
    }, []);

    return (
        <div ref={magneticRef} className={`inline-block ${className}`} onClick={onClick}>
            {/* The child button receives the physical pull. We wrap it in a div so the outer layout isn't totally distorted. */}
            <div className="w-full h-full">
                {children}
            </div>
        </div>
    );
};

export default MagneticButton;
