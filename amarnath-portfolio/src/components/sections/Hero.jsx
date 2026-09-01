import { motion } from 'motion/react'
import {
    ArrowDown,
    ArrowUpRight,
} from 'lucide-react'

import TechNetwork from '../common/TechNetwork.jsx'

const Hero = () => {
    return (
        <section
            id="hero"
            className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 md:px-10"
        >
            {/* 3D Background */}
            <TechNetwork />

            {/* Ambient background */}
            <div className="pointer-events-none absolute inset-0 z-[1]">
                <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

                <div className="absolute right-[10%] top-[20%] h-[250px] w-[250px] rounded-full bg-violet-500/10 blur-[120px]" />
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto w-full max-w-7xl">
                <div className="max-w-5xl">

                    {/* Label */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.1,
                        }}
                        className="mb-8 flex items-center gap-3"
                    >
                        <span className="h-px w-10 bg-white/30" />

                        <span className="font-[var(--font-mono)] text-xs uppercase tracking-[0.25em] text-white/50">
                            Full-Stack Developer
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <div className="font-[var(--font-display)] text-[clamp(3.5rem,10vw,9rem)] font-semibold leading-[0.85] tracking-[-0.06em]">

                        <motion.div
                            initial={{
                                opacity: 0,
                                transform: 'translate3d(0, 24px, 0)',
                            }}
                            animate={{
                                opacity: 1,
                                transform: 'translate3d(0, 0, 0)',
                            }}
                            transition={{
                                duration: 0.55,
                                delay: 0.2,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            style={{
                                willChange: 'transform, opacity',
                            }}
                            className="text-white"
                        >
                            BUILD.
                        </motion.div>

                        <motion.div
                            initial={{
                                opacity: 0,
                                transform: 'translate3d(0, 24px, 0)',
                            }}
                            animate={{
                                opacity: 1,
                                transform: 'translate3d(0, 0, 0)',
                            }}
                            transition={{
                                duration: 0.55,
                                delay: 0.3,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            style={{
                                willChange: 'transform, opacity',
                            }}
                            className="text-white/30"
                        >
                            SOLVE.
                        </motion.div>

                        <motion.div
                            initial={{
                                opacity: 0,
                                transform: 'translate3d(0, 24px, 0)',
                            }}
                            animate={{
                                opacity: 1,
                                transform: 'translate3d(0, 0, 0)',
                            }}
                            transition={{
                                duration: 0.55,
                                delay: 0.4,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            style={{
                                willChange: 'transform, opacity',
                            }}
                            className="bg-gradient-to-r from-blue-400 via-blue-500 to-violet-500 bg-clip-text text-transparent"
                        >
                            AUTOMATE.
                        </motion.div>
                    </div>

                    {/* Description */}
                    <motion.p
                        initial={{
                            opacity: 0,
                            transform: 'translate3d(0, 15px, 0)',
                        }}
                        animate={{
                            opacity: 1,
                            transform: 'translate3d(0, 0, 0)',
                        }}
                        transition={{
                            duration: 0.5,
                            delay: 0.75,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        style={{
                            willChange: 'transform, opacity',
                        }}
                        className="mt-10 max-w-xl text-base leading-7 text-white/50 md:text-lg"
                    >
                        I build practical digital products, AI-powered
                        applications, and automation systems that turn
                        ideas into real solutions.
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            transform: 'translate3d(0, 15px, 0)',
                        }}
                        animate={{
                            opacity: 1,
                            transform: 'translate3d(0, 0, 0)',
                        }}
                        transition={{
                            duration: 0.5,
                            delay: 0.9,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        style={{
                            willChange: 'transform, opacity',
                        }}
                        className="mt-8 flex flex-wrap items-center gap-4"
                    >
                        <a
                            href="#work"
                            className="group flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform duration-300 hover:scale-[1.02]"
                        >
                            Explore My Work

                            <ArrowUpRight
                                size={17}
                                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                        </a>

                        <a
                            href="#contact"
                            className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.07]"
                        >
                            Let's Talk

                            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 transition-transform duration-300 group-hover:scale-150" />
                        </a>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.6,
                        delay: 1.25,
                    }}
                    className="absolute bottom-8 left-0 right-0 flex justify-end"
                >
                    <a
                        href="#about"
                        className="group flex flex-col items-center gap-3 text-white/30 transition-colors duration-300 hover:text-white"
                    >
                        <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.2em]">
                            Scroll to explore
                        </span>

                        <ArrowDown
                            size={16}
                            className="animate-bounce"
                        />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero