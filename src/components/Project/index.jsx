import ViewButton from '../ViewButton';
import { BsBoxArrowUpRight, BsGithub } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import './styles.css';

const Project = ({ project, index }) => {
  const { t } = useTranslation();

  return (
    <div className="project_container">
      <h2 className="project_title">
        {t(`portfolio.projects.${index}.title`)}
      </h2>
      <a
        href={project.url_website}
        className="project_image_container"
        target="_blank"
        title={`${t('portfolio.text_view_project')} ${t(
          `portfolio.projects.${index}.title`
        )}`}
        rel="noreferrer"
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
        <ViewButton href={project.url_github} Icon={BsGithub}>
          {t('portfolio.text_view_code')}
        </ViewButton>
        <ViewButton href={project.url_website} Icon={BsBoxArrowUpRight}>
          {t('portfolio.text_view_project')}
        </ViewButton>
      </div>
    </div>
  );
};

export default Project;
