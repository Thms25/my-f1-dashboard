import type { Metadata } from 'next'
import './globals.scss'
import Head from 'next/head'
import Sidebar from '@/components/layout/Sidebar'
import Navbar from '@/components/layout/Navbar'

export const metadata: Metadata = {
  title: 'F1 Dashboard',
  description: 'A dashboard for Formula 1 fans',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="">
      <body>
        <Navbar />
        <Sidebar />
        {children}
      </body>
    </html>
  )
}
