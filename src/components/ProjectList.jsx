import ProjectCard from "./ProjectCard";

function ProjectList({projects}){
    if(projects.lenght ===0 ){
        return <p>No matching projects available</p>}

    return(
        <div ClassName='ProjectList'>

              {projects.map((project) => (
                <ProjectCard key={Project.id} project={project} />
            ))}

        </div>
    );
}

export default ProjectList ;