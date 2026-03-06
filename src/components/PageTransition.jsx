import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

// Helper to trigger the global animation
export const triggerTransition = (href) => {
    window.dispatchEvent(new CustomEvent("pageWipe", { detail: { href } }));
};

const PageTransition = () => {
    const wipeRef = useRef(null);
    const [isWiping, setIsWiping] = React.useState(false);

    useEffect(() => {
        const handleWipe = (e) => {
            if (isWiping) return;
            setIsWiping(true);
            const href = e.detail.href;

            // Start wipe up
            gsap.set(wipeRef.current, { transformOrigin: 'bottom' });
            gsap.to(wipeRef.current, {
                scaleY: 1,
                duration: 0.6,
                ease: 'power4.inOut',
                onComplete: () => {
                    // Temporarily disable CSS smooth scroll for instant jump behind the curtain
                    const html = document.documentElement;
                    const prevScrollBehavior = getComputedStyle(html).scrollBehavior;
                    html.style.scrollBehavior = 'auto';

                    const section = document.querySelector(href);
                    if (section) {
                        section.scrollIntoView();
                    }

                    // Wait a frame and wipe away upwards
                    setTimeout(() => {
                        html.style.scrollBehavior = prevScrollBehavior;
                        gsap.set(wipeRef.current, { transformOrigin: 'top' });
                        gsap.to(wipeRef.current, {
                            scaleY: 0,
                            duration: 0.6,
                            ease: 'power4.inOut',
                            onComplete: () => {
                                setIsWiping(false);
                            }
                        });
                    }, 50);
                }
            });
        };

        window.addEventListener("pageWipe", handleWipe);
        return () => window.removeEventListener("pageWipe", handleWipe);
    }, [isWiping]);

    return (
        <div
            ref={wipeRef}
            className="fixed inset-0 z-[100] pointer-events-none bg-[#f97316]"
            style={{ transform: 'scaleY(0)' }}
        />
    );
};

export default PageTransition;
