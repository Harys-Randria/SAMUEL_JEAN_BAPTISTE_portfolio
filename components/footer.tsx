"use client"

import { useLanguage } from './language-context'

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full py-8 border-t border-border">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Name and Tagline */}
          <div className="flex items-center gap-2">
            <span className="font-[family-name:var(--font-syne)] font-bold text-lg">
              Samuel JEAN-BAPTISTE
            </span>
            <span className="text-primary animate-cursor-blink">_</span>
          </div>

          {/* Tagline */}
          <p className="text-sm text-muted-foreground text-center">
            {t(
              'Chef de Projet IT | Infrastructure & Transformation Digitale',
              'IT Project Manager | Infrastructure & Digital Transformation'
            )}
          </p>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Samuel JEAN-BAPTISTE
          </p>
        </div>
      </div>
    </footer>
  )
}
