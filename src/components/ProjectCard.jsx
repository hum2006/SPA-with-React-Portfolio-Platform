function  ProjectCard(){
    return(

    <article className="ProjectCard">

        <div>
            <div>
            <span>{ProjectCard.category}</span>
            </div>

            <h3>{ProjectCard.name}</h3>
            <p>{ProjectCard.description}</p>
         
        </div>

    </article>
    );

}

export default ProjectCard ;
