import './style.scss';
import devzone from '../../assets/img/devzone.png';
import pomodoro from '../../assets/img/pomodoro.png';
import morpion from '../../assets/img/morpion.png';
import snake from '../../assets/img/snake.png';
import pokedex from '../../assets/img/pokedex.png';
import kanban from '../../assets/img/kanban.png';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { BsArrowUpRightCircle } from 'react-icons/bs';

function Projet({name, projet}) {

  let image = undefined;

  switch (projet.name) {
    case 'DevZone': {
      image = devzone
      break;
    }
    case 'Pomodoro': {
      image = pomodoro
      break;
    }
    case 'Morpion': {
      image = morpion
      break;
    }
    case 'Snake Game': {
      image = snake
      break;
    }
    case 'Pokédex' : {
      image = pokedex
      break;
    }
    case 'Kanban' :{
      image = kanban
      break;
    }

    default:
      break;
  }


  return (
    <article className='projetContainer'>

      <div className='description-projet-container'>
        <p className='projetDescription'>{projet.description}</p>


        <div className='linkContainer'>
        {
          projet.links.github ? (
            <Link to={projet.links.github} className='projetLink' target='_blank'> Voir sur GitHub <FaGithub size="2rem" /> </Link> 
          ) : undefined
        }

        {
          projet.links.online ? (
        <Link to={projet.links.online} className='projetLink' target='_blank'> Voir en ligne <BsArrowUpRightCircle size="2rem" /> </Link> 
          ) : undefined
        }        
        </div>        
      </div>


      <img className='projetImage' src={image} alt="projet" />


    </article>
  );
}

export default Projet;
