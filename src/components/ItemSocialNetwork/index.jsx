const ItemSocialNetwork = ({ icon: Icon, href }) => {
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer">
        {Icon}
      </a>
    </li>
  );
};

export default ItemSocialNetwork;
