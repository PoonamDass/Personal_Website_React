import { NavLink } from "react-router-dom";

const NavBar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      role="navigation"
    >
      <span>
        <a href="https://github.com/PoonamDass">
          <i class="devicon-github-original colored nav-icon"></i>
        </a>
        <a href="https://www.linkedin.com/in/poonam-dass/">
          <i class="devicon-linkedin-plain colored nav-icon"></i>
        </a>
      </span>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navBarMenu"
        aria-controls="navBarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navBarMenu">
        <ul className="navbar-nav ms-auto">
          <li>
            <span>
              <button onClick={toggleDarkMode} class=" btn btn-small">
                {darkMode ? "🌞" : "🌙"}
              </button>
            </span>
          </li>
          <li className="nav-link">
            <NavLink exact to="/" class="nav-item">
              Home
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/projects" class="nav-item">
              Projects
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/faqs" class="nav-item">
              FAQs
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/contact" class="nav-item ">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
