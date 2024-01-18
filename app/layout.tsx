import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '밸런스 게임 with MBTI',
  description: 'MBTI별 밸런스 게임',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=' min-h-screen'>
          {children}
        </div>
      </body>
    </html>
  )
}
