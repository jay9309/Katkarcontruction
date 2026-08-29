import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import Footer from "../components/Footer";


const Home = () => {

    return (

        <>

            <Navbar />
            <Hero />

            <main>

                <section className="page-section">

                    <SectionTitle
                        subtitle="What we do"
                        title="Quality construction services"
                        description="We build premium residential and commercial spaces with dependable craftsmanship, transparent communication, and timely project delivery."
                    />

                    <div className="projects-grid">
                        <div className="project-card project-content">
                            <h3>Residential Projects</h3>
                            <p>Elegant homes, villas, and residential spaces designed for lasting comfort.</p>
                        </div>
                        <div className="project-card project-content">
                            <h3>Commercial Spaces</h3>
                            <p>Professional workspaces and modern commercial developments built to scale.</p>
                        </div>
                        <div className="project-card project-content">
                            <h3>Renovation & Finish</h3>
                            <p>Smart upgrades and finishing solutions that improve functionality and value.</p>
                        </div>
                    </div>

                </section>

                <section className="page-section">

                    <SectionTitle
                        subtitle="Our projects"
                        title="Explore our work"
                    />

                    <div className="hero-buttons">
                        <Link to="/projects/ongoing" className="hero-btn primary-btn">
                            Ongoing Projects
                        </Link>
                        <Link to="/projects/completed" className="hero-btn secondary-btn">
                            Completed Projects
                        </Link>
                    </div>

                </section>

            </main>

            <Footer />

        </>
    );
};


export default Home;