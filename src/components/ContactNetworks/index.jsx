import ListSocialNetworks from '../ListSocialNetworks';
import './styles.css';

const ContactNetworks = () => {
  return (
    <>
      <div className="left">
        <ListSocialNetworks />
      </div>
      <div className="right">
        <div>
          <a href="mailto:alexistoba21@gmail.com">alexistoba21@gmail.com</a>
        </div>
      </div>
    </>
  );
};

export default ContactNetworks;
