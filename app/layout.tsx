import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import './globals.css'

export const revalidate = 5

export const metadata: Metadata = {
  title: 'Next.js Image Gallery',
  description: 'Mario followong NetNinja tutorial',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="max-w-6xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  )
}
