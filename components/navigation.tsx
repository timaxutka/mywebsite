'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '#about', label: 'Обо мне' },
  { href: '#projects', label: 'Проекты' },
  { href: '#process', label: 'Процесс' },
  { href: '#skills', label: 'Навыки' },
  { href: '#contact', label: 'Контакты' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Алекс Морган
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 -mr-2"
          aria-label="Открыть меню"
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span
              className={cn(
                'h-0.5 bg-foreground transition-all duration-300 origin-center',
                isMobileMenuOpen && 'rotate-45 translate-y-1.5'
              )}
            />
            <span
              className={cn(
                'h-0.5 bg-foreground transition-all duration-300',
                isMobileMenuOpen && 'opacity-0'
              )}
            />
            <span
              className={cn(
                'h-0.5 bg-foreground transition-all duration-300 origin-center',
                isMobileMenuOpen && '-rotate-45 -translate-y-1.5'
              )}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300 bg-background/95 backdrop-blur-md',
          isMobileMenuOpen ? 'max-h-64' : 'max-h-0'
        )}
      >
        <ul className="px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
