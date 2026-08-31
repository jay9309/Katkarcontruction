import { Link } from "react-router-dom";

import {
    FaWhatsapp,
    FaInstagram,
    FaFacebook,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt
} from "react-icons/fa";


const Footer = () => {

    const currentYear = new Date().getFullYear();


    return (

        <footer className="footer">

            <div className="footer-container">


                {/* COMPANY INFORMATION */}

                <div className="footer-column">

                    <h2>
                        Katkar Constructions
                    </h2>

                    <p>
                        Building quality spaces with
                        trust, professionalism and
                        modern construction solutions.
                    </p>


                    {/* SOCIAL ICONS */}

                    <div className="footer-social">

                        <a
                            href="https://wa.me/919999999999"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="WhatsApp"
                        >
                            <FaWhatsapp />
                        </a>


                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>


                        <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Facebook"
                        >
                            <FaFacebook />
                        </a>

                    </div>

                </div>


                {/* QUICK LINKS */}

                <div className="footer-column">

                    <h3>
                        Quick Links
                    </h3>


                    <Link to="/">
                        Home
                    </Link>

                    <Link to="/about">
                        About Us
                    </Link>

                    <Link to="/services">
                        Services
                    </Link>

                    <Link to="/projects/ongoing">
                        Ongoing Projects
                    </Link>

                    <Link to="/projects/completed">
                        Completed Projects
                    </Link>

                    <Link to="/contact">
                        Contact Us
                    </Link>

                </div>


                {/* PROJECTS */}

                <div className="footer-column">

                    <h3>
                        Our Projects
                    </h3>


                    <Link to="/projects/upcoming">
                        Upcoming Projects
                    </Link>

                    <Link to="/projects/ongoing">
                        Ongoing Projects
                    </Link>

                    <Link to="/projects/completed">
                        Completed Projects
                    </Link>

                </div>


                {/* CONTACT */}

                <div className="footer-column">

                    <h3>
                        Contact Us
                    </h3>


                    <p>
                        <FaMapMarkerAlt />

                        Your Construction Office
                    </p>


                    <p>

                        <FaPhone />

                        <a href="tel:+918989070745">
                            +91 8989070745
                        </a>

                    </p>


                    <p>

                        <FaEnvelope />

                        <a href="mailto:Thekatkarconstructions@gmail.com">
                            Thekatkarconstructions@gmail.com
                        </a>

                    </p>


                    <p>

                        <FaWhatsapp />

                        <a
                            href="https://wa.me/919999999999"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Chat on WhatsApp
                        </a>

                    </p>

                </div>

            </div>


            {/* COPYRIGHT */}

            <div className="footer-bottom">

                <p>
                    © {currentYear} Katkar Constructions.
                    All Rights Reserved.
                </p>

            </div>

        </footer>
    );
};


export default Footer;