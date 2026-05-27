import type { ReactNode } from 'react'

type Theme = 'engineering' | 'music'

type Props = {
  id: string
  label?: string
  title: string
  subtitle?: string
  theme: Theme
  children: ReactNode
}

export default function Section({ id, label, title, subtitle, theme, children }: Props) {
  return (
    <section id={id} className={`section section--${theme}`}>
      <div className="section__inner">
        {label && <p className="section__label">{label}</p>}
        <h2 className="section__title">{title}</h2>
        {subtitle && <p className="section__subtitle">{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}
