import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="hero">

            <div className="hero-content">

                <p className="hero-subtitle">
                    WELCOME TO KATKAR CONSTRUCTIONS
                </p>

                <h1>
                    Building Dreams,
                    <br />
                    Creating Quality.
                </h1>

                <p className="hero-description">
                    We provide reliable and quality construction
                    services with modern design and professional
                    workmanship.
                </p>

                <div className="hero-buttons">

                    <Link
                        to="/projects/completed"
                        className="hero-btn primary-btn"
                    >
                        View Our Projects
                    </Link>

                    <Link
                        to="/contact"
                        className="hero-btn secondary-btn"
                    >
                        Contact Us
                    </Link>

                </div>

            </div>

        </section>
    );
};

export default Hero;