'use client'

import { useState } from 'react'
import Link from 'next/link'

type TrackType = 'SPEED' | 'PRODUCTION' | 'ENTERPRISE'
type BudgetTier = 'LOW' | 'MEDIUM' | 'HIGH'

const tracks = [
    {
        id: 'SPEED' as TrackType,
        name: 'Speed Track',
        emoji: '⚡',
        days: '7 days',
        budget: '<$50/mo',
        description: 'Perfect for MVPs and validation. Build fast with AI-powered tools. Ship your first version in a week.',
        tools: ['Bolt.new', 'v0.dev', 'Replit Agent'],
        color: 'from-amber-500 to-orange-600',
        glow: 'shadow-amber-500/30',
    },
    {
        id: 'PRODUCTION' as TrackType,
        name: 'Production Track',
        emoji: '🚀',
        days: '60 days',
        budget: '$50-500/mo',
        description: 'Build a production-ready app with proper architecture, testing, and scalable infrastructure.',
        tools: ['Cursor', 'Antigravity', 'Supabase'],
        color: 'from-violet-500 to-purple-600',
        glow: 'shadow-violet-500/30',
    },
    {
        id: 'ENTERPRISE' as TrackType,
        name: 'Enterprise Track',
        emoji: '🏢',
        days: '120 days',
        budget: '$500+/mo',
        description: 'Scale-ready architecture with enterprise features, compliance, security, and advanced infrastructure.',
        tools: ['Custom Stack', 'AWS/GCP', 'Terraform'],
        color: 'from-pink-500 to-rose-600',
        glow: 'shadow-pink-500/30',
    },
]

export default function Builder() {
    const [step, setStep] = useState(1)
    const [projectName, setProjectName] = useState('')
    const [description, setDescription] = useState('')
    const [selectedTrack, setSelectedTrack] = useState<TrackType | null>(null)
    const [selectedBudget, setSelectedBudget] = useState<BudgetTier | null>(null)
    const [isHovering, setIsHovering] = useState<string | null>(null)

    const handleCreateProject = () => {
        // TODO: Create project in database
        console.log({
            name: projectName,
            description,
            trackType: selectedTrack,
            budget: selectedBudget,
        })
        // Redirect to project page
        window.location.href = '/project/new'
    }

    return (
        <>
            {/* Floating Particles */}
            <div className="particles">
                {[...Array(8)].map((_, i) => (
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
                    <Link href="/" className="text-2xl font-black font-heading group flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-violet-500/30">
                            <span className="text-white text-lg font-black">D</span>
                        </div>
                        <span>
                            <span className="gradient-text">division</span>
                            <span className="text-white group-hover:text-cyan-400 transition-colors duration-500">zero</span>
                        </span>
                    </Link>
                </div>
            </nav>

            <main className="min-h-screen pt-32 pb-24 px-8 relative">
                {/* Background glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-violet-600/20 to-transparent rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-4xl mx-auto relative z-10">
                    {/* Back button */}
                    <Link href="/" className="inline-flex items-center gap-3 text-white/50 hover:text-white mb-12 transition-all group font-medium">
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all">
                            <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </div>
                        Back to Home
                    </Link>

                    {/* Progress indicator */}
                    <div className="flex items-center gap-3 mb-16">
                        {[1, 2, 3].map((s) => (
                            <div key={s} className="flex items-center">
                                <div
                                    className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-lg transition-all duration-500 ${s === step
                                        ? 'bg-gradient-to-br from-violet-600 to-cyan-500 text-white shadow-xl shadow-violet-500/40'
                                        : s < step
                                            ? 'bg-violet-600/20 text-violet-400 border-2 border-violet-500/40'
                                            : 'bg-white/5 text-white/30 border border-white/10'
                                        }`}
                                >
                                    {s < step ? (
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    ) : s}
                                </div>
                                {s < 3 && (
                                    <div
                                        className={`w-24 h-1.5 mx-4 rounded-full transition-all duration-500 ${s < step
                                            ? 'bg-gradient-to-r from-violet-600 to-cyan-500'
                                            : 'bg-white/10'
                                            }`}
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Step 1: Describe Your Idea */}
                    {step === 1 && (
                        <div className="glass glow-border p-12 rounded-[32px]">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-700 flex items-center justify-center shadow-lg shadow-violet-500/30 text-2xl">
                                    💡
                                </div>
                                <h1 className="text-4xl md:text-5xl font-black font-heading tracking-tight">
                                    Describe Your <span className="gradient-text">Idea</span>
                                </h1>
                            </div>
                            <p className="text-white/50 mb-12 text-xl ml-[72px]">What do you want to build?</p>

                            <div className="space-y-8">
                                <div>
                                    <label className="block text-sm font-bold mb-4 text-white/70 uppercase tracking-wider">Project Name</label>
                                    <input
                                        type="text"
                                        value={projectName}
                                        onChange={(e) => setProjectName(e.target.value)}
                                        placeholder="e.g., TaskFlow Pro"
                                        className="input-premium"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold mb-4 text-white/70 uppercase tracking-wider">What does it do?</label>
                                    <textarea
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        placeholder="Describe your app idea. What problem does it solve? Who is it for? What makes it unique?"
                                        rows={6}
                                        className="input-premium resize-none"
                                    />
                                </div>

                                <button
                                    onClick={() => setStep(2)}
                                    disabled={!projectName || !description}
                                    className="btn-primary w-full disabled:opacity-30 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none group text-xl"
                                >
                                    Continue
                                    <svg className="w-6 h-6 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 2: Choose Your Track */}
                    {step === 2 && (
                        <div>
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 text-2xl">
                                    🎯
                                </div>
                                <h1 className="text-4xl md:text-5xl font-black font-heading tracking-tight">
                                    Choose Your <span className="gradient-text">Track</span>
                                </h1>
                            </div>
                            <p className="text-white/50 mb-12 text-xl ml-[72px]">How fast do you want to build?</p>

                            <div className="grid gap-6">
                                {tracks.map((track) => (
                                    <button
                                        key={track.id}
                                        onClick={() => setSelectedTrack(track.id)}
                                        onMouseEnter={() => setIsHovering(track.id)}
                                        onMouseLeave={() => setIsHovering(null)}
                                        className={`glass glow-border p-8 text-left transition-all duration-500 rounded-[28px] ${selectedTrack === track.id
                                            ? 'border-violet-500 ring-2 ring-violet-500/30 bg-violet-600/10'
                                            : 'hover:border-white/20'
                                            }`}
                                    >
                                        <div className="flex items-start gap-6">
                                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${track.color} flex items-center justify-center shadow-xl ${track.glow} text-3xl transition-transform duration-500 ${isHovering === track.id ? 'scale-110 rotate-3' : ''}`}>
                                                {track.emoji}
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <h3 className="text-2xl font-bold font-heading">{track.name}</h3>
                                                    <span className="tag">{track.days}</span>
                                                    <span className="text-white/40 text-sm font-medium">{track.budget}</span>
                                                </div>
                                                <p className="text-white/50 mb-5 text-lg leading-relaxed">{track.description}</p>
                                                <div className="flex gap-3 flex-wrap">
                                                    {track.tools.map((tool) => (
                                                        <span key={tool} className="text-sm px-4 py-2 bg-white/5 rounded-xl text-white/50 border border-white/5 font-medium">
                                                            {tool}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            {selectedTrack === track.id && (
                                                <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                            )}
                                        </div>
                                    </button>
                                ))}
                            </div>

                            <div className="flex gap-5 mt-12">
                                <button onClick={() => setStep(1)} className="btn-secondary flex-1 group text-lg">
                                    <svg className="w-5 h-5 transition-transform group-hover:-translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                                    </svg>
                                    Back
                                </button>
                                <button
                                    onClick={() => setStep(3)}
                                    disabled={!selectedTrack}
                                    className="btn-primary flex-1 disabled:opacity-30 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none group text-lg"
                                >
                                    Continue
                                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Confirm & Start */}
                    {step === 3 && (
                        <div className="glass glow-border p-12 shimmer rounded-[32px]">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/30 text-2xl">
                                    ✨
                                </div>
                                <h1 className="text-4xl md:text-5xl font-black font-heading tracking-tight">
                                    Ready to <span className="gradient-text">Start</span>?
                                </h1>
                            </div>
                            <p className="text-white/50 mb-12 text-xl ml-[72px]">Review your project details</p>

                            <div className="space-y-4 mb-10">
                                <div className="flex justify-between items-center py-5 px-6 rounded-2xl bg-white/5 border border-white/5">
                                    <span className="text-white/50 font-medium">Project Name</span>
                                    <span className="font-bold text-xl">{projectName}</span>
                                </div>
                                <div className="flex justify-between items-center py-5 px-6 rounded-2xl bg-white/5 border border-white/5">
                                    <span className="text-white/50 font-medium">Track</span>
                                    <span className="font-bold text-xl flex items-center gap-3">
                                        <span className={`w-10 h-10 rounded-xl bg-gradient-to-br ${tracks.find((t) => t.id === selectedTrack)?.color} flex items-center justify-center shadow-lg`}>
                                            {tracks.find((t) => t.id === selectedTrack)?.emoji}
                                        </span>
                                        {tracks.find((t) => t.id === selectedTrack)?.name}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center py-5 px-6 rounded-2xl bg-white/5 border border-white/5">
                                    <span className="text-white/50 font-medium">Timeline</span>
                                    <span className="tag text-base">
                                        {tracks.find((t) => t.id === selectedTrack)?.days}
                                    </span>
                                </div>
                                <div className="py-5 px-6 rounded-2xl bg-white/5 border border-white/5">
                                    <span className="text-white/50 block mb-3 font-medium">Description</span>
                                    <p className="text-white/80 leading-relaxed text-lg">{description}</p>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-violet-600/15 to-cyan-600/10 border border-violet-500/30 rounded-3xl p-8 mb-10">
                                <div className="flex items-start gap-5">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center shadow-lg text-2xl">
                                        🎯
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-2">What happens next?</h4>
                                        <p className="text-white/60 text-lg leading-relaxed">
                                            We'll guide you through <strong className="text-white">15 phases</strong> from research to exit. Each phase has
                                            clear steps, tool recommendations, and verification checkpoints. Let's build something amazing!
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-5">
                                <button onClick={() => setStep(2)} className="btn-secondary flex-1 group text-lg">
                                    <svg className="w-5 h-5 transition-transform group-hover:-translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                                    </svg>
                                    Back
                                </button>
                                <button onClick={handleCreateProject} className="btn-primary flex-1 group text-lg">
                                    Start Building
                                    <span className="text-2xl transition-transform duration-500 group-hover:translate-x-1 group-hover:scale-110">🚀</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </>
    )
}
