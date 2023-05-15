import './style.scss';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TbMailForward } from 'react-icons/tb';

function Footer() {
  return (
    <section className='footer'>
      <Link 
        className='footer__navigation-link' 
        to='https://github.com/floriane-perucchini' 
        target='_blank' 
        rel="noreferrer"
      > 
        <FaGithub className='footer__navigation-link-logo' />&nbsp;
        <span className='navigation-name'>
          Github
        </span>

      </Link>
      <Link 
        className='footer__navigation-link' 
        to='https://www.linkedin.com/in/floriane-perucchini/' 
        target='_blank' 
        rel="noreferrer"
      > 
          <FaLinkedin className='footer__navigation-link-logo' />&nbsp;
          <span className='navigation-name'>
            Linkedin
          </span>
      </Link>

      <Link 
        className='footer__navigation-link' 
        to='#' 
        target='_blank' 
        rel="noreferrer"
        onClick={(event) => {
          event.preventDefault();
          window.location.href = 'mailto:floriane.perucchini@gmail.com';
        }}
      > 
          <TbMailForward className='footer__navigation-link-logo' />&nbsp;
          <span className='navigation-name'>
            Me contacter
          </span>
      </Link>
    </section>
  );
}

export default Footer;
