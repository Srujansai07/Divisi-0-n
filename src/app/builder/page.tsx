export default function Builder() {
    return (
        <main className="min-h-screen py-16 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="mb-12">
                    <a href="/" className="text-white/60 hover:text-white transition-colors">
                        ← Back to Home
                    </a>
                </div>

                <div className="glass p-12">
                    <h1 className="text-4xl font-bold font-heading mb-6 text-center">
                        Start Your <span className="gradient-text">Journey</span>
                    </h1>

                    <p className="text-white/60 text-center mb-12">
                        Tell us about your idea and we'll guide you through building it.
                    </p>

                    {/* Step 1: Idea Input */}
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-semibold mb-2 text-white/80">
                                What's your app idea?
                            </label>
                            <textarea
                                className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder-white/40 focus:outline-none focus:border-primary/50 min-h-[120px]"
                                placeholder="Describe your idea in a few sentences. What problem does it solve? Who is it for?"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2 text-white/80">
                                What type of app is this?
                            </label>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {['Web App', 'Mobile App', 'SaaS', 'E-commerce', 'Portfolio', 'Other'].map((type) => (
                                    <button
                                        key={type}
                                        className="border border-white/10 rounded-lg p-3 text-center text-white/60 hover:bg-white/5 hover:border-primary/50 transition-all"
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="pt-8 text-center">
                            <button className="btn-primary text-lg px-12">
                                Generate PRD →
                            </button>
                            <p className="text-white/40 text-sm mt-4">
                                We'll create a Product Requirements Document based on your idea
                            </p>
                        </div>
                    </div>
                </div>

                {/* Progress Steps Preview */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold font-heading mb-8 text-center">
                        Your Journey
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            { num: 1, title: 'Idea', active: true },
                            { num: 2, title: 'PRD', active: false },
                            { num: 3, title: 'Tech Stack', active: false },
                            { num: 4, title: 'Build', active: false },
                            { num: 5, title: 'Launch', active: false },
                        ].map((step) => (
                            <div
                                key={step.num}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full ${step.active
                                        ? 'bg-primary/20 border border-primary/50'
                                        : 'bg-white/5 border border-white/10'
                                    }`}
                            >
                                <span className={`font-bold ${step.active ? 'text-primary' : 'text-white/40'}`}>
                                    {step.num}
                                </span>
                                <span className={step.active ? 'text-white' : 'text-white/40'}>
                                    {step.title}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}
