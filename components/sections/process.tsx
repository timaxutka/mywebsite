import { Search, GitBranch, Layout, Palette, Code2 } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Понимание проблемы',
    description: 'Согласование бизнес-целей, потребностей пользователей и ограничений проекта через интервью со стейкхолдерами и анализ требований.',
    icon: Search
  },
  {
    number: '02',
    title: 'UX-исследование и сценарии',
    description: 'Проведение пользовательских исследований, создание персон, построение карт путей и определение информационной архитектуры.',
    icon: GitBranch
  },
  {
    number: '03',
    title: 'Вайрфрейминг',
    description: 'Быстрое прототипирование low-fidelity решений для тестирования концепций и валидации дизайн-решений на ранних этапах.',
    icon: Layout
  },
  {
    number: '04',
    title: 'UI-дизайн',
    description: 'Создание high-fidelity интерфейсов с консистентными дизайн-системами, микроанимациями и адаптивной вёрсткой.',
    icon: Palette
  },
  {
    number: '05',
    title: 'Передача в разработку',
    description: 'Подготовка детальных спецификаций, документации компонентов и сопровождение на этапе реализации.',
    icon: Code2
  }
]

export function ProcessSection() {
  return (
    <section id="process" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4">
            Как я работаю
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold">Процесс</h2>
        </div>

        <div className="grid gap-0">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group grid md:grid-cols-12 gap-6 py-8 border-b border-border first:border-t"
            >
              <div className="md:col-span-1">
                <span className="text-sm text-muted-foreground tabular-nums">
                  {step.number}
                </span>
              </div>
              
              <div className="md:col-span-4 flex items-center gap-4">
                <div className="size-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <step.icon className="size-5" />
                </div>
                <h3 className="text-lg font-medium">{step.title}</h3>
              </div>
              
              <div className="md:col-span-7">
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
