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
    id: 'trafflow',
    title: 'Trafflow CRM',
    category: 'SaaS-продукт',
    tags: ['UX-проектирование', 'UI-дизайн', 'MVP', 'Дизайн-система'],
    description: 'CRM-система для арбитража трафика: управление кампаниями, связками и аналитикой в одном интерфейсе.',
    problem: 'Существующие CRM в нише перегружены и требуют долгого обучения. На этапе MVP отсутствовала чёткая структура продукта и логика пользовательских сценариев. Интерфейс рисковал стать сложным и замедлять работу с данными. Это снижало эффективность и увеличивало количество ошибок.',
    task: 'Спроектировать MVP CRM с нуля: определить ключевые сценарии, упростить работу с данными и создать масштабируемую структуру интерфейса. Снизить порог входа и ускорить выполнение основных действий. Подготовить дизайн к быстрой передаче в разработку.',
    process: [
      'Проанализировал CRM-решения в нише арбитража',
      'Определил ключевые user flow (кампании, связки, аналитика)',
      'Спроектировал архитектуру экранов и wireframes',
      'Разработал UI с фокусом на читаемость данных',
      'Собрал базовую дизайн-систему и подготовил handoff'
    ],
    solution: 'Переработал структуру интерфейса, разделив сложные сценарии на логические блоки. Вынес ключевые действия в явные точки взаимодействия и упростил работу с данными. Сделал акцент на читаемости метрик и скорости навигации. Интерфейс спроектирован с учётом масштабирования продукта.',
    outcome: 'Количество действий для базовых операций сократилось примерно на 30–40%. Интерфейс стал проще для освоения без обучения. Улучшилась читаемость аналитики и скорость принятия решений. MVP готов к дальнейшему развитию без пересборки структуры.',
    image: 'bg-gradient-to-br from-secondary to-muted'
  },
  {
    id: 'detrox',
    title: 'Detrox Russia',
    category: 'Редизайн лендинга',
    tags: ['UX-аудит', 'UI-дизайн', 'B2B', 'Оптимизация конверсии'],
    description: 'Редизайн B2B-лендинга медицинского продукта с фокусом на структуру, читаемость и доверие.',
    problem: 'Лендинг был перегружен технической информацией, из-за чего пользователь не понимал ценность продукта в первые секунды. Отсутствовала визуальная иерархия, и элементы конкурировали за внимание. Первый экран не формировал доверие и фокус. Страница воспринималась как каталог, а не продающий инструмент.',
    task: 'Переработать лендинг так, чтобы быстро донести ценность продукта и выстроить понятный пользовательский сценарий. Усилить первый экран и упростить восприятие информации. Сделать страницу более структурированной и ориентированной на B2B-аудиторию.',
    process: [
      'Проанализировал текущую структуру и поведение пользователя',
      'Определил приоритеты контента и ключевые точки внимания',
      'Пересобрал структуру страницы и сценарий просмотра',
      'Разработал новую визуальную иерархию',
      'Адаптировал дизайн под разные устройства'
    ],
    solution: 'Сфокусировал интерфейс на продукте и ключевых преимуществах. Упростил подачу сложной информации за счёт структуры и акцентов. Усилил первый экран, чтобы он сразу объяснял ценность продукта. Выстроил логичный сценарий взаимодействия.',
    outcome: 'Ключевая информация стала считываться в первые 5–7 секунд. Улучшилась структура и снизилась визуальная перегрузка. Предположительно снизился показатель отказов и увеличилось время на странице. Лендинг стал восприниматься как продуктовый сайт.',
    image: 'bg-gradient-to-br from-muted to-secondary'
  },
  {
    id: 'coworkit',
    title: 'CoworkIT App',
    category: 'Мобильное приложение',
    tags: ['UX-редизайн', 'UI-дизайн', 'Mobile', 'User Flow'],
    description: 'Редизайн мобильного приложения для поиска и бронирования коворкингов.',
    problem: 'Интерфейс был устаревшим и перегруженным, а пользовательские сценарии — разрозненными. Фильтры и поиск усложняли выбор, вместо того чтобы помогать. Ключевые действия не имели акцента. Это увеличивало время выполнения задач и снижало удобство.',
    task: 'Провести редизайн с фокусом на упрощение сценариев, улучшение навигации и обновление визуального стиля. Сделать поиск и фильтрацию более удобными. Снизить когнитивную нагрузку и повысить ощущение современного продукта.',
    process: [
      'Проанализировал текущий интерфейс и сценарии',
      'Выявил ключевые точки трения',
      'Пересобрал user flow (поиск, фильтры, профиль)',
      'Разработал новую структуру экранов',
      'Обновил UI и протестировал прототип'
    ],
    solution: 'Упростил структуру интерфейса и усилил визуальную иерархию. Переработал фильтры, сделав их компактнее и удобнее. Выделил ключевые действия и снизил перегруз. Привёл интерфейс к единой системе.',
    outcome: 'Время поиска коворкинга сократилось примерно на 25–30%. Интерфейс стал быстрее восприниматься и проще в использовании. Пользовательские сценарии стали логичнее и последовательнее. Повысилось общее доверие к продукту.',
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
