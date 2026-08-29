import { Link } from "react-router-dom";


const Navbar = () => {

    return (

        <nav>

            <Link to="/">
                Katkar Constructions
            </Link>


            <div>

                <Link to="/">
                    Home
                </Link>

                <Link to="/about">
                    About
                </Link>

                <Link to="/services">
                    Services
                </Link>

                <Link to="/projects/upcoming">
                    Upcoming
                </Link>

                <Link to="/projects/ongoing">
                    Ongoing
                </Link>

                <Link to="/projects/completed">
                    Completed
                </Link>

                <Link to="/contact">
                    Contact
                </Link>

            </div>

        </nav>
    );
};


export default Navbar;