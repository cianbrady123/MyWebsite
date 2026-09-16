import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import { useScrollReveal } from '../hooks/useScrollReveal'

type Theme = 'engineering' | 'music'

type Props = {
  project: Project
  theme: Theme
}

export default function ProjectCard({ project, theme }: Props) {
  const { ref, revealed } = useScrollReveal<HTMLAnchorElement>()
  const className = `project-card project-card--${theme} project-card--${project.id}${revealed ? ' revealed' : ''}`

  const content = (
    <>
      {project.image && (
        <div className="project-card__image-wrap">
          <img
            className="project-card__image"
            src={project.image}
            alt={project.imageAlt ?? project.title}
          />
        </div>
      )}
      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        {project.description && (
          <p className="project-card__description">{project.description}</p>
        )}
      </div>
    </>
  )

  if (project.external) {
    return (
      <a
        ref={ref}
        href={project.href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    )
  }

  return (
    <Link ref={ref} to={project.href} className={className}>
      {content}
    </Link>
  )
}
