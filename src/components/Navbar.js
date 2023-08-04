import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <nav id="navbar">
      <div id="navDiv">
        <h4>TK</h4>
            <div id="navLinks">
                <Link to="/">About</Link>
                {/* <Link to="/skills">Skills</Link> */}
                <Link to="/projects">Projects</Link>
                {/* <Link to="/contact">Contact</Link> */}
                <a href="../assets/TrevorKuhnerResume2023">Resume</a>
            </div>
        
      </div>
    </nav>
  );
};
export default Navbar;
