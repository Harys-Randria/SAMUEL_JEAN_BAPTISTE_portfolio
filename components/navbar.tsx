"use client"

import { useState } from 'react'
import { useTheme } from 'next-themes'
import { useLanguage } from './language-context'
import { Button } from '@/components/ui/button'
import { Moon, Sun, Menu, X } from 'lucide-react'

const navItems = {
  fr: ['À Propos', 'Compétences', 'Expériences', 'Formation', 'Contact'],
  en: ['About', 'Skills', 'Experience', 'Education', 'Contact']
}

const navLinks = ['about', 'skills', 'experience', 'education', 'contact']

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const items = language === 'fr' ? navItems.fr : navItems.en

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-background/80 backdrop-blur-xl border-b border-border">
      <nav className="max-w-[1100px] mx-auto px-8 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-[family-name:var(--font-syne)] font-bold text-xl text-primary">
          SJB
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {items.map((item, index) => (
            <a
              key={item}
              href={`#${navLinks[index]}`}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          {/* Language Toggle */}
          <div className="flex items-center border border-border rounded-lg overflow-hidden">
            <button
              onClick={() => setLanguage('fr')}
              className={`px-3 py-1.5 text-sm font-medium transition-colors ${
                language === 'fr' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              FR
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1.5 text-sm font-medium transition-colors ${
                language === 'en' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              EN
            </button>
          </div>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-muted-foreground hover:text-foreground"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden w-full bg-background border-b border-border">
          <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-4 flex flex-col gap-4">
            {items.map((item, index) => (
              <a
                key={item}
                href={`#${navLinks[index]}`}
                className="text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
