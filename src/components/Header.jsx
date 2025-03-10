import { NavLink } from "react-router-dom";
import "../index.css";

function Header() {
  return (
    <nav className="navBar">
      <ul className="nav-list">
        <li>
          <NavLink
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active-link" : "")
            }
            exact
            to="/"
          >
            Petit Suisse
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active-link" : "")
            }
            exact
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active-link" : "")
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active-link" : "")
            }
            to="/Quiz"
          >
            Quiz
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active-link" : "")
            }
            to="/why-us"
          >
            Why Us
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active-link" : "")
            }
            to="/contact-us"
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
