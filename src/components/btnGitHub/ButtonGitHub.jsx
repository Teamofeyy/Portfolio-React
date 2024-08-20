import './ButtonGitHub.css'
import PropTypes from 'prop-types'
import gitImg from "./../../assets/icons/gitHub-black.svg"

const ButtonGitHub = (props ) => {
    return (  
        <a href={props.link} className="btn-outline">
            <img src={gitImg} alt="" />
            GitHub repo
        </a>
    );
}

ButtonGitHub.propTypes = {
    link: PropTypes.string.isRequired
}
 
export default ButtonGitHub;