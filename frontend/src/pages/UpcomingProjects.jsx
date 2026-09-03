import { useEffect, useState } from "react";

import ProjectCard from "../components/ProjectCard";
import Navbar from "../components/Navbar";
import { getProjectsByStatus } from "../services/projectService";

const UpcomingProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const data = await getProjectsByStatus("upcoming");
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
                <h2>Loading upcoming projects...</h2>
            </>
        );
    }

    return (
        <>
            <Navbar />

            <section>
                <h1>Upcoming Projects</h1>

                {projects.length === 0 ? (
                    <p>No upcoming projects available.</p>
                ) : (
                    <div className="projects-grid">
                        {projects.map((project) => (
                            <ProjectCard key={project._id} project={project} />
                        ))}
                    </div>
                )}
            </section>
        </>
    );
};

export default UpcomingProjects;
