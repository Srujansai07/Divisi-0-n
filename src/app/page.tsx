export default function Home() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center px-6">
                <div className="max-w-4xl text-center">
                    <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6">
                        From <span className="gradient-text">Idea</span> to{' '}
                        <span className="gradient-text">Prototype</span>
                    </h1>
                    <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                        Your personal builder manager. We guide you step-by-step through
                        turning your idea into a working prototype with AI assistance.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <a href="/builder" className="btn-primary">
                            Start Building →
                        </a>
                        <a href="#about" className="btn-secondary">
                            Learn More
                        </a>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-accent text-sm font-semibold uppercase tracking-wider">
                            What We Are
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold font-heading mt-4">
                            Your <span className="gradient-text">Builder Manager</span>
                        </h2>
                        <p className="text-white/60 mt-4 max-w-2xl mx-auto">
                            divisionzero guides you from a raw idea to a live prototype.
                            Smart suggestions, step-by-step progress, and automated workflows.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="glass p-8">
                            <div className="text-primary text-4xl mb-4">💡</div>
                            <h3 className="text-xl font-bold font-heading mb-3">Smart Suggestions</h3>
                            <p className="text-white/60">
                                Don't know what to do? We suggest tools, tech stacks, and next steps based on your idea.
                            </p>
                        </div>

                        <div className="glass p-8">
                            <div className="text-primary text-4xl mb-4">✓</div>
                            <h3 className="text-xl font-bold font-heading mb-3">Step-by-Step</h3>
                            <p className="text-white/60">
                                Clear checkpoints and verification at each stage. Move forward only when ready.
                            </p>
                        </div>

                        <div className="glass p-8">
                            <div className="text-primary text-4xl mb-4">⚡</div>
                            <h3 className="text-xl font-bold font-heading mb-3">Automation</h3>
                            <p className="text-white/60">
                                PRD generation, tech recommendations, and more - we automate the boring parts.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="glass p-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                            Ready to build your idea?
                        </h2>
                        <p className="text-white/60 mb-8">
                            No coding experience required. Just bring your idea.
                        </p>
                        <a href="/builder" className="btn-primary inline-block">
                            Start Your Journey →
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 border-t border-white/10">
                <div className="max-w-6xl mx-auto text-center text-white/40">
                    <p>© 2024 divisionzero. All rights reserved.</p>
                </div>
            </footer>
        </main>
    )
}
