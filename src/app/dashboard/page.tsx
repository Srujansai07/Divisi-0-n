'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

// Mock data for now - will be replaced with real data from Supabase
const mockProjects = [
    {
        id: '1',
        name: 'TaskFlow Pro',
        description: 'AI-powered task management app',
        currentPhase: 2,
        currentStep: 3,
        trackType: 'SPEED',
        progress: 15,
        createdAt: new Date().toISOString(),
    },
]

export default function Dashboard() {
    const [projects, setProjects] = useState(mockProjects)

    return (
        <main className="min-h-screen pt-24 pb-16 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <h1 className="text-4xl font-bold font-heading mb-2">
                            Your <span className="gradient-text">Projects</span>
                        </h1>
                        <p className="text-white/50">Track your journey from idea to exit</p>
                    </div>
                    <Link
                        href="/builder"
                        className="btn-primary"
                    >
                        + New Project
                    </Link>
                </div>

                {/* Projects Grid */}
                {projects.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project) => (
                            <Link
                                key={project.id}
                                href={`/project/${project.id}`}
                                className="glass p-6 hover:border-primary/50 transition-all group"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-xl font-bold font-heading group-hover:text-primary transition-colors">
                                        {project.name}
                                    </h3>
                                    <span className="tag">{project.trackType}</span>
                                </div>
                                <p className="text-white/50 text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                {/* Progress */}
                                <div className="mb-4">
                                    <div className="flex items-center justify-between text-sm mb-2">
                                        <span className="text-white/60">Phase {project.currentPhase}</span>
                                        <span className="text-primary">{project.progress}%</span>
                                    </div>
                                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all"
                                            style={{ width: `${project.progress}%` }}
                                        />
                                    </div>
                                </div>

                                <div className="text-white/40 text-xs">
                                    Created {new Date(project.createdAt).toLocaleDateString()}
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    /* Empty State */
                    <div className="glass p-12 text-center">
                        <div className="text-6xl mb-4">🚀</div>
                        <h2 className="text-2xl font-bold font-heading mb-2">No projects yet</h2>
                        <p className="text-white/50 mb-6">Start your first journey from idea to exit</p>
                        <Link href="/builder" className="btn-primary inline-block">
                            Create Your First Project
                        </Link>
                    </div>
                )}

                {/* Quick Stats */}
                <div className="mt-12 grid grid-cols-3 gap-6">
                    <div className="glass p-6 text-center">
                        <div className="text-3xl font-bold gradient-text">{projects.length}</div>
                        <div className="text-white/50 text-sm">Active Projects</div>
                    </div>
                    <div className="glass p-6 text-center">
                        <div className="text-3xl font-bold gradient-text">Phase 2</div>
                        <div className="text-white/50 text-sm">Furthest Progress</div>
                    </div>
                    <div className="glass p-6 text-center">
                        <div className="text-3xl font-bold gradient-text">45</div>
                        <div className="text-white/50 text-sm">Steps Completed</div>
                    </div>
                </div>
            </div>
        </main>
    )
}
