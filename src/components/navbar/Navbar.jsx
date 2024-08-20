import sun from "./../../assets/icons/sun.svg"
import moon from "./../../assets/icons/moon.svg"
import { NavLink } from "react-router-dom"
import './navbar.css'

const Navbar = () => {

    return ( 
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to="/" className="logo">
                        <strong>Freelancer</strong> portfolio
                    </NavLink>

                    <button className="dark-mode-btn">
                        <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
                        <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
                    </button>

                    <ul className="nav-list">
                        <NavLink to="/" className="nav-list__link">
                            Home
                        </NavLink>

                        <NavLink to="/projects" className="nav-list__link">
                            Projects
                        </NavLink>

                        <NavLink to="/contacts" className="nav-list__link">
                             Contacts
                        </NavLink>
                    </ul>
                </div>
            </div>
      </nav>
     );
}
 
export default Navbar;