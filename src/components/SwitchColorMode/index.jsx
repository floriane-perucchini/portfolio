import { useContext } from 'react';
import './style.scss';
import { DarkModeContext } from '../../context/darkModeContext';
import { MdOutlineLightMode, MdOutlineNightlight } from 'react-icons/md';

function SwitchColorMode() {

  const {darkMode, switchDarkMode} = useContext(DarkModeContext);

  const switchColorMode = () => {
    switchDarkMode();
  };

  return (
    <label className='switch'>
      <input type="checkbox" onChange={switchColorMode} />
      <span className="slider round "> 

        {
          darkMode === 'light' ?
            <MdOutlineNightlight size={'25px'} /> 
            : 
            <MdOutlineLightMode size={'25px'} />
        }

      </span>

    </label>
  );
}

export default SwitchColorMode;
