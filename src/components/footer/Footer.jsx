import vk from "./../../assets/icons/vk.svg"
import twitter from"./../../assets/icons/twitter.svg"
import github from "./../../assets/icons/gitHub.svg"
import instagram from "./../../assets/icons/instagram.svg"
import linkedin from "./../../assets/icons/linkedIn.svg"
import './footer.css'

const Footer = () => {
    return ( 
    <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                 <ul className="social">
                    <li className="social__item"><a href="#!"><img src={vk} alt="VK" /></a></li>
                    <li className="social__item"><a href="#!"><img src={instagram} alt="Instagram" /></a></li>
                    <li className="social__item"><a href="#!"><img src={twitter} alt="Twitter" /></a></li>
                    <li className="social__item"><a href="https://github.com/Teamofeyy"><img src={github} alt="GitHub" /></a></li>
                    <li className="social__item"><a href="#!"><img src={linkedin} alt="LinkedIn" /></a></li>
                 </ul>
                <div className="copyright">
                    <p>© Teamofeyy 2024</p>
                </div>
            </div>
         </div>
    </footer>
     );
}
 
export default Footer;