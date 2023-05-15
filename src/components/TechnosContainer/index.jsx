import { useState } from 'react';
import Techno from './Techno';

import './style.scss';


function TechnosContainer() {

  const [selectTechno, setSelectTechno] = useState('');


  const technologies = [
  {
    id: 1,
    name: 'HTML',
    itemColor: "#e44d26",
    description: "Le HyperText Markup Language, généralement abrégé HTML ou, dans sa dernière version, HTML5, est le langage de balisage conçu pour représenter les pages web."
  },
  {
    id: 2,
    name: 'CSS',
    itemColor: "#264de4",
    description: "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML."
  },
  {
    id: 3 ,
    name: 'Sass',
    itemColor: "#c69",
    description: "Sass est un langage de génération de feuilles de style. Il a été initialement conçu par Hampton Catlin et développé par Natalie Weizenbaum."
  },
  {
    id: 4,
    name: 'JavaScript',
    itemColor: "#f0db4f",
    description: "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs avec l'utilisation de Node.js."
  },
  {
    id: 5,
    name: 'NodeJS',
    itemColor: "#68a063",
    description: "Node.js est un environnement d'exécution single-thread, open-source et multi-plateforme permettant de créer des applications rapides et évolutives côté serveur et en réseau."
  },
  {
    id: 6,
    name: 'React',
    itemColor: "#61dafb",
    description: "React est une bibliothèque JavaScript libre développée par Facebook depuis 2013. Le but principal de cette bibliothèque est de faciliter la création d'application web monopage, via la création de composants dépendant d'un état et générant une page HTML à chaque changement d'état."
  },
  {
    id: 7,
    name: 'PostgreSQL',
    itemColor: "#336791",
    description: "PostgreSQL est un système de gestion de base de données relationnelle et objet. C'est un outil libre disponible selon les termes d'une licence de type BSD."
  },
  {
    id: 8,
    name: 'Git',
    itemColor: "#f34f29",
  },
  {
    id: 9,
    name: 'GitHub',
    itemColor: "#181717",
  }, 
  {
    id: 10,
    name: 'Visual Studio Code',
    itemColor: "#007acc",
  }
];


  return (
    <section id='page-technos' className='technoSection'>
      <div className='technoTitle'>

        Technologies
      </div>
      <div className="TechnosContainer">
        {
          technologies.map((techno) => (
          <Techno 
            key={techno.id} 
            setSelectTechno={setSelectTechno}
            {...techno} 
            />
          ))
        }
      </div>

    </section>

  );
}

export default TechnosContainer;
