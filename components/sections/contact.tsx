import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'

const contactLinks = [
  {
    label: 'Email',
    value: 'elevenfive1@gmail.com',
    href: 'mailto:elevenfive1@gmail.com'
  },
  {
    label: 'Telegram',
    value: '@timaxutka',
    href: 'https://t.me/timaxutka'
  }
]

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4">
              Контакты
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Давайте поговорим
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Открыт к новым возможностям и интересным проектам. Если у вас есть идея или просто хотите пообщаться — пишите.
            </p>
          </div>
          
          <div className="md:col-span-8 md:col-start-6">
            <div className="space-y-6">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center justify-between py-4 border-b border-border hover:border-foreground transition-colors"
                >
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {link.label}
                    </p>
                    <p className="text-lg font-medium group-hover:text-accent transition-colors">
                      {link.value}
                    </p>
                  </div>
                  <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              ))}
            </div>

            <div className="mt-12">
              <Button asChild size="lg" className="rounded-full">
                <a href="mailto:elevenfive1@gmail.com">
                  Написать мне
                  <ArrowUpRight className="size-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
