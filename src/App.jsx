import { useState } from 'react'
import Header from './components/Header'
import ProjectForm from './components/ProjectForm'
import ProjectList from './components/ProjectList'
import SearchBar from './components/SearchBar'
import { StarterProjects } from './Data'

function App() {
  const [projects, setProjects] = useState(StarterProjects)
  const [searchItem, setSearchItem] = useState('')

  function addProject(newProject) {
    setProjects((currentProjects) => [
      { ...newProject, id: currentProjects.length + 1 },
      ...currentProjects,
    ])
  }

  const filteredProjects = projects.filter((project) => {
    const searchableText = `${project.name} ${project.category}`.toLowerCase()
    return searchableText.includes(searchItem.toLowerCase())
  })

  return (
    <>
      <Header />
      <main className="page-container">
        <div>
          <p>Our projects</p>
          <h2>View the Projects</h2>
        </div>

        <SearchBar searchTerm={searchItem} onSearch={setSearchItem} />
        <ProjectForm addProject={addProject} />
        <ProjectList projects={filteredProjects} />
      </main>
    </>
  )
}

export default App;

