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
        <main className="min-h-screen pt-24 pb-16 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Back button */}
                <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors">
                    ← Back to Home
                </Link>

                {/* Progress indicator */}
                <div className="flex items-center gap-4 mb-12">
                    {[1, 2, 3].map((s) => (
                        <div key={s} className="flex items-center">
                            <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${s === step
                                        ? 'bg-primary text-white'
                                        : s < step
                                            ? 'bg-primary/20 text-primary'
                                            : 'bg-white/10 text-white/40'
                                    }`}
                            >
                                {s < step ? '✓' : s}
                            </div>
                            {s < 3 && (
                                <div
                                    className={`w-20 h-1 mx-2 rounded ${s < step ? 'bg-primary' : 'bg-white/10'
                                        }`}
                                />
                            )}
                        </div>
                    ))}
                </div>

                {/* Step 1: Describe Your Idea */}
                {step === 1 && (
                    <div className="glass p-8">
                        <h1 className="text-3xl font-bold font-heading mb-2">
                            Describe Your <span className="gradient-text">Idea</span>
                        </h1>
                        <p className="text-white/50 mb-8">What do you want to build?</p>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold mb-2">Project Name</label>
                                <input
                                    type="text"
                                    value={projectName}
                                    onChange={(e) => setProjectName(e.target.value)}
                                    placeholder="e.g., TaskFlow Pro"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder-white/40 focus:outline-none focus:border-primary/50 transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">What does it do?</label>
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Describe your app idea. What problem does it solve? Who is it for?"
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder-white/40 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                                />
                            </div>

                            <button
                                onClick={() => setStep(2)}
                                disabled={!projectName || !description}
                                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Continue →
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 2: Choose Your Track */}
                {step === 2 && (
                    <div>
                        <h1 className="text-3xl font-bold font-heading mb-2">
                            Choose Your <span className="gradient-text">Track</span>
                        </h1>
                        <p className="text-white/50 mb-8">How fast do you want to build?</p>

                        <div className="grid gap-6">
                            {tracks.map((track) => (
                                <button
                                    key={track.id}
                                    onClick={() => setSelectedTrack(track.id)}
                                    className={`glass p-6 text-left transition-all ${selectedTrack === track.id
                                            ? 'border-primary ring-2 ring-primary/20'
                                            : 'hover:border-white/20'
                                        }`}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="text-4xl">{track.emoji}</div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="text-xl font-bold font-heading">{track.name}</h3>
                                                <span className="tag">{track.days}</span>
                                                <span className="text-white/40 text-sm">{track.budget}</span>
                                            </div>
                                            <p className="text-white/60 mb-3">{track.description}</p>
                                            <div className="flex gap-2">
                                                {track.tools.map((tool) => (
                                                    <span key={tool} className="text-xs px-2 py-1 bg-white/5 rounded text-white/50">
                                                        {tool}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        {selectedTrack === track.id && (
                                            <div className="text-primary text-2xl">✓</div>
                                        )}
                                    </div>
                                </button>
                            ))}
                        </div>

                        <div className="flex gap-4 mt-8">
                            <button onClick={() => setStep(1)} className="btn-secondary flex-1">
                                ← Back
                            </button>
                            <button
                                onClick={() => setStep(3)}
                                disabled={!selectedTrack}
                                className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Continue →
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 3: Confirm & Start */}
                {step === 3 && (
                    <div className="glass p-8">
                        <h1 className="text-3xl font-bold font-heading mb-2">
                            Ready to <span className="gradient-text">Start</span>?
                        </h1>
                        <p className="text-white/50 mb-8">Review your project details</p>

                        <div className="space-y-6 mb-8">
                            <div className="flex justify-between py-3 border-b border-white/10">
                                <span className="text-white/60">Project Name</span>
                                <span className="font-semibold">{projectName}</span>
                            </div>
                            <div className="flex justify-between py-3 border-b border-white/10">
                                <span className="text-white/60">Track</span>
                                <span className="font-semibold">
                                    {tracks.find((t) => t.id === selectedTrack)?.name}
                                </span>
                            </div>
                            <div className="flex justify-between py-3 border-b border-white/10">
                                <span className="text-white/60">Timeline</span>
                                <span className="font-semibold">
                                    {tracks.find((t) => t.id === selectedTrack)?.days}
                                </span>
                            </div>
                            <div className="py-3">
                                <span className="text-white/60 block mb-2">Description</span>
                                <p className="text-white/80">{description}</p>
                            </div>
                        </div>

                        <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mb-8">
                            <div className="flex items-start gap-3">
                                <span className="text-2xl">🎯</span>
                                <div>
                                    <h4 className="font-semibold mb-1">What happens next?</h4>
                                    <p className="text-white/60 text-sm">
                                        We'll guide you through 15 phases from research to exit. Each phase has
                                        clear steps, tool recommendations, and verification checkpoints.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <button onClick={() => setStep(2)} className="btn-secondary flex-1">
                                ← Back
                            </button>
                            <button onClick={handleCreateProject} className="btn-primary flex-1">
                                Start Building 🚀
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </main>
    )
}
