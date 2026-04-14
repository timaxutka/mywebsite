import { Badge } from '@/components/ui/badge'

const skillGroups = [
  {
    title: 'Ключевые навыки',
    skills: ['UX-дизайн', 'UI-дизайн', 'Дизайн-системы', 'Прототипирование', 'Исследования пользователей', 'Информационная архитектура', 'Вайрфрейминг', 'Юзабилити-тестирование']
  },
  {
    title: 'Инструменты',
    skills: ['Figma', 'After Effects', 'Lottie', 'Principle', 'Miro', 'Notion', 'Jira']
  },
  {
    title: 'Технические',
    skills: ['HTML', 'CSS', 'Основы JavaScript', 'Адаптивный дизайн', 'Дизайн-токены', 'Компонентные библиотеки']
  }
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4">
            Экспертиза
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold">Навыки</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-sm py-1.5 px-3 bg-background hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
