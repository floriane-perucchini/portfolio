

const listProjets = [
  {
    id: 1,
    name: 'DevZone',
    description:'DevZone est une application conçu pour aider les développeurs dans leur quotidien. Elle permet de centraliser ses recherches, ses tests et ses sources de veilles. Utilisable sans inscription, la création d\' un compte permet de sauvegarder ses données et si on le souhaite de relier son compte GitHub. ',
    technologies : [
      'React',
      'NodeJS',
      'PostgreSQL',
      'ChakraUI',
    ],
    links: {
        github: 'https://github.com/floriane-perucchini/devzone-front/tree/dev',
      
    }
  },
  {
    id: 2,
    name: 'Pomodoro',
    description:'Le pomodoro est une technique de gestion du temps qui permet de découper son travail en période de 25 minutes, séparées par de courtes pauses. Cette application permet de gérer ses pomodoro et d\'ajouter des tâches à réaliser. ',
    technologies : [
      'JavaScript',
    ],
    links: {
      github: 'https://github.com/floriane-perucchini/Pomodoro-App',
      online: 'https://pomodoro-app-beta.vercel.app/',
    }
  },
  {
  id: 4,
  name: 'Pokédex',
  description:'La création de ce pokédex m\'a permis de découvrir l\'API PokeAPI. J\'ai pu mettre en pratique mes connaissances en JavaScript et en CSS.',
  technologies: [
    'JavaScript'
  ],
  links: {
    github: 'https://github.com/floriane-perucchini/Pokedex',
    online: 'https://pokedex-five-orcin.vercel.app/index.html'
  
    }
  },
  {
    id: 5,
    name: 'Snake Game',
    description:'Voulant essayer de comprendre l\'utilisation des canvas, j\'ai décidé de créer un jeu de snake.',
    technologies: [
      'JavaScript'
    ],
    links: {
      github: 'https://github.com/floriane-perucchini/Snake',
      online: 'https://snake-game-floriane-perucchini.vercel.app/'
    }
  },
  {
    id: 6,
    name: 'Kanban',
    description:'Un kanban est un outil de gestion de projet qui permet de visualiser l\'avancement des tâches. Sur ce projet nous pouvons ajouter ou supprimer des listes et des cartes.',
    technologies: [
      'JavaScript',
      'NodeJS',
      'PostrgesSQL',
      'Bulma'
    ],
    links: {
      github: 'https://github.com/floriane-perucchini/Kanban-App-Front'
    }
  }
]

export default listProjets;