import { projects } from '../../constans/projects.js';
import Project from '../Project/index.jsx';
import './styles.css';

const ListOfProjects = () => {
  return (
    <div className="projects_container">
      {projects.map((project, index) => (
        <Project key={project.img} project={project} index={index} />
      ))}
    </div>
  );
};

export default ListOfProjects;
