import { useTranslation } from 'react-i18next';
import { projects } from '../../constans/projects.js';
import { BsBoxArrowUpRight, BsGithub } from 'react-icons/bs';
import './styles.css';

const ListOfProjects = () => {
  const { t } = useTranslation();

  return (
    <div className="projects_container">
      {projects.map((project, index) => (
        <div key={project.img} className="project_container">
          <h2 className="project_title">
            {t(`portfolio.projects.${index}.title`)}
          </h2>
          <a
            href="/"
            className="project_image_container"
            target="_blank"
            title={`${t('portfolio.text_view_project')} ${t(
              `portfolio.projects.${index}.title`
            )}`}
          >
            <img
              className="project_image"
              src={project.img}
              alt={t(`portfolio.projects.${index}.alt`)}
            />
            <BsBoxArrowUpRight className="icon_view_project" />
          </a>
          <p>{t(`portfolio.projects.${index}.description`)}</p>
          <ul className="project_technologies">
            {project.technologies.map((tech) => (
              <li key={tech + project.img}>{tech}</li>
            ))}
          </ul>
          <div className="buttons_container">
            <a href="/" className="button_view">
              <BsGithub className="icon_view" />
              <p>{t('portfolio.text_view_code')}</p>
            </a>

            <a href="/" className="button_view">
              <BsBoxArrowUpRight className="icon_view" />
              <p>{t('portfolio.text_view_project')}</p>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListOfProjects;
