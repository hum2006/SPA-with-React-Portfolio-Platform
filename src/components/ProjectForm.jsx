import { useState } from 'react'

const emptyForm = {
  name: '',
  category: '',
  description: '',
}

function ProjectForm({ addProject }) {
  const [formData, setFormData] = useState(emptyForm)

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((currentData) => ({ ...currentData, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!formData.name.trim() || !formData.category.trim()) return

    addProject({
      ...formData,
      description: formData.description.trim() || 'No description added yet.',
    })

    setFormData(emptyForm)
  }

  return (
    <section className="form-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Add a new project</p>
          <h2>New Project</h2>
        </div>
      </div>

      <form className="ProjectForm" onSubmit={handleSubmit}>
        <label>
          Project name *
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter project name"
            required
          />
        </label>

        <label>
          Category *
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Choose a category</option>
            <option value="App development">App development</option>
            <option value="Web development">Web development</option>
            <option value="Game development">Game development</option>
            
          </select>
        </label>


        <label className="full-width">
          Short description
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            placeholder="Describe the project shortly."
          />
        </label>

        <button type="submit">Add Project</button>
      </form>
    </section>
  )
}

export default ProjectForm;