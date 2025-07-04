import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '404Factory',
  description: 'Created by 404Factory\' creator',
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
