import { FaArrowUp } from 'react-icons/fa';
import './styles.css';
import { useArrowUp } from '../../hooks/useArrowUp';

const ArrowUp = () => {
  const { isVisible } = useArrowUp();
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div
      className={`arrow_up ${isVisible && 'isVisible'}`}
      onClick={handleClick}
    >
      <FaArrowUp />
    </div>
  );
};

export default ArrowUp;
