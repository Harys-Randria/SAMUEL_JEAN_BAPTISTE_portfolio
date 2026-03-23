"use client"

import { useLanguage } from './language-context'
import { Button } from '@/components/ui/button'
import { Download, ArrowDown } from 'lucide-react'
import Image from 'next/image'

const badges = {
  fr: ['Pilotage Maîtrisé', 'Engagement Tenu', 'Résultats Mesurables'],
  en: ['Controlled Management', 'Commitment Kept', 'Measurable Results']
}

const companies = ['Safran', 'Orange', 'Thales', 'BNP Paribas', 'Banque de France', 'Canon']

export function HeroSection() {
  const { language, t } = useLanguage()
  const badgeList = language === 'fr' ? badges.fr : badges.en

  return (
    <section className="w-full min-h-screen relative flex flex-col justify-center pt-16 overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-12 md:py-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 md:space-y-8">
            {/* Name */}
            <div className="space-y-2">
              <h1 className="font-[family-name:var(--font-syne)] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-balance">
                <span className="block">SAMUEL</span>
                <span className="block text-primary">JEAN-BAPTISTE</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                {t('Chef de Projet IT', 'IT Project Manager')}
              </p>
            </div>

            {/* Tagline */}
            <p className="text-xl md:text-2xl lg:text-3xl font-medium text-pretty">
              <span className="text-primary animate-cursor-blink">_</span>
              {t(
                'Je sécurise vos initiatives IT de bout en bout.',
                'I secure your IT initiatives end-to-end.'
              )}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              {badgeList.map((badge) => (
                <span
                  key={badge}
                  className="px-4 py-2 border border-primary/50 rounded-full text-sm font-medium text-primary bg-primary/5"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2" asChild>
                <a href="#experience">
                  {t('Voir mes projets', 'View my projects')}
                  <ArrowDown className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="/CV-Samuel-JEAN-BAPTISTE.pdf" download>
                  <Download className="h-4 w-4" />
                  {t('Télécharger CV', 'Download CV')}
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column - Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* +10 ans Badge */}
              <div className="absolute -top-4 -right-4 z-20 bg-primary text-primary-foreground px-4 py-2 rounded-full font-[family-name:var(--font-syne)] font-bold text-lg shadow-lg">
                +10 ans
              </div>
              
              {/* Photo with coral ring */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-primary/50 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-background">
                    <Image
                      src="/images/samuel-jb.png"
                      alt="Samuel JEAN-BAPTISTE"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover object-top"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Logos Strip Title */}
        <div className="mt-16 md:mt-24 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center mb-6">
            {t('Ils m\'ont fait confiance', 'They trusted me')}
          </p>
        </div>
      </div>

      {/* Infinite Marquee - Full Width */}
      <div className="marquee-container marquee-mask w-full overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap">
          {/* Duplicate logos for seamless loop */}
          {[...companies, ...companies].map((company, index) => (
            <span
              key={`${company}-${index}`}
              className="mx-8 md:mx-12 text-muted-foreground/40 font-medium text-lg md:text-xl hover:text-muted-foreground transition-colors cursor-default"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
