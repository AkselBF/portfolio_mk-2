import holidaze from '../../assets/images/holidaze.png';
import dropByDrop from '../../assets/images/dropByDrop.png';
import dna from '../../assets/images/dna.png';
import ecom from '../../assets/images/ecom.png';
import science from '../../assets/images/museum_2.jpg';

export const projects = [
  {
    id: 5,
    title: 'Holidaze',
    appUrl: 'https://heroic-capybara-f5b72b.netlify.app/',
    githubUrl: 'https://github.com/AkselBF/holidaze',
    imageUrl: holidaze,
    description: 'Holidaze is an app featuring a holiday-themed booking system',
    detailDescription: "This Project was a take on a newly launched accommodation booking site called Holidaze. The goal was of course to fulfill several requirements and work with the official API documentation in order to plan, design and build a modern front end accommodation booking application, but while prioritizing these requirements, I decided to add other features to make the application as appeling and user-friendly as possible. I wanted to give a true holiday feel to the app and make sure users understood that as they navigate through the website. This app was made via the feedback of many users after a few tests until as many details as possible were fixed.",
  },
  {
    id: 4,
    title: 'JS frameworks',
    appUrl: 'https://leafy-macaron-b29a6e.netlify.app/',
    githubUrl: 'https://github.com/AkselBF/js_frameworks_ca',
    imageUrl: ecom,
    description: 'This is a testing of javascript frameworks like react',
    detailDescription: "This project is a small application with the main goal to test React. There's nothing too new compared to the previous projects design-wise, but the application itself works smoothly. The application does, of course, make use of an API provided by Noroff. Seeing as this was a relatively small project, I didn't focus all that much on design and focused mainly on learning how to best use React from this point onward.",
  },
  {
    id: 3,
    title: 'Day-Night Auction',
    appUrl: 'https://akselbf.github.io/Semester_Project_2/',
    githubUrl: 'https://github.com/AkselBF/Semester_Project_2',
    imageUrl: dna,
    description: 'This is an auction-based app with heavy use of api',
    detailDescription: "This project was about making an auction-based application where the user could participate in online auctions. As the previous description mentioned, this project heavily makes use of API to work properly. In the app, the user could attempt to buy items if they had credits ( user always starts with 1000 credits ), or add an item attempting to sell them in order to gain credits. This Application makes use of an api documentation Noroff provides.",
  },
  {
    id: 2,
    title: 'Drop by drop',
    appUrl: 'https://hilarious-madeleine-1abb00.netlify.app/',
    githubUrl: 'https://github.com/AkselBF/project-exam-1-AkselBF',
    imageUrl: dropByDrop,
    description: 'This is an app about water. Mostly using html, css and js',
    detailDescription: "This is a project where I chose a certain theme, being water, where I was to make something informative, appealing and functional. Being a project that uses HTML, CSS and Javascript, makes it the first project I used intermediate coding tehniques. This is also the first project where I used API. I wanted to make a user-friendly application that the user could immerse themselves into. As a side bonus, I also wanted to share the importance of water.",
  },
  {
    id: 1,
    title: 'Community Science Museum',
    appUrl: 'https://super-sherbet-88e920.netlify.app/',
    githubUrl: 'https://github.com/AkselBF/Community_Science_Museum',
    imageUrl: science,
    description: 'An app featuring a science museum and one of my first works. Uses only html and css',
    detailDescription: "This app is simply a test of design choices using HTML and CSS as its primary languages. The goal here was to make the application as visually appealing as possible through colors, contrasts, fonts and images. You will find many sorts of designs and themes befitting a science museum. Again, being the first project, means there's not a lot of technique involved regarding javascript. This is a project solely focused on design.",
  },
];