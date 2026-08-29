import { useEffect, useState } from "react";

import {
    useParams
} from "react-router-dom";

import {
    getProject
} from "../services/projectService";


const ProjectDetails = () => {

    const { id } = useParams();

    const [project, setProject] =
        useState(null);


    useEffect(() => {

        const fetchProject = async () => {

            try {

                const data =
                    await getProject(id);

                setProject(data);

            } catch (error) {

                console.error(error);

            }
        };


        fetchProject();

    }, [id]);


    if (!project) {

        return <h2>Loading...</h2>;
    }


    return (

        <div>

            <h1>
                {project.title}
            </h1>


            <p>
                Location: {project.location}
            </p>


            <p>
                Status: {project.status}
            </p>


            <p>
                {project.description}
            </p>


            <h2>Plans</h2>

            <div>

                {project.plans?.map(
                    (image, index) => (

                        <img
                            key={index}
                            src={image}
                            alt="Plan"
                        />

                    )
                )}

            </div>


            <h2>3D Designs</h2>

            <div>

                {project.threeD?.map(
                    (image, index) => (

                        <img
                            key={index}
                            src={image}
                            alt="3D Design"
                        />

                    )
                )}

            </div>


            <h2>Elevation</h2>

            <div>

                {project.elevation?.map(
                    (image, index) => (

                        <img
                            key={index}
                            src={image}
                            alt="Elevation"
                        />

                    )
                )}

            </div>


            <h2>Site Images</h2>

            <div>

                {project.siteImages?.map(
                    (image, index) => (

                        <img
                            key={index}
                            src={image}
                            alt="Construction Site"
                        />

                    )
                )}

            </div>

        </div>
    );
};


export default ProjectDetails;