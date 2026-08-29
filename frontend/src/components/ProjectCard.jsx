import { Link } from "react-router-dom";


const ProjectCard = ({ project }) => {

    return (

        <div className="project-card">

            <div className="project-image">

                {project.siteImages?.length > 0 ? (

                    <img
                        src={project.siteImages[0]}
                        alt={project.title}
                    />

                ) : (

                    <div>
                        No Image
                    </div>
                )}

            </div>


            <div className="project-content">

                <h3>
                    {project.title}
                </h3>


                <p>
                    {project.location}
                </p>


                <span>
                    {project.status}
                </span>


                <Link
                    to={`/projects/${project._id}`}
                >
                    View Project
                </Link>

            </div>

        </div>
    );
};


export default ProjectCard;