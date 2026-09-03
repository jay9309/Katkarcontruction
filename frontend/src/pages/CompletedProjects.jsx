import { useEffect, useState } from "react";

import ProjectCard from "../components/ProjectCard";
import Navbar from "../components/Navbar";

import {
    getProjectsByStatus
} from "../services/projectService";


const CompletedProjects = () => {

    const [projects, setProjects] = useState([]);

    const [loading, setLoading] = useState(true);


    useEffect(() => {

        const fetchProjects = async () => {

            try {

                const data =
                    await getProjectsByStatus(
                        "completed"
                    );

                setProjects(data);

            } catch (error) {

                console.error(error);

            } finally {

                setLoading(false);
            }
        };


        fetchProjects();

    }, []);


    if (loading) {

        return (
            <>
                <Navbar />
                <h2>Loading projects...</h2>
            </>
        );
    }


    return (
        <>
            <Navbar />

            <section>

                <h1>Completed Projects</h1>


            {projects.length === 0 ? (

                <p>
                    No completed projects available.
                </p>

            ) : (

                <div className="projects-grid">

                    {projects.map((project) => (

                        <ProjectCard
                            key={project._id}
                            project={project}
                        />

                    ))}

                </div>
            )}

            </section>
        </>
    );
};


export default CompletedProjects;