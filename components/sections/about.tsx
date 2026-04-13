export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-4">
            <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4">
              Обо мне
            </p>
            <div className="w-12 h-0.5 bg-foreground" />
          </div>
          
          <div className="md:col-span-8">
            <p className="text-xl md:text-2xl leading-relaxed text-foreground/90">
              Продуктовый дизайнер с опытом более 3 лет в создании веб-приложений, MVP и цифровых продуктов. Работаю по полному циклу — от UX-исследований и пользовательских сценариев до UI-дизайна и передачи в разработку.
            </p>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Мой подход основан на понимании реальных проблем пользователей и трансляции бизнес-требований в интуитивные интерфейсы. Сильные стороны — построение логичных пользовательских путей, информационная архитектура и масштабируемые дизайн-системы.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
