import sun from "./../../assets/icons/sun.svg"
import moon from "./../../assets/icons/moon.svg"
import { NavLink } from "react-router-dom"
import './navbar.css'

const Navbar = () => {

    const activeLink = 'nav-list__link nav-list__link--active'
    const normalLink = 'nav-list__link'

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
                        <NavLink to="/" className={({isActive}) => isActive ? activeLink : normalLink}>
                            Home
                        </NavLink>

                        <NavLink to="/projects" className={({isActive}) => isActive ? activeLink : normalLink}>
                            Projects
                        </NavLink>

                        <NavLink to="/contacts" className={({isActive}) => isActive ? activeLink : normalLink}>
                             Contacts
                        </NavLink>
                    </ul>
                </div>
            </div>
      </nav>
     );
}
 
export default Navbar;