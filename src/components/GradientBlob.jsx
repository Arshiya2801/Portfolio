import React from 'react';
import { useTheme } from './ThemeContext';

export default function GradientBlob() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Primary blob */}
            <div
                className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.12] animate-blob"
                style={{
                    background: isDark
                        ? 'radial-gradient(circle, #f97316, #f59e0b, #ef4444)'
                        : 'radial-gradient(circle, #2563eb, #3b82f6, #6366f1)',
                    top: '10%',
                    left: '10%',
                }}
            />
            {/* Secondary blob */}
            <div
                className="absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-[0.08] animate-blob animation-delay-2000"
                style={{
                    background: isDark
                        ? 'radial-gradient(circle, #ff9f58, #f97316, #ea580c)'
                        : 'radial-gradient(circle, #60a5fa, #2563eb, #4f46e5)',
                    bottom: '10%',
                    right: '5%',
                    animationDelay: '2s',
                    animationDirection: 'reverse',
                }}
            />
            {/* Subtle accent blob */}
            <div
                className="absolute w-[300px] h-[300px] rounded-full blur-[80px] opacity-[0.06] animate-blob"
                style={{
                    background: isDark
                        ? 'radial-gradient(circle, #fbbf24, #f97316)'
                        : 'radial-gradient(circle, #818cf8, #3b82f6)',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    animationDelay: '4s',
                }}
            />

            <style>{`
                @keyframes blob {
                    0%, 100% {
                        transform: translate(0, 0) scale(1);
                        border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
                    }
                    25% {
                        transform: translate(30px, -50px) scale(1.1);
                        border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
                    }
                    50% {
                        transform: translate(-20px, 20px) scale(0.95);
                        border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
                    }
                    75% {
                        transform: translate(50px, 30px) scale(1.05);
                        border-radius: 50% 30% 50% 70% / 40% 60% 40% 60%;
                    }
                }
                .animate-blob {
                    animation: blob 12s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}
