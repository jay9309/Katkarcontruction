import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

import {
    getProjectsByStatus
} from "../services/projectService";


const Home = () => {

    const [upcomingProjects, setUpcomingProjects] = useState([]);
    const [ongoingProjects, setOngoingProjects] = useState([]);

    const [loadingUpcomingProjects, setLoadingUpcomingProjects] = useState(true);
    const [loadingProjects, setLoadingProjects] = useState(true);


    // ==========================================
    // FETCH PROJECTS
    // ==========================================

    useEffect(() => {

        const fetchProjects = async () => {

            try {

                const [upcomingData, ongoingData] = await Promise.all([
                    getProjectsByStatus("upcoming"),
                    getProjectsByStatus("ongoing")
                ]);

                setUpcomingProjects(upcomingData);
                setOngoingProjects(ongoingData);

            } catch (error) {

                console.error(
                    "Failed to fetch projects:",
                    error
                );

            } finally {

                setLoadingUpcomingProjects(false);
                setLoadingProjects(false);

            }
        };


        fetchProjects();

    }, []);


    return (

        <>

            <Navbar />

            <Hero />


            <main>

                {/* =====================================
                    UPCOMING PROJECTS
                ====================================== */}

                <section className="page-section">

                    <SectionTitle
                        subtitle="Coming soon"
                        title="Upcoming Projects"
                        description="Get a preview of the projects we are preparing to launch next."
                    />

                    {loadingUpcomingProjects ? (

                        <p>
                            Loading upcoming projects...
                        </p>

                    ) : upcomingProjects.length === 0 ? (

                        <p>
                            No upcoming projects available.
                        </p>

                    ) : (

                        <div className="projects-grid">

                            {upcomingProjects
                                .slice(0, 3)
                                .map((project) => (

                                    <ProjectCard
                                        key={project._id}
                                        project={project}
                                    />

                                ))}

                        </div>

                    )}

                    {upcomingProjects.length > 0 && (

                        <div
                            className="hero-buttons"
                            style={{
                                marginTop: "30px"
                            }}
                        >

                            <Link
                                to="/projects/upcoming"
                                className="hero-btn primary-btn"
                            >
                                View All Upcoming Projects
                            </Link>

                        </div>

                    )}

                </section>



                {/* =====================================
                    ONGOING PROJECTS
                ====================================== */}

                <section className="page-section">

                    <SectionTitle
                        subtitle="Currently working"
                        title="Ongoing Projects"
                        description="Take a look at the construction projects we are currently working on."
                    />


                    {loadingProjects ? (

                        <p>
                            Loading ongoing projects...
                        </p>

                    ) : ongoingProjects.length === 0 ? (

                        <p>
                            No ongoing projects available.
                        </p>

                    ) : (

                        <div className="projects-grid">

                            {ongoingProjects
                                .slice(0, 3)
                                .map((project) => (

                                    <ProjectCard
                                        key={project._id}
                                        project={project}
                                    />

                                ))}

                        </div>

                    )}


                    {ongoingProjects.length > 0 && (

                        <div
                            className="hero-buttons"
                            style={{
                                marginTop: "30px"
                            }}
                        >

                            <Link
                                to="/projects/ongoing"
                                className="hero-btn primary-btn"
                            >
                                View All Ongoing Projects
                            </Link>

                        </div>

                    )}

                </section>



                {/* =====================================
                    SERVICES SECTION
                ====================================== */}

                <section className="page-section">

                    <SectionTitle
                        subtitle="What we do"
                        title="Quality construction services"
                        description="We build premium residential and commercial spaces with dependable craftsmanship, transparent communication, and timely project delivery."
                    />


                    <div className="projects-grid">

                        <div className="project-card project-content">

                            <h3>
                                Residential Projects
                            </h3>

                            <p>
                                Elegant homes, villas, and
                                residential spaces designed
                                for lasting comfort.
                            </p>

                        </div>


                        <div className="project-card project-content">

                            <h3>
                                Commercial Spaces
                            </h3>

                            <p>
                                Professional workspaces and
                                modern commercial developments
                                built to scale.
                            </p>

                        </div>


                        <div className="project-card project-content">

                            <h3>
                                Renovation & Finish
                            </h3>

                            <p>
                                Smart upgrades and finishing
                                solutions that improve
                                functionality and value.
                            </p>

                        </div>

                    </div>

                </section>

            </main>


            <Footer />

        </>

    );

};


export default Home;