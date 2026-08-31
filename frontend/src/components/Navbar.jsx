import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";


const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">

            {/* LOGO */}
            <Link
                to="/"
                className="navbar-logo"
                onClick={() => setMenuOpen(false)}
            >
                <img
                    src={logo}
                    alt="Katkar Constructions"
                />
            </Link>


            {/* HAMBURGER BUTTON */}
            <button
                className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Open navigation menu"
            >
                {menuOpen ? "✕" : "☰"}
            </button>


            {/* MENU */}
            <div
                className={`navbar-links ${
                    menuOpen ? "active" : ""
                }`}
            >

                <Link
                    to="/"
                    onClick={() => setMenuOpen(false)}
                >
                    Home
                </Link>

                <Link
                    to="/about"
                    onClick={() => setMenuOpen(false)}
                >
                    About
                </Link>

                <Link
                    to="/services"
                    onClick={() => setMenuOpen(false)}
                >
                    Services
                </Link>

                <Link
                    to="/projects/upcoming"
                    onClick={() => setMenuOpen(false)}
                >
                    Upcoming
                </Link>

                <Link
                    to="/projects/ongoing"
                    onClick={() => setMenuOpen(false)}
                >
                    Ongoing
                </Link>

                <Link
                    to="/projects/completed"
                    onClick={() => setMenuOpen(false)}
                >
                    Completed
                </Link>

                <Link
                    to="/contact"
                    onClick={() => setMenuOpen(false)}
                >
                    Contact
                </Link>

            </div>

        </nav>
    );
};


export default Navbar;