import SwitchColorMode from '../SwitchColorMode';
import './style.scss';
import { NavHashLink } from 'react-router-hash-link';

function Header() {

  return (
    <header className="header">
      <section className='header__presentation'>
        <NavHashLink smooth to='/'  className='title'>
        <h1>Floriane Perucchini</h1>          
        </NavHashLink>

        <SwitchColorMode />
      </section>

      <nav className='header__navigation'>

          <NavHashLink 
            className='header__navigation-link'
            smooth
            to='/#page-technos' 
          >
            Technologies
          </NavHashLink>
          <NavHashLink 
            className='header__navigation-link'
            smooth
            to='/#page-realisations' 
          >
            Réalisations
          </NavHashLink>


      </nav>
    </header>
  );
}

export default Header;
