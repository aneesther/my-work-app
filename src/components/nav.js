import "./Nav.css";
// import { Link } from "react-router-dom";
import {Link, useLocation } from "react-router-dom";


function Nav() {
  const { pathname } =useLocation();

  return (
    <nav>
        <div className="nav-sec">
            <p className="nav-title">OurApp</p>
            <div className="nav-nav">

                <Link to="/" 
                className= {pathname === "/" ? "active-link" : "inactive-link"}>
                    <p>Home</p>
                </Link>

                <Link to="/sign-in" 
                className={pathname === "/sign-in" ? "active-link" : "inactive-link"}>  
                <p>Sign In</p>
                </Link>

                <Link to="/sign-up" 
                className={pathname === "/sign-up" ? "active-link" : "inactive-link"}>  
                <p>Sign Up</p>
                </Link>

                <Link to="/profile" 
                className={pathname === "/profile" ? "active-link" : "inactive-link"}>  
                <p>Profile</p>
                </Link>
            
            </div>
        </div>
    </nav>
  );
}

export default Nav
