'use client';
import { cn } from '@/lib/utils';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import React, { useEffect, useState } from 'react';

export const BackgroundGradient = ({
    children,
    className,
    containerClassName,
    animate = true,
}: {
    children?: React.ReactNode;
    className?: string;
    containerClassName?: string;
    animate?: boolean;
}) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({
        currentTarget,
        clientX,
        clientY,
    }: React.MouseEvent<HTMLDivElement>) {
        const { left, top } = currentTarget.getBoundingClientRect();

        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const [active, setActive] = useState(false);
    useEffect(() => {
        setActive(true);
    }, []);

    return (
        <div
            className={cn(
                'group relative flex h-full max-w-full items-center justify-center rounded-[22px] border bg-neutral-100 p-0.5 dark:bg-zinc-900',
                containerClassName
            )}
            onMouseMove={handleMouseMove}
        >
            <div
                className={cn(
                    'relative z-20 h-full w-full overflow-hidden rounded-[20px] bg-white dark:bg-zinc-950',
                    className
                )}
            >
                {children}
            </div>
            <motion.div
                style={{
                    background: useMotionTemplate`
        radial-gradient(
          650px circle at ${mouseX}px ${mouseY}px,
          rgba(255,255,255,0.4),
          transparent 80%
        )
      `,
                }}
                className={cn(
                    'absolute -inset-px z-0 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 transition duration-500 group-hover:opacity-100',
                    'pointer-events-none'
                )}
            />
            <motion.div
                style={{
                    background: useMotionTemplate`
        radial-gradient(
          650px circle at ${mouseX}px ${mouseY}px,
          rgba(255,255,255,0.4),
          transparent 80%
        )
      `,
                }}
                className={cn(
                    'absolute -inset-px z-0 rounded-xl bg-gradient-to-r from-emerald-500 to-sky-500 opacity-0 transition duration-500 group-hover:opacity-100',
                    'pointer-events-none'
                )}
            />
        </div>
    );
};
