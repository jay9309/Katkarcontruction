import { Link } from "react-router-dom";


const ProjectCard = ({ project }) => {

    return (

        <div className="project-card">

            {/* ==============================
                PROJECT IMAGE
            =============================== */}

            <div className="project-image">

                {project.siteImages?.length > 0 ? (

                    <img
                        src={project.siteImages[0]}
                        alt={project.title}
                    />

                ) : (

                    <div className="no-image">
                        No Image
                    </div>

                )}

            </div>


            {/* ==============================
                PROJECT CONTENT
            =============================== */}

            <div className="project-content">

                <h3>
                    {project.title}
                </h3>


                <p className="project-location">
                    📍 {project.location}
                </p>


                {/* STATUS */}

                <span
                    className={`project-status ${project.status}`}
                >
                    {project.status}
                </span>


                {/* VIEW PROJECT BUTTON */}

                <Link
                    to={`/projects/${project._id}`}
                    className="view-project-btn"
                >
                    View Project
                </Link>

            </div>

        </div>

    );

};


export default ProjectCard;