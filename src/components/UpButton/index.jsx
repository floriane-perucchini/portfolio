import { NavHashLink } from 'react-router-hash-link';
import './style.scss';
import { AiOutlineArrowUp } from 'react-icons/ai';

function UpButton() {
  return (
    <NavHashLink smooth to='#page-presentation'>
      <button className='upButton'>
        <AiOutlineArrowUp size="2rem" />
      </button>
    </NavHashLink>
  );
}

export default UpButton;
