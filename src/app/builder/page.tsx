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
        description: 'Perfect for MVPs and validation. Build fast with AI-powered tools.',
        tools: ['Bolt.new', 'v0.dev', 'Replit Agent'],
        color: 'from-yellow-500 to-orange-500',
    },
    {
        id: 'PRODUCTION' as TrackType,
        name: 'Production Track',
        emoji: '🚀',
        days: '60 days',
        budget: '$50-500/mo',
        description: 'Build a production-ready app with proper architecture and testing.',
        tools: ['Cursor', 'Antigravity', 'Supabase'],
        color: 'from-primary to-accent',
    },
    {
        id: 'ENTERPRISE' as TrackType,
        name: 'Enterprise Track',
        emoji: '🏢',
        days: '120 days',
        budget: '$500+/mo',
        description: 'Scale-ready architecture with enterprise features and compliance.',
        tools: ['Custom Stack', 'AWS/GCP', 'Terraform'],
        color: 'from-purple-600 to-pink-600',
    },
]

export default function Builder() {
    const [step, setStep] = useState(1)
    const [projectName, setProjectName] = useState('')
    const [description, setDescription] = useState('')
    const [selectedTrack, setSelectedTrack] = useState<TrackType | null>(null)
    const [selectedBudget, setSelectedBudget] = useState<BudgetTier | null>(null)

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
            {/* Navigation */}
            <nav className="nav py-4 px-6">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link href="/" className="text-2xl font-bold font-heading group">
                        <span className="gradient-text">division</span>
                        <span className="text-white group-hover:text-accent transition-colors duration-300">zero</span>
                    </Link>
                </div>
            </nav>

            <main className="min-h-screen pt-28 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Back button */}
                    <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-10 transition-colors group">
                        <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Home
                    </Link>

                    {/* Progress indicator */}
                    <div className="flex items-center gap-4 mb-14">
                        {[1, 2, 3].map((s) => (
                            <div key={s} className="flex items-center">
                                <div
                                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${s === step
                                        ? 'bg-gradient-to-br from-primary to-accent text-white shadow-glow-primary'
                                        : s < step
                                            ? 'bg-primary/20 text-primary border-2 border-primary/40'
                                            : 'bg-surface text-white/40 border border-white/10'
                                        }`}
                                >
                                    {s < step ? (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    ) : s}
                                </div>
                                {s < 3 && (
                                    <div
                                        className={`w-24 h-1 mx-3 rounded-full transition-all duration-300 ${s < step
                                            ? 'bg-gradient-to-r from-primary to-accent'
                                            : 'bg-white/10'
                                            }`}
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Step 1: Describe Your Idea */}
                    {step === 1 && (
                        <div className="glass glow-border p-10">
                            <h1 className="text-4xl font-bold font-heading mb-3">
                                Describe Your <span className="gradient-text">Idea</span>
                            </h1>
                            <p className="text-white/50 mb-10 text-lg">What do you want to build?</p>

                            <div className="space-y-8">
                                <div>
                                    <label className="block text-sm font-semibold mb-3 text-white/80">Project Name</label>
                                    <input
                                        type="text"
                                        value={projectName}
                                        onChange={(e) => setProjectName(e.target.value)}
                                        placeholder="e.g., TaskFlow Pro"
                                        className="w-full bg-surface border border-white/10 rounded-xl p-4 text-white placeholder-white/30 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-3 text-white/80">What does it do?</label>
                                    <textarea
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        placeholder="Describe your app idea. What problem does it solve? Who is it for?"
                                        rows={5}
                                        className="w-full bg-surface border border-white/10 rounded-xl p-4 text-white placeholder-white/30 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                                    />
                                </div>

                                <button
                                    onClick={() => setStep(2)}
                                    disabled={!projectName || !description}
                                    className="btn-primary w-full disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none group"
                                >
                                    Continue
                                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 2: Choose Your Track */}
                    {step === 2 && (
                        <div>
                            <h1 className="text-4xl font-bold font-heading mb-3">
                                Choose Your <span className="gradient-text">Track</span>
                            </h1>
                            <p className="text-white/50 mb-10 text-lg">How fast do you want to build?</p>

                            <div className="grid gap-6">
                                {tracks.map((track) => (
                                    <button
                                        key={track.id}
                                        onClick={() => setSelectedTrack(track.id)}
                                        className={`glass glow-border p-7 text-left transition-all duration-300 ${selectedTrack === track.id
                                            ? 'border-primary ring-2 ring-primary/30 bg-primary/5'
                                            : 'hover:border-white/20 hover:bg-surface-hover'
                                            }`}
                                    >
                                        <div className="flex items-start gap-5">
                                            <div className="text-5xl transition-transform duration-300 hover:scale-110">{track.emoji}</div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <h3 className="text-xl font-bold font-heading">{track.name}</h3>
                                                    <span className="tag">{track.days}</span>
                                                    <span className="text-white/40 text-sm">{track.budget}</span>
                                                </div>
                                                <p className="text-white/60 mb-4">{track.description}</p>
                                                <div className="flex gap-2 flex-wrap">
                                                    {track.tools.map((tool) => (
                                                        <span key={tool} className="text-xs px-3 py-1.5 bg-white/5 rounded-lg text-white/50 border border-white/5">
                                                            {tool}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            {selectedTrack === track.id && (
                                                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                            )}
                                        </div>
                                    </button>
                                ))}
                            </div>

                            <div className="flex gap-5 mt-10">
                                <button onClick={() => setStep(1)} className="btn-secondary flex-1 group">
                                    <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                    Back
                                </button>
                                <button
                                    onClick={() => setStep(3)}
                                    disabled={!selectedTrack}
                                    className="btn-primary flex-1 disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none group"
                                >
                                    Continue
                                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Confirm & Start */}
                    {step === 3 && (
                        <div className="glass glow-border p-10 shimmer">
                            <h1 className="text-4xl font-bold font-heading mb-3">
                                Ready to <span className="gradient-text">Start</span>?
                            </h1>
                            <p className="text-white/50 mb-10 text-lg">Review your project details</p>

                            <div className="space-y-5 mb-10">
                                <div className="flex justify-between py-4 border-b border-white/10">
                                    <span className="text-white/60">Project Name</span>
                                    <span className="font-semibold text-lg">{projectName}</span>
                                </div>
                                <div className="flex justify-between py-4 border-b border-white/10">
                                    <span className="text-white/60">Track</span>
                                    <span className="font-semibold text-lg flex items-center gap-2">
                                        {tracks.find((t) => t.id === selectedTrack)?.emoji}
                                        {tracks.find((t) => t.id === selectedTrack)?.name}
                                    </span>
                                </div>
                                <div className="flex justify-between py-4 border-b border-white/10">
                                    <span className="text-white/60">Timeline</span>
                                    <span className="font-semibold tag">
                                        {tracks.find((t) => t.id === selectedTrack)?.days}
                                    </span>
                                </div>
                                <div className="py-4">
                                    <span className="text-white/60 block mb-3">Description</span>
                                    <p className="text-white/80 leading-relaxed">{description}</p>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 rounded-2xl p-6 mb-10">
                                <div className="flex items-start gap-4">
                                    <span className="text-3xl">🎯</span>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">What happens next?</h4>
                                        <p className="text-white/60">
                                            We'll guide you through 15 phases from research to exit. Each phase has
                                            clear steps, tool recommendations, and verification checkpoints.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-5">
                                <button onClick={() => setStep(2)} className="btn-secondary flex-1 group">
                                    <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                    Back
                                </button>
                                <button onClick={handleCreateProject} className="btn-primary flex-1 group">
                                    Start Building
                                    <span className="text-xl transition-transform group-hover:translate-x-1">🚀</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </>
    )
}
