import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import './project.css'

const Project = ({title, img, index}) => {
    return ( 
        <NavLink to={`/project/${index}`}>
            <li className="project">
                    <img src={img} alt={title} className="project__img" />
                    <h3 className="project__title">{title}</h3>
            </li>
        </NavLink>
     );
}

    Project.propTypes = {
        img: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        index: PropTypes.number.isRequired,
    };


 
export default Project;