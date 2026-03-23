"use client"

import { useLanguage } from './language-context'
import { Briefcase, Settings, Wrench, Cloud, Monitor, Globe, Building2, BarChart3 } from 'lucide-react'

const skillCategories = [
  {
    icon: Briefcase,
    titleFr: 'Pilotage de Projet',
    titleEn: 'Project Management',
    skills: ['COPIL/COPROJ', 'Budget & Planning', 'KPI/SLA', 'MOE/MOA', 'Risk Management', 'Reporting']
  },
  {
    icon: Settings,
    titleFr: 'Méthodologies',
    titleEn: 'Methodologies',
    skills: ['ITIL v4', 'PRINCE2', 'Agile', 'SCRUM', 'DevOps']
  },
  {
    icon: Wrench,
    titleFr: 'Outils',
    titleEn: 'Tools',
    skills: ['Jira', 'ServiceNow', 'MS Project', 'ITSM', 'MS365', 'Confluence']
  },
  {
    icon: Cloud,
    titleFr: 'Cloud & Migration',
    titleEn: 'Cloud & Migration',
    skills: ['AWS EC2/RDS', 'VMware', 'Cloud Migration', 'Zerto', 'Architecture']
  },
  {
    icon: Monitor,
    titleFr: 'Systèmes',
    titleEn: 'Systems',
    skills: ['Windows Server', 'Active Directory', 'Linux RedHat', 'SCCM', 'GPO']
  },
  {
    icon: Globe,
    titleFr: 'Réseaux',
    titleEn: 'Networks',
    skills: ['Cisco Wi-Fi', 'LAN/WAN', 'VLAN', 'VPN', 'Firewall']
  },
  {
    icon: Building2,
    titleFr: 'Digital Workplace',
    titleEn: 'Digital Workplace',
    skills: ['Microsoft 365', 'Windows 7/10/11', 'Citrix XenApp', 'SAP']
  },
  {
    icon: BarChart3,
    titleFr: 'Supervision',
    titleEn: 'Monitoring',
    skills: ['Nagios', 'Check MK', 'PATROL', 'HPOM', 'GLPI']
  }
]

export function SkillsSection() {
  const { language, t } = useLanguage()

  return (
    <section id="skills" className="w-full py-20 md:py-32">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-syne)] font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            {t('Compétences', 'Skills')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t(
              'Expertise technique et méthodologique acquise au fil de +10 ans d\'expérience',
              'Technical and methodological expertise acquired over +10 years of experience'
            )}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={category.titleFr}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-syne)] font-semibold text-lg mb-4">
                  {language === 'fr' ? category.titleFr : category.titleEn}
                </h3>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
