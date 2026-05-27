import type { Project } from '../data/projects'
import ProjectCard from './ProjectCard'

type Theme = 'engineering' | 'music'

type Props = {
  projects: Project[]
  theme: Theme
}

export default function ProjectGrid({ projects, theme }: Props) {
  const gridClass =
    theme === 'music' ? 'project-grid project-grid--music' : 'project-grid'

  return (
    <div className={gridClass}>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} theme={theme} />
      ))}
    </div>
  )
}
