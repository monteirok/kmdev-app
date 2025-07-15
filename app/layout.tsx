import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Karsten Monteiro | kmDev',
  description: 'Personal IT/software dev. portfolio website for Karsten Monteiro.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
