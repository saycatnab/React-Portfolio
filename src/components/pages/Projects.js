import React from "react";
import ProjectCard2 from "./ProjectCard2";
import projects from "../projects.json";

function Projects(props) {

    const mapProject = projects.map((item) =>{
        return(
            <ProjectCard2
                image = {item.image}
                name = {item.name}
                repo = {item.repo}
                deployed = {item.deployed}
                desc = {item.description}
            />
        )
    })

    return (
        <div>
            <div className="text-bg-info p3 text-center mb-3 font-monospace">
                <h1>Projects</h1>
            </div>
            <div className="text-info p3 text-center mb-3 font-monospace">
                <h2>Saynab Good</h2>
            </div>
            <div>
            <img src="https://cdn-icons-png.flaticon.com/512/8740/8740316.png" class="rounded mx-auto d-block" width="20%" alt="image of a cartoon cat"></img>
            </div>
        
            <div>
                {mapProject}
            </div>
    </div>
    )
}

export default Projects