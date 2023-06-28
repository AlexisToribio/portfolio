import { rrss } from '../../constans/rrssList.js';
import ItemSocialNetwork from '../ItemSocialNetwork';

const ListSocialNetworks = () => {
  return (
    <ul>
      {rrss.map(({ Icon, href }) => (
        <ItemSocialNetwork key={href} icon={Icon} href={href} />
      ))}
    </ul>
  );
};

export default ListSocialNetworks;
