import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'divisionzero - Idea to Prototype',
    description: 'Turn your idea into a working prototype. Guided step-by-step with AI assistance.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="antialiased">
                {children}
            </body>
        </html>
    )
}
