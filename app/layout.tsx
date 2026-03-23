import type { Metadata } from 'next'
import { DM_Sans, Syne, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dm-sans'
})

const syne = Syne({ 
  subsets: ["latin"],
  variable: '--font-syne'
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains-mono'
})

export const metadata: Metadata = {
  title: 'Samuel JEAN-BAPTISTE | Chef de Projet IT',
  description: 'Chef de Projet IT avec +10 ans d\'expérience en pilotage de projets d\'infrastructure critique et transformation digitale. Expert AWS, ITIL, Agile.',
  keywords: ['Chef de Projet IT', 'Infrastructure', 'Transformation Digitale', 'AWS', 'ITIL', 'Agile', 'Cloud Migration'],
  authors: [{ name: 'Samuel JEAN-BAPTISTE' }],

  icons: '/images/samuel-jb.png',  

  openGraph: {
    title: 'Samuel JEAN-BAPTISTE | Chef de Projet IT',
    description: 'Je sécurise vos initiatives IT de bout en bout.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${syne.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}