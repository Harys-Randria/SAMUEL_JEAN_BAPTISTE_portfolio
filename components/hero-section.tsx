"use client"

import { useLanguage } from './language-context'
import { Button } from '@/components/ui/button'
import { Download, ArrowDown, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'

const badges = {
  fr: ['Pilotage Maîtrisé', 'Engagement Tenu', 'Résultats Mesurables'],
  en: ['Controlled Management', 'Commitment Kept', 'Measurable Results']
}

const companies = ['Safran', 'Orange', 'Thales', 'BNP Paribas', 'Banque de France', 'Canon']

const testimonials = [
  {
    name: 'Steve DOHOU',
    role: 'Chef de projet IT senior',
    relation: { fr: 'Manager direct', en: 'Direct manager' },
    date: 'Mars 2026',
    text: {
      fr: "Je recommande vivement Samuel pour son professionnalisme, sa rigueur et sa capacité à piloter efficacement des projets IT complexes, notamment autour de l'ERP SAP, dans des environnements exigeants comme Safran.",
      en: "I highly recommend Samuel for his professionalism, rigor, and ability to effectively manage complex IT projects, particularly around SAP ERP, in demanding environments like Safran."
    }
  },
  {
    name: 'Hibi M.',
    role: 'Ingénieur de production DevOps',
    relation: { fr: 'Même équipe – Banque de France', en: 'Same team – Banque de France' },
    date: 'Janvier 2026',
    text: {
      fr: "J'ai eu le plaisir de travailler avec Samuel à la Banque de France. Sérieux, rigoureux et toujours à l'écoute, il est fiable et organisé, et n'hésite jamais à aider l'équipe. Un professionnel que je recommande sans hésitation.",
      en: "I had the pleasure of working with Samuel at Banque de France. Serious, rigorous, and always attentive, he is reliable and organized, and never hesitates to help the team. A professional I recommend without hesitation."
    }
  },
  {
    name: 'Alex Zelina',
    role: 'Service Delivery Manager / Incident & Change Manager',
    relation: { fr: 'Collaboration inter-équipes', en: 'Cross-team collaboration' },
    date: 'Janvier 2026',
    text: {
      fr: "Samuel est fiable, impliqué et proactif, avec un excellent relationnel et une grande capacité d'adaptation. Sa rigueur remarquable et son sens de l'organisation lui permettent d'être autonome et d'apporter une réelle valeur ajoutée en s'intégrant rapidement dans les équipes.",
      en: "Samuel is reliable, committed and proactive, with excellent interpersonal skills and great adaptability. His remarkable rigor and organizational sense make him autonomous and able to bring real added value while integrating quickly into teams."
    }
  },
  {
    name: 'Boubou Diallo',
    role: 'Responsable support front office – Ministère des Armées',
    relation: { fr: 'Même équipe', en: 'Same team' },
    date: 'Janvier 2026',
    text: {
      fr: "Je recommande Samuel pour son expérience en management d'équipe, sa solide aisance technique ainsi que ses qualités relationnelles exceptionnelles.",
      en: "I recommend Samuel for his team management experience, solid technical skills, and exceptional interpersonal qualities."
    }
  },
  {
    name: 'Abdelilah Bouchentouf',
    role: 'Chef de projet MOA / Business Analyst / Product Owner',
    relation: { fr: 'Collaboration transverse', en: 'Cross-functional collaboration' },
    date: 'Janvier 2026',
    text: {
      fr: "Je recommande Samuel pour sa rigueur analytique, sa capacité à comprendre rapidement des environnements complexes et son excellent sens de la communication. Sa capacité à structurer l'information, poser les bonnes questions et proposer des solutions orientées valeur est remarquable.",
      en: "I recommend Samuel for his analytical rigor, ability to quickly understand complex environments, and excellent communication skills. His ability to structure information, ask the right questions, and propose value-oriented solutions is remarkable."
    }
  }
]

function TestimonialsCarousel({ language }: { language: string }) {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState<'left' | 'right'>('right')

  const goTo = useCallback((index: number, dir: 'left' | 'right') => {
    if (isAnimating) return
    setDirection(dir)
    setIsAnimating(true)
    setTimeout(() => {
      setCurrent(index)
      setIsAnimating(false)
    }, 300)
  }, [isAnimating])

  const prev = () => goTo((current - 1 + testimonials.length) % testimonials.length, 'left')
  const next = () => goTo((current + 1) % testimonials.length, 'right')

  useEffect(() => {
    const interval = setInterval(() => {
      goTo((current + 1) % testimonials.length, 'right')
    }, 6000)
    return () => clearInterval(interval)
  }, [current, goTo])

  const t = testimonials[current]

  return (
    <div className="mt-12 relative">
      <div className="max-w-3xl mx-auto px-10">
        {/* Card */}
        <div
          className="relative bg-card border border-border rounded-2xl p-8 md:p-10 shadow-sm overflow-hidden transition-all duration-300"
          style={{
            opacity: isAnimating ? 0 : 1,
            transform: isAnimating
              ? `translateX(${direction === 'right' ? '-24px' : '24px'})`
              : 'translateX(0)',
            transition: 'opacity 0.3s ease, transform 0.3s ease'
          }}
        >
          {/* Quote icon */}
          <Quote className="absolute top-6 right-8 w-10 h-10 text-primary/10" />

          {/* Text */}
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-8 italic">
            "{language === 'fr' ? t.text.fr : t.text.en}"
          </p>

          {/* Author */}
          <div className="flex items-center gap-4">
            {/* Avatar initials */}
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <span className="text-primary font-bold text-sm">
                {t.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
              </span>
            </div>
            <div>
              <p className="font-semibold text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
              <p className="text-xs text-primary/70 mt-0.5">
                {language === 'fr' ? t.relation.fr : t.relation.en} · {t.date}
              </p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={prev}
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > current ? 'right' : 'left')}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? 'w-6 bg-primary' : 'w-1.5 bg-border hover:bg-muted-foreground'
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

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
          {/* Left Column */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-2">
              <h1 className="font-[family-name:var(--font-syne)] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-balance">
                <span className="block">SAMUEL</span>
                <span className="block text-primary">JEAN-BAPTISTE</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                {t('Chef de Projet IT', 'IT Project Manager')}
              </p>
            </div>

            <p className="text-xl md:text-2xl lg:text-3xl font-medium text-pretty">
              <span className="text-primary animate-cursor-blink">_</span>
              {t(
                'Je sécurise vos initiatives IT de bout en bout.',
                'I secure your IT initiatives end-to-end.'
              )}
            </p>

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
              <div className="absolute -top-4 -right-4 z-20 bg-primary text-primary-foreground px-4 py-2 rounded-full font-[family-name:var(--font-syne)] font-bold text-lg shadow-lg">
                +10 ans
              </div>
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

        {/* Company Logos Strip */}
        <div className="mt-16 md:mt-24 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            {t('Ils m\'ont fait confiance', 'They trusted me')}
          </p>
        </div>
      </div>

      {/* Infinite Marquee */}
      <div className="marquee-container marquee-mask w-full overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap">
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

      {/* Testimonials */}
      <div className="max-w-[1100px] mx-auto px-5 md:px-8 w-full pb-16 md:pb-24 mt-12">
        <p className="text-sm text-muted-foreground text-center mb-2">
          {t('Ce qu\'ils disent de moi', 'What they say about me')}
        </p>
        <TestimonialsCarousel language={language} />
      </div>
    </section>
  )
}