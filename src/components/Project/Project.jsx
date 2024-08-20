import './project.css'
import { PropTypes } from 'prop-types';

const Project = (props) => {
    return ( 
        <li className="project">
            <a href="./project-page.html">
                <img src={props.img} alt={props.title} className="project__img" />
                <h3 className="project__title">{props.title}</h3>
            </a>
        </li>
     );
}

    Project.propTypes = {
        img: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    };


 
export default Project;