"use client"

import { useLanguage } from './language-context'
import { Button } from '@/components/ui/button'
import { Phone, Mail, Linkedin, Download, Copy, Check, Calendar } from 'lucide-react'
import { useState } from 'react'

const MaltIcon = ({ className = "w-6 h-6 text-primary" }: { className?: string }) => (
  <img src="/malt.png" alt="Malt" className={className} />
)

const CollectiveIcon = ({ className = "w-6 h-6 text-primary" }: { className?: string }) => (
  <img src="/collective.png" alt="Collective" className={className} />
)

const contactInfo = [
  {
    icon: Phone,
    labelFr: 'Téléphone',
    labelEn: 'Phone',
    value: '07 88 79 99 65',
    href: 'tel:+33788799965',
    external: false
  },
  {
    icon: Mail,
    labelFr: 'Email',
    labelEn: 'Email',
    value: 'samueljeanbaptiste@hotmail.fr',
    href: 'mailto:samueljeanbaptiste@hotmail.fr',
    external: false
  },
  {
    icon: Linkedin,
    labelFr: 'LinkedIn',
    labelEn: 'LinkedIn',
    value: 'linkedin.com/in/samueljeanbaptiste',
    href: 'https://linkedin.com/in/samueljeanbaptiste',
    external: true
  },
  {
    icon: MaltIcon,
    labelFr: 'Malt',
    labelEn: 'Malt',
    value: 'malt.fr/profile/samueljeanbaptiste',
    href: 'https://www.malt.fr/profile/samueljeanbaptiste',
    external: true
  },
  {
    icon: Calendar,
    labelFr: 'Calendly',
    labelEn: 'Calendly',
    value: 'calendly.com/samueljb88/30min',
    href: 'https://calendly.com/samueljb88/30min',
    external: true
  },
  {
    icon: CollectiveIcon,
    labelFr: 'Collective',
    labelEn: 'Collective',
    value: 'collective.com/ton-profil',
    href: 'https://www.collective.work/profile/samuel-jean-baptiste',
    external: true
  }
]

export function ContactSection() {
  const { language, t } = useLanguage()
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <section id="contact" className="w-full py-20 md:py-32 bg-card">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-syne)] font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            {t('Travaillons ensemble', 'Let\'s work together')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t(
              'Disponible pour de nouvelles opportunités. N\'hésitez pas à me contacter.',
              'Available for new opportunities. Don\'t hesitate to contact me.'
            )}
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <div
                key={info.value}
                className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {language === 'fr' ? info.labelFr : info.labelEn}
                  </p>
                  <a
                    href={info.href}
                    target={info.external ? '_blank' : undefined}
                    rel={info.external ? 'noopener noreferrer' : undefined}
                    className="font-medium text-foreground hover:text-primary transition-colors break-all"
                  >
                    {info.value}
                  </a>
                  <button
                    onClick={() => copyToClipboard(info.value, index)}
                    className="mt-3 flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    {copiedIndex === index ? (
                      <>
                        <Check className="w-3 h-3" />
                        {t('Copié !', 'Copied!')}
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        {t('Copier', 'Copy')}
                      </>
                    )}
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="gap-2" asChild>
            <a href="/CV-Samuel-JEAN-BAPTISTE.pdf" download>
              <Download className="h-5 w-5" />
              {t('Télécharger mon CV', 'Download my CV')}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}