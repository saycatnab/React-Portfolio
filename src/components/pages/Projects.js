import React from "react";
import ProjectCard2 from "./ProjectCard2";
import projects from "../projects.json";

function Projects(props) {
    return (
        <div>
            <div className="text-bg-info p3 text-center mb-3 font-monospace">
                <h1>Contact Me</h1>
            </div>
            <div className="text-info p3 text-center mb-3 font-monospace">
                <h2>Saynab Good</h2>
            </div>
            <div>
            <img src="https://cdn-icons-png.flaticon.com/512/8740/8740316.png" class="rounded mx-auto d-block" width="20%" alt="image of a cartoon cat"></img>
            </div>
            <div className="text-info p3 text-center mb-3 font-monospace">
                <p>
                Here are ways you can contact me! 
                </p>
            </div>
            <ProjectCard2
            
            />
    </div>
    )
}

export default Projects