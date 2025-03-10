import { NavLink } from "react-router-dom";
import "../index.css";

function Header() {
  return (
    <nav className="navBar">
      <ul className="nav-list" >
        <li>
          <NavLink activeClassName="active-link" className="nav-link"
            exact
            to="/"
          >
            Petit Suisse
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active-link" className="nav-link"
            exact
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active-link" className="nav-link"
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active-link" className="nav-link"
            to="/Quiz"
          >
            Quiz
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active-link" className="nav-link"
            to="/why-us"
          >
            Why Us
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active-link" className="nav-link"
            to="/contact-us"
          >
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/store" activeClassName="active-link" className="nav-link">
            Store
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
