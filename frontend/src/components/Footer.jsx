import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

import {
    FaWhatsapp,
    FaInstagram,
    FaFacebook,
    FaYoutube,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt
} from "react-icons/fa";


const Footer = () => {

    const currentYear = new Date().getFullYear();


    return (

        <>
            <section className="footer-cta">
                <div>
                    <strong>Have a project in mind?</strong>
                    <span>Let&apos;s build something great together.</span>
                </div>

                <Link to="/contact" className="footer-cta-button">
                    Contact Us Today
                </Link>
            </section>

            <footer className="footer">

            <div className="footer-container">


                {/* COMPANY INFORMATION */}

                <div className="footer-column">

                    <img
                        className="footer-logo"
                        src={logo}
                        alt="Katkar Constructions"
                    />

                    <p>
                        Building quality spaces with
                        trust, professionalism and
                        modern construction solutions.
                    </p>


                    {/* SOCIAL ICONS */}

                    <div className="footer-social">

                        <a
                            href="https://wa.me/918989070745"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="WhatsApp"
                        >
                            <FaWhatsapp />
                        </a>


                        <a
                            href="https://www.instagram.com/katkar_constructions?igsi=NTg3Z2pyNm50MXlu"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>


                        <a
                            href="https://www.facebook.com/share/1D6TJTstb1/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Facebook"
                        >
                            <FaFacebook />
                        </a>


                        <a
                            href="https://youtube.com/@katkarconstructions?si=BV9sG5F0mK6Vcvxn"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="YouTube"
                        >
                            <FaYoutube />
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


                {/* SERVICES */}

                <div className="footer-column">

                    <h3>
                        Our Services
                    </h3>


                    <Link to="/services">
                        Residential Projects
                    </Link>

                    <Link to="/services">
                        Commercial Spaces
                    </Link>

                    <Link to="/services">
                        Architecture Design
                    </Link>

                    <Link to="/services">
                        Construction Management
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
                            href="https://wa.me/918989070745"
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
                    © {currentYear} Jay Kashid.
                    All Rights Reserved.
                </p>

            </div>

            </footer>
        </>
    );
};


export default Footer;