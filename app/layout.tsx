import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bento Box Next.js Component',
  description: 'Bento Box Next.js Component.',
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
