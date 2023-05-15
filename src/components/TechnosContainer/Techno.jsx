import { useRef, useState } from 'react';
import './style.scss';

import { FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaReact, FaSass, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiPostgresql, SiVisualstudiocode } from 'react-icons/si';


function Techno({name, itemColor, description, setSelectTechno}) {
  const technoLogo = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3Alt />,
    JavaScript: <FaJsSquare />,
    NodeJS: <FaNodeJs />,
    React: <FaReact />,
    PostgreSQL: <SiPostgresql />,
    Sass: <FaSass />,
    Git: <FaGitAlt />,
    GitHub: <FaGithub />,
    'Visual Studio Code': <SiVisualstudiocode />
  }

  const [active, setActive] = useState(false);

  const buttonRef = useRef(null);

    function animateButton() {
    setSelectTechno(description)
    setActive(true)
    setTimeout(function () {
      setActive(false);
    }, 500);
  }


  return (
    <section 
      ref={buttonRef} 
      className={`Techno bubbly-button ${active ? 'animate' : ''}`} 
      onClick={animateButton} 
    >

      <div
        className="bubbly-button_before"
        style={{
          backgroundImage: `radial-gradient(circle, ${itemColor} 20%, transparent 20%), radial-gradient(circle, transparent 20%, ${itemColor} 20%, transparent 30%), radial-gradient(circle, ${itemColor} 20%, transparent 20%), radial-gradient(circle, ${itemColor} 20%, transparent 20%), radial-gradient(circle, transparent 10%, ${itemColor} 15%, transparent 20%), radial-gradient(circle, ${itemColor} 20%, transparent 20%), radial-gradient(circle, ${itemColor} 20%, transparent 20%), radial-gradient(circle, ${itemColor} 20%, transparent 20%), radial-gradient(circle, ${itemColor} 20%, transparent 20%)`
        }}
      />


        <span className="Techno-icon" style={{color: `${itemColor}`}}>
          {technoLogo[name]}
        </span>
        <p className='Techno-name'>{name}</p> 


        <div
        className="bubbly-button_after"
        style={{
          backgroundImage: `radial-gradient(circle, ${itemColor} 20%, transparent 20%), radial-gradient(circle, ${itemColor} 20%, transparent 20%), radial-gradient(circle, transparent 10%, ${itemColor} 15%, transparent 20%), radial-gradient(circle, ${itemColor} 20%, transparent 20%), radial-gradient(circle, ${itemColor} 20%, transparent 20%), radial-gradient(circle, ${itemColor} 20%, transparent 20%), radial-gradient(circle, ${itemColor} 20%, transparent 20%)`
        }}
      />

    </section>
  );
}

export default Techno;
