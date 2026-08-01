function  ProjectCard({project}){
    return(

    <article className="ProjectCard">

        <div>
            <div>
            <span>{project.category}</span>
            </div>

            <h3>{project.name}</h3>
            <p>{project.description}</p>
         
        </div>

    </article>
    );

}

export default ProjectCard ;
