'use client'

import { useEffect, useRef } from 'react'

// Demo projects data
const projects = {
    trending: [
        { id: 1, name: "TaskFlow Pro", desc: "AI-powered task management", img: "https://via.placeholder.com/300x170/7c3aed/ffffff?text=TaskFlow", tags: ["React", "AI"], views: "12.5k" },
        { id: 2, name: "CodeSnap", desc: "Beautiful code screenshots", img: "https://via.placeholder.com/300x170/00d4ff/ffffff?text=CodeSnap", tags: ["Next.js", "TS"], views: "9.8k" },
        { id: 3, name: "MoodBoard", desc: "Collaborative design inspiration", img: "https://via.placeholder.com/300x170/ec4899/ffffff?text=MoodBoard", tags: ["React", "Firebase"], views: "8.2k" },
        { id: 4, name: "QuickPoll", desc: "Real-time team voting", img: "https://via.placeholder.com/300x170/f59e0b/ffffff?text=QuickPoll", tags: ["Vue", "Socket.io"], views: "7.5k" },
    ],
    productivity: [
        { id: 5, name: "FocusTimer", desc: "Pomodoro with analytics", img: "https://via.placeholder.com/300x170/22c55e/ffffff?text=FocusTimer", tags: ["React", "Charts"], views: "6.8k" },
        { id: 6, name: "NoteSync", desc: "Cross-platform notes", img: "https://via.placeholder.com/300x170/6366f1/ffffff?text=NoteSync", tags: ["Next.js", "MongoDB"], views: "5.9k" },
        { id: 7, name: "MeetingMate", desc: "AI meeting transcription", img: "https://via.placeholder.com/300x170/8b5cf6/ffffff?text=MeetingMate", tags: ["React", "OpenAI"], views: "5.2k" },
    ],
}

export default function Home() {
    const sectionsRef = useRef<HTMLElement[]>([])

    useEffect(() => {
        // Intersection Observer for scroll animations
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        )

        document.querySelectorAll('.section').forEach((section) => {
            observer.observe(section)
        })

        // Mouse glow effect on cards
        const handleMouseMove = (e: MouseEvent) => {
            const cards = document.querySelectorAll('.feature-card')
            cards.forEach((card) => {
                const rect = (card as HTMLElement).getBoundingClientRect()
                const x = e.clientX - rect.left
                const y = e.clientY - rect.top
                    ; (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`)
                    ; (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`)
            })
        }

        document.addEventListener('mousemove', handleMouseMove)

        // Nav scroll effect
        const handleScroll = () => {
            const nav = document.querySelector('.nav')
            if (window.scrollY > 50) {
                nav?.classList.add('scrolled')
            } else {
                nav?.classList.remove('scrolled')
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            observer.disconnect()
            document.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            {/* Navigation */}
            <nav className="nav py-4 px-6">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <a href="/" className="text-2xl font-bold font-heading group">
                        <span className="gradient-text">division</span>
                        <span className="text-white group-hover:text-accent transition-colors duration-300">zero</span>
                    </a>
                    <div className="flex items-center gap-6">
                        <a href="#showcase" className="nav-link">Projects</a>
                        <a href="#about" className="nav-link">About</a>
                        <a href="#model" className="nav-link">Model</a>
                        <a href="/builder" className="btn-primary !py-2.5 !px-6 text-sm">
                            Start Building
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>
                    </div>
                </div>
            </nav>

            <main>
                {/* Hero Section */}
                <section className="min-h-screen flex items-center justify-center relative px-6 pt-20">
                    <div className="hero-bg"></div>

                    <div className="max-w-5xl text-center z-10">
                        <div className="inline-block mb-6">
                            <span className="section-tag">
                                ✨ Build with AI • Ship Faster
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-8 leading-tight">
                            Showcase Your <span className="gradient-text">Vibecoding</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/60 mb-12 max-w-3xl mx-auto leading-relaxed">
                            A community platform for projects built with AI and natural language.
                            See what others create. Build faster with AI. Ship products, not just code.
                        </p>
                        <div className="flex gap-5 justify-center flex-wrap">
                            <a href="#showcase" className="btn-primary text-lg group">
                                Explore Projects
                                <svg className="w-5 h-5 transition-transform group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </a>
                            <a href="#about" className="btn-secondary text-lg group">
                                Learn More
                                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="scroll-indicator">
                        <div className="scroll-line"></div>
                    </div>
                </section>

                {/* Gradient Divider */}
                <div className="gradient-divider"></div>

                {/* Project Showcase Section */}
                <section id="showcase" className="section py-28 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <span className="section-tag">Showcase</span>
                            <h2 className="text-4xl md:text-5xl font-bold font-heading mt-4">
                                Discover <span className="gradient-text">Amazing Projects</span>
                            </h2>
                            <p className="text-white/50 mt-4 max-w-2xl mx-auto">
                                Projects built with vibecoding — AI tools, natural language, and creativity
                            </p>
                        </div>

                        {/* Trending Projects */}
                        <div className="mb-20">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-2xl font-bold font-heading flex items-center gap-3">
                                    <span className="text-3xl">🔥</span> Trending
                                </h3>
                                <a href="#" className="text-accent hover:text-white transition-colors flex items-center gap-2 group">
                                    View All
                                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                            <div className="carousel-wrapper">
                                <div className="project-carousel">
                                    {projects.trending.map((project) => (
                                        <div key={project.id} className="project-tile glow-border">
                                            <div className="overflow-hidden">
                                                <img src={project.img} alt={project.name} className="w-full h-44 object-cover" />
                                            </div>
                                            <div className="p-5 relative z-10">
                                                <h4 className="font-bold text-lg mb-1">{project.name}</h4>
                                                <p className="text-white/50 text-sm mb-4">{project.desc}</p>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex gap-2">
                                                        {project.tags.map((tag) => (
                                                            <span key={tag} className="tag">{tag}</span>
                                                        ))}
                                                    </div>
                                                    <span className="text-white/40 text-sm flex items-center gap-1">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                        </svg>
                                                        {project.views}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Productivity Projects */}
                        <div>
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-2xl font-bold font-heading flex items-center gap-3">
                                    <span className="text-3xl">⚡</span> Productivity
                                </h3>
                                <a href="#" className="text-accent hover:text-white transition-colors flex items-center gap-2 group">
                                    View All
                                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                            <div className="carousel-wrapper">
                                <div className="project-carousel">
                                    {projects.productivity.map((project) => (
                                        <div key={project.id} className="project-tile glow-border">
                                            <div className="overflow-hidden">
                                                <img src={project.img} alt={project.name} className="w-full h-44 object-cover" />
                                            </div>
                                            <div className="p-5 relative z-10">
                                                <h4 className="font-bold text-lg mb-1">{project.name}</h4>
                                                <p className="text-white/50 text-sm mb-4">{project.desc}</p>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex gap-2">
                                                        {project.tags.map((tag) => (
                                                            <span key={tag} className="tag">{tag}</span>
                                                        ))}
                                                    </div>
                                                    <span className="text-white/40 text-sm flex items-center gap-1">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                        </svg>
                                                        {project.views}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gradient Divider */}
                <div className="gradient-divider"></div>

                {/* About Section */}
                <section id="about" className="section py-28 px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-20">
                            <span className="section-tag">What We Are</span>
                            <h2 className="text-4xl md:text-5xl font-bold font-heading mt-4">
                                A showcase for <span className="gradient-text">vibecoding</span>
                            </h2>
                            <p className="text-white/50 mt-4 max-w-2xl mx-auto">
                                divisionzero is a community showcase for projects built using vibecoding —
                                building apps with AI and natural language.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="feature-card group">
                                <div className="text-5xl mb-6 transition-transform duration-300 group-hover:scale-110">💡</div>
                                <h3 className="text-xl font-bold font-heading mb-3">Learn by Seeing</h3>
                                <p className="text-white/50">
                                    Browse projects built with vibecoding. See how others use AI tools like Claude, Cursor, and v0.
                                </p>
                            </div>

                            <div className="feature-card group">
                                <div className="text-5xl mb-6 transition-transform duration-300 group-hover:scale-110">🚀</div>
                                <h3 className="text-xl font-bold font-heading mb-3">Get Exposure</h3>
                                <p className="text-white/50">
                                    Showcase your vibecoding projects to the community. Get feedback and share techniques.
                                </p>
                            </div>

                            <div className="feature-card group">
                                <div className="text-5xl mb-6 transition-transform duration-300 group-hover:scale-110">🤝</div>
                                <h3 className="text-xl font-bold font-heading mb-3">Build Together</h3>
                                <p className="text-white/50">
                                    Join a community of builders. Share knowledge, collaborate, and learn from each other.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gradient Divider */}
                <div className="gradient-divider"></div>

                {/* Model Section */}
                <section id="model" className="section py-28 px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-20">
                            <span className="section-tag">The Model</span>
                            <h2 className="text-4xl md:text-5xl font-bold font-heading mt-4">
                                Fair, transparent, <span className="gradient-text">community-driven</span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="model-card glass glow-border p-8">
                                <div className="model-number">01</div>
                                <h3 className="text-xl font-bold font-heading mb-3">Club Projects</h3>
                                <p className="text-white/50">
                                    When a project comes to the club, anyone can take it on.
                                    <strong className="text-white"> 80% to builder, 20% to club fund.</strong>
                                </p>
                            </div>

                            <div className="model-card glass glow-border p-8">
                                <div className="model-number">02</div>
                                <h3 className="text-xl font-bold font-heading mb-3">Your Projects</h3>
                                <p className="text-white/50">
                                    Working on your own idea? <strong className="text-white">No equity obligations.</strong>
                                    Keep 100% of what you build.
                                </p>
                            </div>

                            <div className="model-card glass glow-border p-8">
                                <div className="model-number">03</div>
                                <h3 className="text-xl font-bold font-heading mb-3">Community First</h3>
                                <p className="text-white/50">
                                    The club fund supports infrastructure and resources.
                                    <strong className="text-white"> Your success helps everyone.</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="section py-28 px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-3 gap-8 text-center">
                            <div className="group">
                                <div className="stat-value group-hover:scale-110 transition-transform duration-300">∞</div>
                                <div className="text-white/40 mt-3 text-lg">Possibilities</div>
                            </div>
                            <div className="group">
                                <div className="stat-value group-hover:scale-110 transition-transform duration-300">1</div>
                                <div className="text-white/40 mt-3 text-lg">Community</div>
                            </div>
                            <div className="group">
                                <div className="stat-value group-hover:scale-110 transition-transform duration-300">0</div>
                                <div className="text-white/40 mt-3 text-lg">Limits</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gradient Divider */}
                <div className="gradient-divider"></div>

                {/* Tools Section */}
                <section className="section py-20 px-6">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-2xl font-bold font-heading mb-2">
                            Built with the <span className="gradient-text">best tools</span>
                        </h2>
                        <p className="text-white/40 mb-10">No-code, low-code, and AI-powered tools</p>

                        <div className="logo-scroll-wrapper">
                            <div className="logo-scroll-track">
                                <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="React" />
                                <img src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" alt="Next.js" />
                                <img src="https://cdn.worldvectorlogo.com/logos/typescript.svg" alt="TypeScript" />
                                <img src="https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" alt="Tailwind" />
                                <img src="https://cdn.worldvectorlogo.com/logos/prisma-3.svg" alt="Prisma" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg" alt="Git" />
                                <img src="https://cdn.worldvectorlogo.com/logos/vercel.svg" alt="Vercel" />
                                <img src="https://cdn.worldvectorlogo.com/logos/supabase-icon.svg" alt="Supabase" />
                                {/* Duplicate for seamless loop */}
                                <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="React" />
                                <img src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" alt="Next.js" />
                                <img src="https://cdn.worldvectorlogo.com/logos/typescript.svg" alt="TypeScript" />
                                <img src="https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" alt="Tailwind" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section py-28 px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="glass glow-border p-12 md:p-16 text-center shimmer">
                            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                                Ready to build something <span className="gradient-text">amazing</span>?
                            </h2>
                            <p className="text-white/50 mb-10 max-w-xl mx-auto text-lg">
                                Join a community of builders turning ideas into reality.
                                No applications, no gatekeeping — just a shared passion for creating.
                            </p>
                            <div className="flex gap-5 justify-center flex-wrap">
                                <a href="/builder" className="btn-primary text-lg group">
                                    Start Building
                                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </a>
                                <a href="mailto:hello@divisionzero.dev" className="btn-secondary text-lg">Get In Touch</a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="py-16 px-6 border-t border-white/5">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-2xl font-bold font-heading">
                        <span className="gradient-text">division</span>zero
                    </div>
                    <div className="flex gap-8 text-white/40">
                        <a href="#showcase" className="hover:text-white transition-colors">Projects</a>
                        <a href="#about" className="hover:text-white transition-colors">About</a>
                        <a href="#model" className="hover:text-white transition-colors">Model</a>
                        <a href="mailto:hello@divisionzero.dev" className="hover:text-white transition-colors">Contact</a>
                    </div>
                    <p className="text-white/30">© 2024 divisionzero</p>
                </div>
            </footer>
        </>
    )
}
