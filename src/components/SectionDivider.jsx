import React from 'react';
import { motion } from 'framer-motion';

export default function SectionDivider() {
    return (
        <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-full h-px relative my-0"
            style={{ originX: 0.5 }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-30" />
        </motion.div>
    );
}
