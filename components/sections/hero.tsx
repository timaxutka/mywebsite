import { Button } from '@/components/ui/button'
import { ArrowDown, Download } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-16">
      <div className="max-w-6xl mx-auto w-full">
        <div className="max-w-3xl">
          <p className="text-muted-foreground mb-4">Добрый день</p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-balance mb-6">
            Максим Евгеньевич <span className="text-foreground/50">Тимофеев</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-2">
            UX/UI Дизайнер (Middle)
          </p>
          
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mb-10">
            Проектирую веб-сервисы, MVP-продукты и пользовательские интерфейсы с фокусом на юзабилити и бизнес-цели.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full">
              <a href="#projects">
                Смотреть проекты
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a href="#contact">
                Связаться
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a href="/resume.pdf" download="Timofeev_Maxim_Resume.pdf">
                <Download className="size-4 mr-2" />
                Скачать резюме
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-24 md:mt-32 animate-bounce">
          <a href="#about" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowDown className="size-4" />
            <span>Листайте вниз</span>
          </a>
        </div>
      </div>
    </section>
  )
}
