import { rrss } from '../../constans/rrssList';
import { useTranslation } from 'react-i18next';
import './styles.css';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="footer_container">
      <ul>
        {rrss.map(({ Icon, href }) => (
          <li key={href}>
            <a href={href} target="_blank" rel="noreferrer">
              {Icon}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="https://github.com/AlexisToribio"
        className="credits"
        target="_blank"
        rel="noreferrer"
      >
        {t('credits')}
      </a>
    </div>
  );
};

export default Footer;
