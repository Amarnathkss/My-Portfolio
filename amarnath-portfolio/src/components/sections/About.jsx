import { motion } from 'motion/react'
import {
    Brain,
    Code2,
    Database,
    Workflow,
} from 'lucide-react'

const capabilities = [
    {
        icon: Code2,
        title: 'Full-Stack',
        description:
            'Frontend, backend, APIs and complete web applications.',
    },
    {
        icon: Brain,
        title: 'AI Applications',
        description:
            'AI-powered products that turn intelligent models into useful tools.',
    },
    {
        icon: Workflow,
        title: 'Automation',
        description:
            'Workflow systems that reduce repetitive work and improve productivity.',
    },
    {
        icon: Database,
        title: 'Data Systems',
        description:
            'Database-driven applications with structured and scalable architecture.',
    },
]

const About = () => {
    return (
        <section
            id="about"
            className="relative overflow-hidden px-6 py-32 md:px-10 md:py-40"
        >
            <div className="mx-auto max-w-7xl">

                {/* Section Header */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: false,
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.6,
                    }}
                    className="mb-20 flex items-center gap-4"
                >
                    <span className="font-[var(--font-mono)] text-xs tracking-[0.2em] text-white/30">
                        01
                    </span>

                    <span className="h-px w-10 bg-white/20" />

                    <span className="font-[var(--font-mono)] text-xs uppercase tracking-[0.2em] text-white/40">
                        About Me
                    </span>
                </motion.div>

                {/* Main Statement */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: false,
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="max-w-5xl"
                >
                    <h2 className="font-[var(--font-display)] text-4xl font-medium leading-tight tracking-[-0.04em] text-white md:text-6xl lg:text-7xl">
                        I don't just write code.
                        <br />

                        <span className="text-white/30">
                            I build systems that solve problems.
                        </span>
                    </h2>
                </motion.div>

                {/* Description */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 25,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: false,
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.7,
                        delay: 0.1,
                    }}
                    className="mt-12 max-w-2xl"
                >
                    <p className="text-base leading-8 text-white/50 md:text-lg">
                        I'm Amarnath K S, a Full-Stack Developer focused on
                        building practical and user-friendly digital solutions.
                        I enjoy turning ideas into real products—from
                        full-stack web applications and real-time systems to
                        AI-powered tools and workflow automation.
                    </p>

                    <p className="mt-6 text-base leading-8 text-white/50 md:text-lg">
                        I care about clean development, thoughtful problem
                        solving, and understanding the real need behind a
                        project. I'm continuously learning, experimenting with
                        new technologies, and looking for better ways to build
                        useful software.
                    </p>
                </motion.div>

                {/* Capabilities */}
                <div className="mt-24 grid gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] md:grid-cols-2 lg:grid-cols-4">
                    {capabilities.map(
                        (
                            {
                                icon: Icon,
                                title,
                                description,
                            },
                            index,
                        ) => (
                            <motion.div
                                key={title}
                                initial={{
                                    opacity: 0,
                                    y: 30,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: false,
                                    amount: 0.3,
                                }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.08,
                                }}
                                className="group bg-[#0b0b0b] p-7 transition-colors duration-300 hover:bg-[#111111]"
                            >
                                <div className="mb-10 flex items-center justify-between">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                                        <Icon
                                            size={18}
                                            className="text-white/60 transition-colors duration-300 group-hover:text-blue-400"
                                        />
                                    </div>

                                    <span className="font-[var(--font-mono)] text-[10px] text-white/20">
                                        0{index + 1}
                                    </span>
                                </div>

                                <h3 className="font-[var(--font-display)] text-lg font-medium text-white">
                                    {title}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-white/35">
                                    {description}
                                </p>
                            </motion.div>
                        ),
                    )}
                </div>

                {/* Education */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: false,
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                    className="mt-24 grid gap-10 border-t border-white/[0.08] pt-10 md:grid-cols-2"
                >
                    <div>
                        <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-white/30">
                            Education
                        </span>

                        <h3 className="mt-4 font-[var(--font-display)] text-2xl text-white">
                            Bachelor of Computer Application
                        </h3>

                        <p className="mt-2 text-sm text-white/40">
                            Mangalayatan University · 2022 — 2025
                        </p>
                    </div>

                    <div>
                        <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-white/30">
                            Professional Learning
                        </span>

                        <h3 className="mt-4 font-[var(--font-display)] text-2xl text-white">
                            Full-Stack Web Development
                        </h3>

                        <p className="mt-2 text-sm text-white/40">
                            NxtWave CCBP Academy · 2023 — Present
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}

export default About