"use client"

import { useLanguage } from './language-context'

const experiences = [
  {
    company: 'SAFRAN',
    roleFr: 'Chef de Projet Infrastructure',
    roleEn: 'Infrastructure Project Manager',
    location: 'Massy',
    dates: '03/2023 - 12/2025',
    descFr: 'SAFRAN - Entité SED (Safran Electronique Défense). Pilotage multi-projets d\'infrastructure critique et accompagnement des utilisateurs.',
    descEn: 'SAFRAN - SED Entity (Safran Electronic Defense). Multi-project management of critical infrastructure and user support.',
    achievementsFr: [
      'Pilotage de 3 projets stratégiques : obsolescence SAP TMI, extension réseau Wi-Fi (+30% couverture), masterisation 300+ postes offshore (Inde)',
      'Coordination équipes techniques pluridisciplinaires (10+ personnes)',
      'Animation COPIL, COPROJ, SCRUM avec directions métiers et IT',
      'Migration SAP TMI → S/4HANA cloud privé pour 100 utilisateurs'
    ],
    achievementsEn: [
      'Management of 3 strategic projects: SAP TMI obsolescence, Wi-Fi network extension (+30% coverage), 300+ offshore workstation mastering (India)',
      'Coordination of cross-functional technical teams (10+ people)',
      'COPIL, COPROJ, SCRUM facilitation with business and IT departments',
      'SAP TMI migration → S/4HANA private cloud for 100 users'
    ],
    tags: ['ServiceNow', 'SAP', 'S/4HANA', 'Cisco Wi-Fi', 'SCCM', 'VPN', 'Active Directory']
  },
  {
    company: 'ORANGE BUSINESS SERVICES',
    roleFr: 'Chef de Projet IT',
    roleEn: 'IT Project Manager',
    location: 'Saint-Denis',
    dates: '11/2021 - 02/2023',
    descFr: 'Orange Business Services - Client LVMH (Finance, Infra, Web Innovation). Pilotage de la migration cloud privé OBS vers cloud public AWS.',
    descEn: 'Orange Business Services - LVMH Client (Finance, Infra, Web Innovation). Management of OBS private cloud to AWS public cloud migration.',
    achievementsFr: [
      'Pilotage migration AWS de 50+ applications critiques LVMH — taux de succès 99%',
      'Coordination MOE/MOA et experts cloud (15+ intervenants)',
      'Point de contact client LVMH, pilotage COPIL/COPROJ',
      'Mise en place des processus ITIL pour l\'exploitation post-migration'
    ],
    achievementsEn: [
      'AWS migration management of 50+ critical LVMH applications — 99% success rate',
      'MOE/MOA and cloud experts coordination (15+ contributors)',
      'LVMH client point of contact, COPIL/COPROJ management',
      'ITIL processes implementation for post-migration operations'
    ],
    tags: ['AWS', 'VMware', 'Zerto', 'Linux', 'Windows', 'ITIL']
  },
  {
    company: 'THALES',
    roleFr: 'Ingénieur Systèmes et Réseaux',
    roleEn: 'Systems & Networks Engineer',
    location: 'Rungis',
    dates: '03/2019 - 03/2021',
    descFr: 'THALES - Entité LAS (Land Air Systems France). Maintien en Condition Opérationnelle (MCO) des applications d\'entreprise.',
    descEn: 'THALES - LAS Entity (Land Air Systems France). Operational Maintenance (MCO) of enterprise applications.',
    achievementsFr: [
      'MCO des applications Atlassian pour 500+ utilisateurs',
      'Migration +200 applications sans interruption de service',
      'Administration VMware vSphere, 80+ VMs',
      'Supervision réseau avec Nagios (Check MK)'
    ],
    achievementsEn: [
      'Atlassian applications MCO for 500+ users',
      'Migration of 200+ applications without service interruption',
      'VMware vSphere administration, 80+ VMs',
      'Network monitoring with Nagios (Check MK)'
    ],
    tags: ['Jira', 'Bitbucket', 'Jenkins', 'VMware', 'Linux RedHat', 'Nagios']
  },
  {
    company: 'BANQUE DE FRANCE',
    roleFr: 'Responsable Analyste Exploitation',
    roleEn: 'Operations Analyst Manager',
    location: 'Noisiel',
    dates: '09/2017 - 02/2019',
    descFr: 'Banque de France - Équipe Suptec Monitoring. Management d\'équipe de supervision et gestion des incidents critiques.',
    descEn: 'Banque de France - Suptec Monitoring Team. Supervision team management and critical incident handling.',
    achievementsFr: [
      'Management équipe 10 consultants, supervision niveau N1/N2',
      'Réduction de 35% des faux positifs à la console de monitoring',
      'Animation cellules de crise pour incidents majeurs',
      'Supervision de 200+ équipements'
    ],
    achievementsEn: [
      'Management of 10 consultants team, N1/N2 level supervision',
      '35% reduction of false positives on monitoring console',
      'Crisis cell facilitation for major incidents',
      'Monitoring of 200+ devices'
    ],
    tags: ['PATROL', 'HPOM', 'Autosys R11', 'TSM IBM', 'ITIL']
  },
  {
    company: 'BNP PARIBAS',
    roleFr: 'Consultant Technico-Fonctionnel',
    roleEn: 'Technical-Functional Consultant',
    location: 'Montreuil',
    dates: '09/2016 - 09/2017',
    descFr: 'BNP Paribas - Service ITG. Recueil des besoins clients pour amélioration continue et MCO des postes de travail et outils collaboratifs.',
    descEn: 'BNP Paribas - ITG Service. Client requirements gathering for continuous improvement and workstation MCO.',
    achievementsFr: [
      'Migration Windows 7→10, déploiement 500+ postes (90% satisfaction)',
      'MCO postes de travail et outils collaboratifs',
      'Gestion des applications virtualisées sous Citrix XenApp'
    ],
    achievementsEn: [
      'Windows 7→10 migration, 500+ workstations deployment (90% satisfaction)',
      'Workstation and collaborative tools MCO',
      'Virtualized applications management under Citrix XenApp'
    ],
    tags: ['SCCM', 'Citrix XenApp', 'ServiceNow', 'ITSM', 'Windows 10']
  },
  {
    company: 'AQSACOM',
    roleFr: 'Administrateur Systèmes et Réseaux',
    roleEn: 'Systems & Networks Administrator',
    location: 'Les Ulis',
    dates: '09/2014 - 09/2016',
    descFr: 'AQSACOM - PME éditeur de logiciel. Pilotage du déploiement d\'une nouvelle infrastructure systèmes et réseaux.',
    descEn: 'AQSACOM - Software editor SME. New systems and networks infrastructure deployment management.',
    achievementsFr: [
      'Déploiement nouvelle infrastructure systèmes et réseaux from scratch',
      'Migration Windows Server 2008 → 2012 + Active Directory',
      'Configuration réseau : VLAN, firewall, VPN'
    ],
    achievementsEn: [
      'New systems and networks infrastructure deployment from scratch',
      'Windows Server 2008 → 2012 + Active Directory migration',
      'Network configuration: VLAN, firewall, VPN'
    ],
    tags: ['Windows Server', 'Active Directory', 'VLAN', 'VPN', 'Firewall', 'ESXi']
  },
  {
    company: 'TOSHIBA MEDICAL SYSTEMS (Canon)',
    roleFr: 'Technicien Systèmes et Réseaux',
    roleEn: 'Systems & Networks Technician',
    location: 'Puteaux',
    dates: '09/2012 - 09/2014',
    descFr: 'Toshiba Medical Systems (rachetée par Canon). Support technique utilisateurs et gestion du parc informatique.',
    descEn: 'Toshiba Medical Systems (acquired by Canon). User technical support and IT asset management.',
    achievementsFr: [
      'Support technique utilisateurs, gestion parc via GLPI',
      'Migration Windows XP → Windows 7',
      'Gestion VPN (Cisco AnyConnect) et flotte téléphonique'
    ],
    achievementsEn: [
      'User technical support, asset management via GLPI',
      'Windows XP → Windows 7 migration',
      'VPN management (Cisco AnyConnect) and phone fleet'
    ],
    tags: ['GLPI', 'Active Directory', 'Lotus Notes', 'Cisco AnyConnect']
  }
]

export function ExperienceSection() {
  const { language } = useLanguage()

  return (
    <section id="experience" className="w-full py-20 md:py-32 bg-secondary/30">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-syne)] font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            {language === 'fr' ? 'Expériences' : 'Experience'}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {language === 'fr' 
              ? 'Plus de 10 ans d\'expérience au sein de grands comptes'
              : 'Over 10 years of experience within major enterprises'
            }
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-primary/30 transform md:-translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={`${exp.company}-${exp.dates}`}
                className={`relative grid md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? 'md:text-right' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 mt-2 border-4 border-background" />

                {/* Content */}
                <div
                  className={`ml-8 md:ml-0 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:col-start-2 md:pl-12 md:text-left'
                  }`}
                >
                  <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="font-[family-name:var(--font-syne)] font-bold text-xl text-primary">
                        {exp.company}
                      </h3>
                      <p className="font-medium text-foreground">
                        {language === 'fr' ? exp.roleFr : exp.roleEn}
                      </p>
                      <p className="font-[family-name:var(--font-mono)] text-sm text-muted-foreground mt-1">
                        {exp.location} • {exp.dates}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-4">
                      {language === 'fr' ? exp.descFr : exp.descEn}
                    </p>

                    {/* Achievements */}
                    <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? 'md:text-left' : ''}`}>
                      {(language === 'fr' ? exp.achievementsFr : exp.achievementsEn).map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-1 shrink-0">→</span>
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-start' : ''}`}>
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty column for alternating layout */}
                {index % 2 === 0 && <div className="hidden md:block" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
