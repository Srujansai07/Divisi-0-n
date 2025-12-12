'use client'

import { useEffect, useRef } from 'react'

// Demo projects data
const projects = {
    trending: [
        { id: 1, name: "TaskFlow Pro", desc: "AI-powered task management with smart scheduling", img: "https://via.placeholder.com/340x200/7c3aed/ffffff?text=TaskFlow", tags: ["React", "AI"], views: "12.5k", gradient: "from-violet-600 to-purple-700" },
        { id: 2, name: "CodeSnap", desc: "Beautiful code screenshots in seconds", img: "https://via.placeholder.com/340x200/00d4ff/ffffff?text=CodeSnap", tags: ["Next.js", "TS"], views: "9.8k", gradient: "from-cyan-500 to-blue-600" },
        { id: 3, name: "MoodBoard", desc: "Collaborative design inspiration boards", img: "https://via.placeholder.com/340x200/ec4899/ffffff?text=MoodBoard", tags: ["React", "Firebase"], views: "8.2k", gradient: "from-pink-500 to-rose-600" },
        { id: 4, name: "QuickPoll", desc: "Real-time team voting and decisions", img: "https://via.placeholder.com/340x200/f97316/ffffff?text=QuickPoll", tags: ["Vue", "Socket.io"], views: "7.5k", gradient: "from-orange-500 to-amber-600" },
    ],
    productivity: [
        { id: 5, name: "FocusTimer", desc: "Pomodoro with deep analytics", img: "https://via.placeholder.com/340x200/22c55e/ffffff?text=FocusTimer", tags: ["React", "Charts"], views: "6.8k", gradient: "from-green-500 to-emerald-600" },
        { id: 6, name: "NoteSync", desc: "Cross-platform notes that sync instantly", img: "https://via.placeholder.com/340x200/6366f1/ffffff?text=NoteSync", tags: ["Next.js", "MongoDB"], views: "5.9k", gradient: "from-indigo-500 to-violet-600" },
        { id: 7, name: "MeetingMate", desc: "AI meeting transcription & summaries", img: "https://via.placeholder.com/340x200/8b5cf6/ffffff?text=MeetingMate", tags: ["React", "OpenAI"], views: "5.2k", gradient: "from-violet-500 to-purple-600" },
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
            { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
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
            {/* Floating Particles */}
            <div className="particles">
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 15}s`,
                            animationDuration: `${15 + Math.random() * 10}s`,
                        }}
                    />
                ))}
            </div>

            {/* Navigation */}
            <nav className="nav py-5 px-8">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <a href="/" className="text-2xl font-black font-heading group flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-violet-500/30">
                            <span className="text-white text-lg font-black">D</span>
                        </div>
                        <span>
                            <span className="gradient-text">division</span>
                            <span className="text-white group-hover:text-cyan-400 transition-colors duration-500">zero</span>
                        </span>
                    </a>
                    <div className="flex items-center gap-2">
                        <a href="#showcase" className="nav-link">Projects</a>
                        <a href="#about" className="nav-link">About</a>
                        <a href="#model" className="nav-link">Model</a>
                        <a href="/builder" className="btn-primary !py-3 !px-7 text-sm ml-4">
                            Start Building
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>
                    </div>
                </div>
            </nav>

            <main>
                {/* Hero Section */}
                <section className="min-h-screen flex items-center justify-center relative px-8 pt-24 pb-16">
                    <div className="hero-bg">
                        <div className="hero-stars"></div>
                    </div>

                    <div className="max-w-6xl text-center z-10">
                        <div className="inline-block mb-8">
                            <span className="section-tag">
                                ✨ Build with AI • Ship Faster • Scale Smarter
                            </span>
                        </div>
                        <h1 className="text-6xl md:text-7xl lg:text-9xl font-black font-heading mb-10 leading-[0.95] tracking-tight">
                            Showcase Your
                            <br />
                            <span className="gradient-text">Vibecoding</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/60 mb-14 max-w-3xl mx-auto leading-relaxed font-medium">
                            The community platform where extraordinary projects come to life.
                            Built with AI, powered by creativity, shipped to the world.
                        </p>
                        <div className="flex gap-6 justify-center flex-wrap">
                            <a href="#showcase" className="btn-primary text-xl group">
                                Explore Projects
                                <svg className="w-6 h-6 transition-transform duration-500 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                </svg>
                            </a>
                            <a href="#about" className="btn-secondary text-xl group">
                                Learn More
                                <svg className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                        </div>

                        {/* Trust badges */}
                        <div className="mt-20 flex items-center justify-center gap-8 text-white/30 text-sm font-medium">
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Free to use
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Open community
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                AI-powered
                            </div>
                        </div>
                    </div>

                    <div className="scroll-indicator">
                        <div className="scroll-line"></div>
                    </div>
                </section>

                {/* Gradient Divider */}
                <div className="gradient-divider"></div>

                {/* Project Showcase Section */}
                <section id="showcase" className="section py-32 px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-24">
                            <span className="section-tag">Showcase</span>
                            <h2 className="text-5xl md:text-6xl font-black font-heading mt-6 tracking-tight">
                                Discover <span className="gradient-text">Amazing Projects</span>
                            </h2>
                            <p className="text-white/50 mt-6 max-w-2xl mx-auto text-xl">
                                Explore projects built with vibecoding — where AI meets creativity
                            </p>
                        </div>

                        {/* Trending Projects */}
                        <div className="mb-24">
                            <div className="flex items-center justify-between mb-10">
                                <h3 className="text-3xl font-black font-heading flex items-center gap-4">
                                    <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg shadow-orange-500/30">
                                        🔥
                                    </span>
                                    Trending Now
                                </h3>
                                <a href="#" className="text-cyan-400 hover:text-white transition-colors flex items-center gap-3 font-semibold group">
                                    View All
                                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </a>
                            </div>
                            <div className="carousel-wrapper">
                                <div className="project-carousel">
                                    {projects.trending.map((project) => (
                                        <div key={project.id} className="project-tile glow-border group">
                                            <div className="overflow-hidden rounded-t-3xl">
                                                <img src={project.img} alt={project.name} className="w-full h-52 object-cover" />
                                            </div>
                                            <div className="p-7 relative z-10">
                                                <h4 className="font-bold text-xl mb-2 group-hover:text-cyan-400 transition-colors">{project.name}</h4>
                                                <p className="text-white/50 text-sm mb-5 line-clamp-2">{project.desc}</p>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex gap-2">
                                                        {project.tags.map((tag) => (
                                                            <span key={tag} className="tag">{tag}</span>
                                                        ))}
                                                    </div>
                                                    <span className="text-white/40 text-sm flex items-center gap-2 font-medium">
                                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
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
                            <div className="flex items-center justify-between mb-10">
                                <h3 className="text-3xl font-black font-heading flex items-center gap-4">
                                    <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/30">
                                        ⚡
                                    </span>
                                    Productivity
                                </h3>
                                <a href="#" className="text-cyan-400 hover:text-white transition-colors flex items-center gap-3 font-semibold group">
                                    View All
                                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </a>
                            </div>
                            <div className="carousel-wrapper">
                                <div className="project-carousel">
                                    {projects.productivity.map((project) => (
                                        <div key={project.id} className="project-tile glow-border group">
                                            <div className="overflow-hidden rounded-t-3xl">
                                                <img src={project.img} alt={project.name} className="w-full h-52 object-cover" />
                                            </div>
                                            <div className="p-7 relative z-10">
                                                <h4 className="font-bold text-xl mb-2 group-hover:text-cyan-400 transition-colors">{project.name}</h4>
                                                <p className="text-white/50 text-sm mb-5 line-clamp-2">{project.desc}</p>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex gap-2">
                                                        {project.tags.map((tag) => (
                                                            <span key={tag} className="tag">{tag}</span>
                                                        ))}
                                                    </div>
                                                    <span className="text-white/40 text-sm flex items-center gap-2 font-medium">
                                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
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
                <section id="about" className="section py-32 px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-24">
                            <span className="section-tag">What We Are</span>
                            <h2 className="text-5xl md:text-6xl font-black font-heading mt-6 tracking-tight">
                                The home for <span className="gradient-text">vibecoding</span>
                            </h2>
                            <p className="text-white/50 mt-6 max-w-2xl mx-auto text-xl">
                                Where AI-powered creativity meets real-world products.
                                Build, showcase, and scale your ideas.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="feature-card group">
                                <div className="feature-icon">💡</div>
                                <h3 className="text-2xl font-bold font-heading mb-4">Learn by Seeing</h3>
                                <p className="text-white/50 text-lg leading-relaxed">
                                    Browse projects built with vibecoding. See how others use AI tools like Claude, Cursor, and v0 to ship faster.
                                </p>
                            </div>

                            <div className="feature-card group">
                                <div className="feature-icon">🚀</div>
                                <h3 className="text-2xl font-bold font-heading mb-4">Get Exposure</h3>
                                <p className="text-white/50 text-lg leading-relaxed">
                                    Showcase your vibecoding projects to the community. Get feedback, share techniques, and grow your audience.
                                </p>
                            </div>

                            <div className="feature-card group">
                                <div className="feature-icon">🤝</div>
                                <h3 className="text-2xl font-bold font-heading mb-4">Build Together</h3>
                                <p className="text-white/50 text-lg leading-relaxed">
                                    Join a community of builders. Share knowledge, collaborate on projects, and learn from each other.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gradient Divider */}
                <div className="gradient-divider"></div>

                {/* Model Section */}
                <section id="model" className="section py-32 px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-24">
                            <span className="section-tag">The Model</span>
                            <h2 className="text-5xl md:text-6xl font-black font-heading mt-6 tracking-tight">
                                Fair & <span className="gradient-text">Transparent</span>
                            </h2>
                            <p className="text-white/50 mt-6 max-w-2xl mx-auto text-xl">
                                A community-driven model that rewards builders
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="model-card glass glow-border p-10">
                                <div className="model-number">01</div>
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-700 flex items-center justify-center mb-6 shadow-lg shadow-violet-500/30 text-2xl">
                                    🏢
                                </div>
                                <h3 className="text-2xl font-bold font-heading mb-4">Club Projects</h3>
                                <p className="text-white/50 text-lg leading-relaxed">
                                    Projects from the club. Anyone can take them on.
                                    <strong className="text-white block mt-2"> 80% to builder, 20% to club fund.</strong>
                                </p>
                            </div>

                            <div className="model-card glass glow-border p-10">
                                <div className="model-number">02</div>
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/30 text-2xl">
                                    💎
                                </div>
                                <h3 className="text-2xl font-bold font-heading mb-4">Your Projects</h3>
                                <p className="text-white/50 text-lg leading-relaxed">
                                    Working on your own idea?
                                    <strong className="text-white block mt-2">No equity. Keep 100% of what you build.</strong>
                                </p>
                            </div>

                            <div className="model-card glass glow-border p-10">
                                <div className="model-number">03</div>
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center mb-6 shadow-lg shadow-pink-500/30 text-2xl">
                                    ❤️
                                </div>
                                <h3 className="text-2xl font-bold font-heading mb-4">Community First</h3>
                                <p className="text-white/50 text-lg leading-relaxed">
                                    The club fund supports infrastructure and resources.
                                    <strong className="text-white block mt-2">Your success helps everyone.</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="section py-32 px-8">
                    <div className="max-w-5xl mx-auto">
                        <div className="glass p-16 rounded-[40px]">
                            <div className="grid grid-cols-3 gap-8 text-center">
                                <div className="group cursor-default">
                                    <div className="stat-value transition-transform duration-500 group-hover:scale-110">∞</div>
                                    <div className="text-white/40 mt-4 text-xl font-medium">Possibilities</div>
                                </div>
                                <div className="group cursor-default border-x border-white/10">
                                    <div className="stat-value transition-transform duration-500 group-hover:scale-110">1</div>
                                    <div className="text-white/40 mt-4 text-xl font-medium">Community</div>
                                </div>
                                <div className="group cursor-default">
                                    <div className="stat-value transition-transform duration-500 group-hover:scale-110">0</div>
                                    <div className="text-white/40 mt-4 text-xl font-medium">Limits</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gradient Divider */}
                <div className="gradient-divider"></div>

                {/* Tools Section */}
                <section className="section py-24 px-8">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl font-bold font-heading mb-3">
                            Built with the <span className="gradient-text">best tools</span>
                        </h2>
                        <p className="text-white/40 mb-12 text-lg">No-code, low-code, and AI-powered tools</p>

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
                <section className="section py-32 px-8">
                    <div className="max-w-5xl mx-auto">
                        <div className="glass glow-border p-16 md:p-20 text-center shimmer rounded-[48px]">
                            <h2 className="text-4xl md:text-5xl font-black font-heading mb-8 tracking-tight">
                                Ready to build something <span className="gradient-text">amazing</span>?
                            </h2>
                            <p className="text-white/50 mb-12 max-w-2xl mx-auto text-xl">
                                Join a community of builders turning ideas into reality.
                                No applications, no gatekeeping — just creation.
                            </p>
                            <div className="flex gap-6 justify-center flex-wrap">
                                <a href="/builder" className="btn-primary text-xl group">
                                    Start Building
                                    <svg className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </a>
                                <a href="mailto:hello@divisionzero.dev" className="btn-secondary text-xl">
                                    Get In Touch
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="py-20 px-8 border-t border-white/5">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-violet-500/30">
                                <span className="text-white text-lg font-black">D</span>
                            </div>
                            <span className="text-2xl font-black font-heading">
                                <span className="gradient-text">division</span>zero
                            </span>
                        </div>
                        <div className="flex gap-10 text-white/40">
                            <a href="#showcase" className="hover:text-white transition-colors font-medium">Projects</a>
                            <a href="#about" className="hover:text-white transition-colors font-medium">About</a>
                            <a href="#model" className="hover:text-white transition-colors font-medium">Model</a>
                            <a href="mailto:hello@divisionzero.dev" className="hover:text-white transition-colors font-medium">Contact</a>
                        </div>
                        <p className="text-white/30 font-medium">© 2024 divisionzero</p>
                    </div>
                </div>
            </footer>
        </>
    )
}
