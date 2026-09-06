import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

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

                <NavLink
                    to="/"
                    end
                    onClick={() => setMenuOpen(false)}
                >
                    Home
                </NavLink>

                <NavLink
                    to="/about"
                    onClick={() => setMenuOpen(false)}
                >
                    About
                </NavLink>

                <NavLink
                    to="/services"
                    onClick={() => setMenuOpen(false)}
                >
                    Services
                </NavLink>

                <NavLink
                    to="/projects/upcoming"
                    onClick={() => setMenuOpen(false)}
                >
                    Upcoming
                </NavLink>

                <NavLink
                    to="/projects/ongoing"
                    onClick={() => setMenuOpen(false)}
                >
                    Ongoing
                </NavLink>

                <NavLink
                    to="/projects/completed"
                    onClick={() => setMenuOpen(false)}
                >
                    Completed
                </NavLink>

                <NavLink
                    to="/contact"
                    onClick={() => setMenuOpen(false)}
                >
                    Contact
                </NavLink>

            </div>

        </nav>
    );
};


export default Navbar;