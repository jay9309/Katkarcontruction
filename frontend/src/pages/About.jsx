import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import {
    FaAward,
    FaBuilding,
    FaClock,
    FaHardHat,
    FaHandshake,
    FaShieldAlt,
    FaUsers
} from "react-icons/fa";
import heroImage from "../assets/Hero.png";

const highlights = [
    { icon: FaBuilding, value: "150+", label: "Projects completed" },
    { icon: FaShieldAlt, value: "100%", label: "Quality assured" },
    { icon: FaUsers, value: "150+", label: "Happy clients" },
    { icon: FaHardHat, value: "23+", label: "Years of experience" }
];

const values = [
    {
        icon: FaAward,
        title: "Quality workmanship",
        text: "We use the best materials and follow industry standards to ensure long-lasting structures."
    },
    {
        icon: FaHandshake,
        title: "Client satisfaction",
        text: "Our clients are at the heart of everything we do. Your satisfaction is our priority."
    },
    {
        icon: FaClock,
        title: "On-time delivery",
        text: "We value your time and ensure every project is completed within the committed timeline."
    },
    {
        icon: FaShieldAlt,
        title: "Transparent pricing",
        text: "We provide clear estimates with no hidden costs and complete transparency."
    }
];

const About = () => {
    return (
        <>
            <Navbar />

            <main className="about-page">
                <section className="about-hero" style={{ "--about-hero-image": `url(${heroImage})` }}>
                    <div className="about-hero-content">
                        <p className="about-kicker">About us</p>
                        <h1>Building trust.<br /><span>Creating landmarks.</span></h1>
                        <p className="about-hero-copy">
                            At Katkar Constructions, we turn your dreams into reality. With a commitment to quality,
                            transparency, and innovation, we have been delivering exceptional construction solutions.
                        </p>
                        <Link to="/projects/completed" className="about-button">Our projects <span aria-hidden="true">-&gt;</span></Link>
                    </div>
                </section>

                <section className="about-story about-container">
                    <div className="about-story-copy">
                        <p className="about-kicker">Our story</p>
                        <h2>Building with passion<br />since <span>day one</span></h2>
                        <p>Katkar Constructions was founded with a vision to deliver high-quality construction services with honesty, integrity, and professionalism. Over the years, we have completed numerous projects and earned the trust of our clients through our dedication and workmanship.</p>
                        <p className="about-signature">Katkar</p>
                        <small>Founder, Katkar Constructions</small>
                    </div>
                    <div className="about-story-image-wrap">
                        <img src={heroImage} alt="Katkar Constructions project under construction" />
                        <div className="about-experience-badge"><FaUsers /><strong>5+</strong><span>Years of experience</span></div>
                    </div>
                </section>

                <section className="about-stats">
                    <div className="about-container about-stats-grid">
                        {highlights.map(({ icon: Icon, value, label }) => (
                            <div className="about-stat" key={label}>
                                <Icon />
                                <div><strong>{value}</strong><span>{label}</span></div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="about-values about-container">
                    <div className="about-heading-row">
                        <div>
                            <p className="about-kicker">What makes us different</p>
                            <h2>Quality construction.<br />Honest service. <span>Great results.</span></h2>
                        </div>
                    </div>
                    <div className="about-values-grid">
                        {values.map(({ icon: Icon, title, text }) => (
                            <article className="about-value" key={title}>
                                <div className="about-value-icon"><Icon /></div>
                                <h3>{title}</h3>
                                <p>{text}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="about-bottom about-container">
                    <div className="about-vision">
                        <p className="about-kicker">Our vision</p>
                        <h2>To build a better tomorrow</h2>
                        <p>We aim to be a leading construction company known for our quality, innovation, and commitment to creating spaces that enhance lives and communities.</p>
                        <Link to="/contact" className="about-button">Contact us <span aria-hidden="true">-&gt;</span></Link>
                    </div>
                    <div className="about-team">
                        <p className="about-kicker">Our team</p>
                        <h2>Experienced professionals</h2>
                        <p>Our team of skilled engineers, architects, and project managers work together to deliver projects that exceed expectations.</p>
                        <div className="about-team-list">
                            <div><span className="team-avatar">SK</span><strong>Shreyash Katkar</strong><small>Founder &amp; Director</small></div>
                            <div><span className="team-avatar">RD</span><strong>Katkar Sir</strong><small>Project Manager</small></div>
                            <div><span className="team-avatar">PP</span><strong> Patil</strong><small>Site Engineer</small></div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default About;
