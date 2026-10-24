import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {

  name = 'Manuel';
  role = 'Desarrollador Full Stack';
  bio = `Desarrollador de software enfocado en crear aplicaciones de principio a fin:
    🚀 Frontend: Interfaces interactivas y escalables con Angular.
    ⚙️ Backend & Datos: Arquitecturas seguras con .NET, Identity, Entity Framework, SQL Server y PostgreSQL.
    ☁️ Cloud & Analítica: Despliegues en Azure y Análisis de Datos.`;

  technologies = [
    'Angular', 'TypeScript', 'JavaScript',
    'HTML5', 'CSS3', 'Git', 'GitHub',
    'C#', '.NET', 'Entity Framework', 'Identity Framework Core',
    'PowerBI', 'Sentry', 'Docker',
    'SQLServer', 'PostgreSQL',
    'Azure', 'Heroku'
  ];

  projects = [
    {
      title: 'StudyFlow - Frontend',
      description: 'aplicación para organizar materias y tareas académicas.',
      githubLink: 'https://github.com/radiohead42/StudyFlowFrontend',
      tags: ['Angulaer', 'TypeScript', 'Angular Material'],
      demoLink: 'https://ashy-pond-02f21d710.6.azurestaticapps.net/login'
    },
    {
      title: 'StudyFlow - Backend',
      description: 'API RESTful para la gestión de materias y tareas académicas, con autenticación y autorización.',
      githubLink: 'https://github.com/radiohead42/StudyFlow',
      tags: ['C#', '.NET 10', 'Entity Framework Core', 'Identity Framework Core'],
      demoLink: 'https://study-flow-api-0320284aeca1.herokuapp.com/docs/'
    },
    {
      title: 'JSONPlaceholderAPI',
      description: 'API RESTful que simula un backend para pruebas y prototipos, utilizando JSONPlaceholder como fuente de datos.',
      githubLink: 'https://github.com/radiohead42/JSONPlaceholderAPI',
      tags: ['Angular', 'TypeScript', 'RxJS', 'Fake API'],
      demoLink: ''
    },
    {
      title: 'Dashboard Analítico',
      description: 'Panel de control con tablas interactivas usando Angular Material, incluyendo paginación, ordenamiento y filtrado en tiempo real.',
      githubLink: 'https://github.com/tu-usuario/angular-dashboard',
      tags: ['Angular Material', 'TypeScript', 'Fake Store API'],
      demoLink: ''
    }
  ];

}
