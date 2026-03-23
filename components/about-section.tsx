"use client"

import { useLanguage } from './language-context'
import { useInView } from '@/hooks/use-in-view'
import { useEffect, useState } from 'react'

const stats = [
  { value: 10, suffix: '+', labelFr: 'ans d\'expérience', labelEn: 'years experience' },
  { value: 50, suffix: '+', labelFr: 'apps migrées AWS', labelEn: 'apps migrated to AWS' },
  { value: 300, suffix: '+', labelFr: 'postes déployés', labelEn: 'workstations deployed' },
]

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <span className="font-[family-name:var(--font-syne)] font-bold text-4xl md:text-5xl text-primary">
      {count}{suffix}
    </span>
  )
}

export function AboutSection() {
  const { language, t } = useLanguage()
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <section id="about" className="w-full py-20 md:py-32 bg-secondary/30">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Statement */}
          <div className="space-y-6">
            <h2 className="font-[family-name:var(--font-syne)] font-bold text-3xl md:text-4xl lg:text-5xl text-balance">
              {t('À Propos', 'About')}
            </h2>
            <p className="text-xl md:text-2xl text-primary font-medium leading-relaxed">
              {t(
                'Expert en pilotage de projets d\'infrastructure critique et transformation digitale',
                'Expert in critical infrastructure project management and digital transformation'
              )}
            </p>
          </div>

          {/* Right - Description */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">
              {t(
                'Chef de Projet IT avec +10 ans d\'expérience dans le pilotage de projets d\'infrastructure critique et de transformation digitale au sein d\'environnements grands comptes (Safran, Thales, OBS, Banque de France, BNP Paribas). Expert en coordination d\'équipes pluridisciplinaires, gestion de projets de migration cloud (AWS), modernisation d\'infrastructures IT et déploiement Digital Workplace (Microsoft 365, SAP).',
                'IT Project Manager with +10 years of experience in managing critical infrastructure projects and digital transformation within enterprise environments (Safran, Thales, OBS, Banque de France, BNP Paribas). Expert in coordinating cross-functional teams, cloud migration projects (AWS), IT infrastructure modernization and Digital Workplace deployment (Microsoft 365, SAP).'
              )}
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {t(
                'Maîtrise complète du cycle de vie projet : cadrage, planification, suivi du budget, animation COPIL/COPROJ, pilotage MOE/MOA, conduite du changement et delivery. Expérience confirmée en gestion des parties prenantes, coordination d\'équipes offshore et animation de comités de pilotage en environnements complexes et exigeants.',
                'Complete mastery of the project lifecycle: scoping, planning, budget monitoring, COPIL/COPROJ facilitation, MOE/MOA management, change management and delivery. Proven experience in stakeholder management, offshore team coordination and steering committee facilitation in complex and demanding environments.'
              )}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div ref={ref} className="grid sm:grid-cols-3 gap-8 mt-16 md:mt-24">
          {stats.map((stat) => (
            <div
              key={stat.labelFr}
              className="text-center p-8 rounded-2xl bg-card border border-border"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
              <p className="mt-2 text-muted-foreground">
                {language === 'fr' ? stat.labelFr : stat.labelEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
