"use client"

import { useLanguage } from './language-context'
import { GraduationCap, Award } from 'lucide-react'

const education = [
  {
    institution: 'Institut F2I',
    degreeFr: 'Master Administrateur Systèmes et Réseaux',
    degreeEn: 'Master in Systems and Networks Administration',
    dates: '2014 - 2016',
    location: 'Paris Île-de-France'
  },
  {
    institution: 'CFA INSTA',
    degreeFr: 'BTS SIO - Option SISR (Solutions d\'Infrastructure, Systèmes et Réseaux)',
    degreeEn: 'BTS SIO - SISR Option (Infrastructure Solutions, Systems and Networks)',
    dates: '2012 - 2014',
    location: 'Paris Île-de-France'
  }
]

const certifications = [
  {
    nameFr: 'ITIL v4 Foundation',
    nameEn: 'ITIL v4 Foundation',
    statusFr: 'En cours',
    statusEn: 'In progress'
  },
  {
    nameFr: 'PRINCE2 Foundation',
    nameEn: 'PRINCE2 Foundation',
    statusFr: 'En cours',
    statusEn: 'In progress'
  }
]

const languages = [
  {
    lang: 'Français',
    langEn: 'French',
    levelFr: 'Langue maternelle',
    levelEn: 'Native',
    percent: 100
  },
  {
    lang: 'Anglais',
    langEn: 'English',
    levelFr: 'Courant (Pilotage équipes offshore, COPIL internationaux)',
    levelEn: 'Fluent (Offshore team management, International steering committees)',
    percent: 85
  }
]

export function EducationSection() {
  const { language, t } = useLanguage()

  return (
    <section id="education" className="w-full py-20 md:py-32">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-syne)] font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            {t('Formation', 'Education')}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <div className="space-y-6">
            <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              {t('Diplômes', 'Degrees')}
            </h3>
            <div className="space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.institution}
                  className="p-6 rounded-2xl bg-card border border-border"
                >
                  <h4 className="font-[family-name:var(--font-syne)] font-semibold text-lg">
                    {edu.institution}
                  </h4>
                  <p className="text-muted-foreground mt-1">
                    {language === 'fr' ? edu.degreeFr : edu.degreeEn}
                  </p>
                  <p className="font-[family-name:var(--font-mono)] text-sm text-muted-foreground mt-2">
                    {edu.dates} • {edu.location}
                  </p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl flex items-center gap-2 pt-6">
              <Award className="w-6 h-6 text-primary" />
              {t('Certifications', 'Certifications')}
            </h3>
            <div className="flex flex-wrap gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.nameFr}
                  className="px-4 py-3 rounded-xl bg-card border border-border flex items-center gap-3"
                >
                  <span className="font-medium">
                    {language === 'fr' ? cert.nameFr : cert.nameEn}
                  </span>
                  <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-primary/10 text-primary">
                    {language === 'fr' ? cert.statusFr : cert.statusEn}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="space-y-6">
            <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl">
              {t('Langues', 'Languages')}
            </h3>
            <div className="space-y-6">
              {languages.map((lang) => (
                <div key={lang.lang} className="p-6 rounded-2xl bg-card border border-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-[family-name:var(--font-syne)] font-semibold text-lg flex items-center gap-2">
                      {lang.lang === 'Français' ? '🇫🇷' : '🇬🇧'}
                      {language === 'fr' ? lang.lang : lang.langEn}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {lang.percent}%
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {language === 'fr' ? lang.levelFr : lang.levelEn}
                  </p>
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-1000"
                      style={{ width: `${lang.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
