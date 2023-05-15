import './style.scss';
import Projet from './Projet';
import listProjets from './listProjets';
import { useState } from 'react';

function Realisations() {


  const [selectedProject, setSelectedProject] = useState('DevZone');

  const handleChangeProject = (event) => { 
    setSelectedProject(event.target.value);
  };


  return (
    <section id='page-realisations' className='realisationSection'>

      <div className='realisationTitle'>
        Réalisations
      </div>

      <div className="realisationContainer">
        {
          listProjets.map((projet) => (

            <button onClick={handleChangeProject} key={projet.id} value={projet.name} className={
              selectedProject === projet.name ? 'projetTitle selected' : 'projetTitle'
            }>{projet.name} </button>
          ))
        }
      </div>

      {
        <Projet name={selectedProject} projet={
          listProjets.find((projet) => projet.name === selectedProject)
        } />
      }
    
    </section>
  );
}

export default Realisations;
