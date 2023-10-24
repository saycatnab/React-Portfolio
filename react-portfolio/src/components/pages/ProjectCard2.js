import react from "react";
import Projects from "./Projects";
import projects from "../projects.json";

function ProjectCard2(){
    return(
        <div className="row justify-content-between text-center mt-8">
                <div className="col-lg-5 mx-auto mb-4">
                    <div className="card-body">
                        <div class="card">
                            <img src={projects.image} alt={projects.name} class="card-img-top" ></img>
                            <div>
                                <h4>{projects.name}</h4>
                                <h6>Description</h6>
                                <p class="card-text">{projects.desc}</p>
                            </div>
                            <div class="card-footer">
                                <a href={projects.repo} class="btn btn-primary">Repository</a>
                                <a href={projects.deployed} class="btn btn-primary">Deployed Website</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default ProjectCard2;