import ProjectCard from './ProjectCard'

function ProjectList({ projects }) {
  if (projects.length === 0) {
    return <p className="empty-state">No matching projects available</p>
  }

  return (
    <div className="ProjectList">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}

export default ProjectList
