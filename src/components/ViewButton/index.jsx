import './styles.css';

const ViewButton = ({ href, children, Icon = () => null }) => {
  return (
    <a href={href} className="button_view" target="_blank" rel="noreferrer">
      <Icon className="icon_view" />
      <p>{children}</p>
    </a>
  );
};

export default ViewButton;
