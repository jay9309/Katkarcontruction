import { Link } from "react-router-dom";
import heroImage from "../assets/Hero.png";

const Hero = () => {
    return (
        <section
            className="hero-section"
            style={{
                backgroundImage: `url(${heroImage})`,
            }}
        >

            {/* Dark overlay */}
            <div className="hero-overlay"></div>

            {/* Content */}
            <div className="hero-content">

                <p className="hero-subtitle">
                    KATKAR CONSTRUCTIONS
                </p>

                <h1>
                    Building Dreams.
                    <br />
                    <span>Creating Futures.</span>
                </h1>

                <p className="hero-description">
                    We build quality residential and commercial spaces
                    with trusted craftsmanship, modern design, and
                    professional project management.
                </p>

                <div className="hero-buttons">

                    <Link
                        to="/projects/ongoing"
                        className="hero-btn primary-btn"
                    >
                        Explore Projects →
                    </Link>

                    <Link
                        to="/contact"
                        className="hero-btn secondary-btn"
                    >
                        Get a Quote
                    </Link>

                </div>

                {/* Statistics */}
                <div className="hero-stats">

                    <div className="hero-stat">
                        <strong>150+</strong>
                        <span>Projects Completed</span>
                    </div>

                    <div className="hero-stat">
                        <strong>100%</strong>
                        <span>Quality Assured</span>
                    </div>

                    <div className="hero-stat">
                        <strong>23+</strong>
                        <span>Years Experience</span>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default Hero;