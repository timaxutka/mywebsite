'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Project {
  id: string
  title: string
  category: string
  tags: string[]
  description: string
  problem: string
  task: string
  process: string[]
  solution: string
  outcome: string
  image: string
}

const projects: Project[] = [
  {
    id: 'taskflow',
    title: 'TaskFlow CRM',
    category: 'SaaS-продукт',
    tags: ['UX-исследование', 'UI-дизайн', 'Дизайн-система'],
    description: 'B2B CRM-платформа для небольших отделов продаж: управление лидами, отслеживание сделок и автоматизация follow-up.',
    problem: 'Существующая CRM была сложной и перегруженной для небольших команд. Пользователи теряли сделки из-за запутанной навигации и отсутствия наглядного статуса.',
    task: 'Переработать ключевой опыт работы со сделками: сократить время на действия и улучшить видимость воронки продаж.',
    process: [
      'Провёл 8 интервью с менеджерами по продажам',
      'Составил карту существующих сценариев и выявил точки трения',
      'Создал low-fidelity вайрфреймы ключевых экранов',
      'Разработал консистентную дизайн-систему с переиспользуемыми компонентами',
      'Итеративно дорабатывал high-fidelity UI на основе обратной связи'
    ],
    solution: 'Внедрил канбан-представление воронки с карточками быстрых действий, упростил создание сделки с 6 до 3 шагов, добавил контекстные уведомления об обновлениях.',
    outcome: 'По результатам опросов — создание сделки ускорилось на 40%. Оценка удовлетворённости выросла с 3.2 до 4.5 из 5.',
    image: '/images/saas.png'
  },
  {
    id: 'finova',
    title: 'Finova Landing Page',
    category: 'Редизайн лендинга',
    tags: ['UX-аудит', 'UI-дизайн', 'Оптимизация конверсии'],
    description: 'Редизайн маркетингового сайта для финтех-стартапа, предлагающего инструменты автоматизированного инвестирования.',
    problem: 'У оригинального лендинга был показатель отказов 65%. Пользователи не понимали ценность продукта за первые 5 секунд.',
    task: 'Переработать лендинг так, чтобы чётко донести преимущества продукта и увеличить конверсию в регистрации.',
    process: [
      'Проанализировал тепловые карты и записи сессий',
      'Провёл бенчмарк 5 конкурентных лендингов',
      'Разработал 3 концепции вайрфреймов с разной иерархией сообщений',
      'Создал адаптивный UI с mobile-first подходом',
      'Добавил микроанимации для ключевых CTA'
    ],
    solution: 'Переструктурировал hero-секцию с чётким ценностным предложением, добавил социальные доказательства выше линии сгиба, упростил форму регистрации до одного поля email.',
    outcome: 'Показатель отказов снизился до 42%. Конверсия в регистрации выросла на 28% за первый месяц после запуска.',
    image: 'bg-gradient-to-br from-muted to-secondary'
  },
  {
    id: 'medtrack',
    title: 'MedTrack Mobile App',
    category: 'Мобильное приложение',
    tags: ['Исследование пользователей', 'Прототипирование', 'iOS-дизайн'],
    description: 'Приложение для отслеживания приёма лекарств: напоминания о препаратах и визитах к врачу.',
    problem: 'Пациенты, особенно пожилые, часто пропускали приём лекарств из-за сложных приложений, требующих много ручного ввода.',
    task: 'Спроектировать простой и доступный трекер лекарств с минимумом ежедневных действий и надёжными напоминаниями.',
    process: [
      'Провёл интервью с 12 пациентами в возрасте 45-75 лет о привычках приёма лекарств',
      'Создал персоны пользователей и карты путей',
      'Сделал прототипы 2 моделей взаимодействия в Figma',
      'Провёл юзабилити-тестирование с 6 участниками',
      'Доработал UI для доступности (крупные зоны нажатия, высокий контраст)'
    ],
    solution: 'Спроектировал систему подтверждения одним нажатием, умные напоминания, адаптирующиеся к поведению пользователя, и упрощённое недельное представление. Добавил голосовое подтверждение для hands-free использования.',
    outcome: 'Юзабилити-тестирование показало 95% успешного выполнения задач у пользователей 60+. Рейтинг в App Store достиг 4.7 после публичного запуска.',
    image: 'bg-gradient-to-br from-secondary via-muted to-secondary'
  }
]

function ProjectCard({ project, isExpanded, onToggle }: {
  project: Project
  isExpanded: boolean
  onToggle: () => void
}) {
  return (
    <article className="border-b border-border">
      <button
        onClick={onToggle}
        className="w-full py-8 flex items-start md:items-center justify-between gap-4 text-left group"
      >
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h3 className="text-xl md:text-2xl font-medium group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <Badge variant="secondary" className="text-xs">
              {project.category}
            </Badge>
          </div>
          <p className="text-muted-foreground text-sm md:text-base">
            {project.description}
          </p>
        </div>
        <div className="flex items-center gap-2 mt-1 md:mt-0">
          <ChevronDown
            className={cn(
              "size-5 text-muted-foreground transition-transform duration-300",
              isExpanded && "rotate-180"
            )}
          />
        </div>
      </button>

      <div
        className={cn(
          "grid transition-all duration-500 ease-in-out",
          isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="pb-8 space-y-8">
            {/* Project Preview */}
            {project.image.startsWith('/') ? (
              <div className="aspect-4/3 rounded-lg overflow-hidden bg-muted">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className={cn("aspect-4/3 rounded-lg", project.image)} />
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Case Study Details */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-2">
                  Проблема
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  {project.problem}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-2">
                  Задача
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  {project.task}
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-3">
                Процесс
              </h4>
              <ul className="space-y-2">
                {project.process.map((step, index) => (
                  <li key={index} className="flex gap-3 text-foreground/80">
                    <span className="text-muted-foreground text-sm tabular-nums">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-2">
                  Решение
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  {project.solution}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-2">
                  Результат
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  {project.outcome}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export function ProjectsSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const handleToggle = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section id="projects" className="py-24 md:py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4">
              Избранные работы
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold">Проекты</h2>
          </div>
          <ArrowUpRight className="size-6 text-muted-foreground" />
        </div>

        <div>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isExpanded={expandedId === project.id}
              onToggle={() => handleToggle(project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
