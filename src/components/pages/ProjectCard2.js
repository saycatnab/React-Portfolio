import React from "react";
import projects from "../projects.json";

function ProjectCard2(props){
    return(
        <div className="row justify-content-between text-center mt-8">
                <div className="col-lg-5 mx-auto mb-4">
                    <div className="card-body">
                        <div class="card">
                            <div>
                                <h4 className="text-info p3 text-center mb-3 font-monospace p-3">{props.name}</h4>
                                <h6 className="text-info p3 text-center mb-3 font-monospace">Description</h6>
                                { props.desc ? <p class="text-info p3 text-center mb-3 font-monospace">{props.desc}</p> : <p>fake paragraph will be here if the conditional fails</p>}
                            </div>
                            <div class="card-footer">
                                <a href={props.repo} target="blank" class="btn btn-info btn-lg d-grid gap-2 col-6 mx-auto m-3 text-white">Repository</a>
                                <a href={props.deployed} target="blank" class="btn btn-info btn-lg d-grid gap-2 col-6 mx-auto m-3 text-white">Deployed Website</a>
                                <a href={props.image} target="blank" class="btn btn-info btn-lg d-grid gap-2 col-6 mx-auto m-3 text-white">Screenshot</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default ProjectCard2;