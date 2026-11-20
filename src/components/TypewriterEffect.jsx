import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const TypewriterEffect = ({ text, delay = 0, speed = 40, pause = 2000, className = "" }) => {
    const reduceMotion = useReducedMotion();
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [startTyping, setStartTyping] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setStartTyping(true);
        }, delay);
        return () => clearTimeout(timer);
    }, [delay]);

    useEffect(() => {
        if (!startTyping || reduceMotion) return;

        let timeout;

        if (!isDeleting && displayedText.length < text.length) {
            // Typing phase
            timeout = setTimeout(() => {
                setDisplayedText(text.slice(0, displayedText.length + 1));
            }, speed);
        } else if (!isDeleting && displayedText.length === text.length) {
            // Pause before deleting
            timeout = setTimeout(() => setIsDeleting(true), pause);
        } else if (isDeleting && displayedText.length > 0) {
            // Deleting phase
            timeout = setTimeout(() => {
                setDisplayedText(text.slice(0, displayedText.length - 1));
            }, speed / 2);
        } else if (isDeleting && displayedText.length === 0) {
            // Small pause before repeating
            setIsDeleting(false);
            timeout = setTimeout(() => { }, speed);
        }

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, startTyping, text, speed, pause, reduceMotion]);

    return (
        <span className={className} aria-label={text}>
            <span aria-hidden="true">{reduceMotion ? text : displayedText}</span>
            <motion.span
                aria-hidden="true"
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                className="inline-block w-[3px] h-[1em] bg-[#f97316] ml-1 align-middle"
                style={{ verticalAlign: 'baseline' }}
            />
        </span>
    );
};

export default TypewriterEffect;
