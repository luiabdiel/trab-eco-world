import { Poppins } from 'next/font/google'
import type { Metadata } from 'next'
import { Header } from '@/components'
import './globals.css'

const poppins = Poppins({
  weight: ['400', '600'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Eco World',
  description:
    'O objetivo principal deste projeto é criar uma plataforma de mapeamento de lixeiras que visa sensibilizar a população sobre a importância da destinação correta de resíduos sólidos',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
