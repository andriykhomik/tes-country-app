import { PersonInformation } from '@shared/interfaces/person-information.interface';

export const aboutMe: PersonInformation = {
  name: 'Andrii',
  surname: 'Khomik',
  country: 'Ukraine',
  nationality: 'Ukrainian',
  locationCountry: 'Poland',
  position: 'angular developer',
  contacts: {
    tel: '+380680095867',
    linkedIn: 'https://www.linkedin.com/in/andrii-khomik-a07430221/',
    skype: 'andriy.khomik',
    email: 'andriykhomik1992@gmail.com',
  },
  hardSkills: [
    'Programming languages: JavaScript, TypeScript',
    'Experience with Angular 2-14, RxJs, NgRx, ES6+, HTML/CSS, SCSS, Tailwind, Angular Material, Firebase, MySQL, MongoDB',
    'Understanding of SOLID, DRY, KISS, OOP, DOM, Event Loop',
    'Confident usage of such tools as Webstorm,  Jira, Bitbucket, GitHub, Gitlab, ESLint/TSLint, Prettier, Figma, npm, ng-Сli',
  ],
  softSkills: [
    'Self-motivated and detail-oriented person',
    'Ability to work independently and self-organize',
    'Written and verbal English',
    'Familiarity with SCRUM and Agile methodologies',
    'Good interpersonal communication skills',
    'Able to be both a team player and a team leader',
    'Eager to learn new technologies and skills',
  ],
  languages: [
    { name: 'Ukrainian', level: 'native' },
    { name: 'Polish', level: 'fluent' },
    { name: 'English', level: 'intermediate' },
  ],

  interests: [
    'football',
    'volleyball',
    'ping-pong',
    'skiing',
    'swimming',
    'hiking',
    'traveling',
  ],
};
