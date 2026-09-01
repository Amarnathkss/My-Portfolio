import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'

import { projects } from '../../data/projects'

const Projects = () => {
    return (
        <section
            id="work"
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
                    className="mb-20"
                >
                    <div className="flex items-center gap-4">
                        <span className="font-[var(--font-mono)] text-xs tracking-[0.2em] text-white/30">
                            02
                        </span>

                        <span className="h-px w-10 bg-white/20" />

                        <span className="font-[var(--font-mono)] text-xs uppercase tracking-[0.2em] text-white/40">
                            Selected Work
                        </span>
                    </div>

                    <h2 className="mt-10 max-w-4xl font-[var(--font-display)] text-5xl font-medium leading-[0.95] tracking-[-0.04em] text-white md:text-7xl">
                        Things I've built
                        <br />

                        <span className="text-white/30">
                            that solve real problems.
                        </span>
                    </h2>
                </motion.div>

                {/* Projects */}
                <div className="space-y-6">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.id}
                            initial={{
                                opacity: 0,
                                y: 40,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: false,
                                amount: 0.15,
                            }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.08,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02]"
                        >
                            {/* Background */}
                            <div
                                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.accent} opacity-60 transition-opacity duration-700 group-hover:opacity-100`}
                            />

                            <div className="relative grid min-h-[420px] gap-10 p-8 md:grid-cols-[0.8fr_1.2fr] md:p-12 lg:p-16">

                                {/* Information */}
                                <div className="flex flex-col justify-between">

                                    <div>
                                        <div className="mb-8 flex items-center justify-between">
                                            <span className="font-[var(--font-mono)] text-xs text-white/25">
                                                {project.number}
                                            </span>

                                            <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-white/30">
                                                {project.category}
                                            </span>
                                        </div>

                                        <h3 className="font-[var(--font-display)] text-4xl font-medium tracking-[-0.04em] text-white md:text-5xl">
                                            {project.title}
                                        </h3>

                                        <p className="mt-5 max-w-md text-sm leading-7 text-white/45 md:text-base">
                                            {project.shortDescription}
                                        </p>
                                    </div>

                                    <div className="mt-10 flex flex-wrap gap-2">
                                        {project.technologies.map(
                                            (technology) => (
                                                <span
                                                    key={technology}
                                                    className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 font-[var(--font-mono)] text-[10px] text-white/40"
                                                >
                                                    {technology}
                                                </span>
                                            ),
                                        )}
                                    </div>
                                </div>

                                {/* Project Preview */}
                                <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden rounded-2xl border border-white/[0.07] bg-black/30">

                                    {/* Background */}
                                    <div
                                        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent"
                                    />

                                    {/* Project Image */}
                                    <div className="relative h-full w-full overflow-hidden">
                                        <img
                                            src={project.images[0]}
                                            alt={`${project.title} project preview`}
                                            loading="lazy"
                                            decoding="async"
                                            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                                        />

                                        {/* Image Overlay */}
                                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 opacity-60 transition-opacity duration-500 group-hover:opacity-40" />
                                    </div>

                                    {/* Open Icon */}
                                    <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white/50 backdrop-blur-sm transition-all duration-300 group-hover:border-white/20 group-hover:bg-white group-hover:text-black">
                                        <ArrowUpRight size={18} />
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Projects