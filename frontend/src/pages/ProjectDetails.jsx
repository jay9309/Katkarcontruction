import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
    FaArrowLeft,
    FaBuilding,
    FaCalendarAlt,
    FaCheckCircle,
    FaClock,
    FaLayerGroup,
    FaMapMarkerAlt,
    FaRulerCombined,
    FaShieldAlt
} from "react-icons/fa";
import { getProject } from "../services/projectService";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const ProjectDetails = () => {

    const { id } = useParams();

    const [project, setProject] = useState(null);


    useEffect(() => {
        const fetchProject = async () => {
            try {
                const data = await getProject(id);
                setProject(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProject();
    }, [id]);


    if (!project) {
        return (
            <div className="project-detail-loading">
                <div className="loading-spinner" />
                <p>Loading project details...</p>
            </div>
        );
    }

    const heroImage = project.siteImages?.[0]
        || project.threeD?.[0]
        || project.elevation?.[0]
        || project.projection?.[0];

    const gallerySections = [
        { title: "Floor plans", label: "Plan", images: project.plans },
        { title: "3D views", label: "3D view", images: project.threeD },
        { title: "Elevations", label: "Elevation", images: project.elevation },
        { title: "Site images", label: "Site image", images: project.siteImages }
    ].filter((section) => section.images?.length);

    return (
        <>
            <Navbar />

            <main className="project-detail-page">
                <section
                    className="project-detail-hero"
                    style={{ "--project-hero-image": `url(${heroImage || ""})` }}
                >
                    <div className="project-detail-hero-content">
                        <Link to="/projects/completed" className="project-back-link">
                            <FaArrowLeft /> Back to projects
                        </Link>
                        <span className={`project-detail-status ${project.status}`}>
                            {project.status} project
                        </span>
                        <h1>{project.title}</h1>
                        <p className="project-detail-location"><FaMapMarkerAlt /> {project.location}</p>
                        <p className="project-detail-description">{project.description}</p>
                        <div className="project-progress">
                            <span>Project progress</span>
                            <strong>{project.status === "completed" ? "100%" : project.status === "ongoing" ? "65%" : "Planned"}</strong>
                            <div><i style={{ width: project.status === "completed" ? "100%" : project.status === "ongoing" ? "65%" : "18%" }} /></div>
                        </div>
                    </div>
                </section>

                <div className="project-detail-layout">
                    <div className="project-detail-main">
                        <nav className="project-detail-tabs" aria-label="Project sections">
                            <a href="#overview">Overview</a>
                            {gallerySections.map((section) => <a href={`#${section.label.replace(" ", "-").toLowerCase()}`} key={section.title}>{section.title}</a>)}
                        </nav>

                        <section className="project-overview" id="overview">
                            <p className="project-detail-kicker">Project overview</p>
                            <h2>Designed for the way you live.</h2>
                            <p>{project.description}</p>
                            <div className="project-feature-grid">
                                <div><FaBuilding /><strong>Modern design</strong><span>Thoughtful architecture with elegant details.</span></div>
                                <div><FaLayerGroup /><strong>Quality construction</strong><span>Built with reliable materials and care.</span></div>
                                <div><FaShieldAlt /><strong>Prime location</strong><span>Conveniently placed for everyday living.</span></div>
                                <div><FaCheckCircle /><strong>Trusted service</strong><span>Clear communication from start to finish.</span></div>
                            </div>
                        </section>

                        {gallerySections.map((section) => (
                            <section className="project-gallery-section" id={section.label.replace(" ", "-").toLowerCase()} key={section.title}>
                                <div className="project-gallery-heading">
                                    <h2>{section.title}</h2>
                                    <span>{section.images.length} {section.images.length === 1 ? "image" : "images"}</span>
                                </div>
                                <div className="project-detail-gallery">
                                    {section.images.map((image, index) => (
                                        <figure className="project-detail-image" key={`${image}-${index}`}>
                                            <img src={image} alt={`${section.label} ${index + 1} for ${project.title}`} />
                                            <figcaption>{section.label} {index + 1}</figcaption>
                                        </figure>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>

                    <aside className="project-detail-sidebar">
                        <section className="project-info-card">
                            <h2>Project details</h2>
                            <div><FaBuilding /><span><small>Project name</small><strong>{project.title}</strong></span></div>
                            <div><FaMapMarkerAlt /><span><small>Location</small><strong>{project.location}</strong></span></div>
                            <div><FaClock /><span><small>Status</small><strong className="project-info-status">{project.status}</strong></span></div>
                            <div><FaRulerCombined /><span><small>Gallery images</small><strong>{gallerySections.reduce((total, section) => total + section.images.length, 0)} uploaded</strong></span></div>
                            <div><FaCalendarAlt /><span><small>Last updated</small><strong>{new Date(project.updatedAt || project.createdAt).toLocaleDateString()}</strong></span></div>
                        </section>
                        <section className="project-contact-card">
                            <h2>Interested in this project?</h2>
                            <p>Get in touch with us for more information or a site visit.</p>
                            <Link to="/contact">Get a quote</Link>
                            <Link to="/contact" className="project-contact-outline">Schedule a visit</Link>
                        </section>
                    </aside>
                </div>
            </main>

            <Footer />
        </>
    );
};


export default ProjectDetails;