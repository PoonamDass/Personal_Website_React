import {NavLink} from "react-router-dom"

const NavBar = () => {
    return (
        <nav class="navbar  navbar-expand-lg navbar-light bg-light">
            <NavLink exact to = "/"  class="nav-item nav-link ">Home</NavLink>
            <NavLink to="/projects"  class="nav-item nav-link ">Projects</NavLink>
            <NavLink to="/faqs"  class="nav-item nav-link ">FAQs</NavLink>
            <NavLink to="/contacts"  class="nav-item nav-link ">Contact</NavLink>
        </nav>
    )
}

export default NavBar