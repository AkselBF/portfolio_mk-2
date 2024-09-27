import intro_holidaze from '../../assets/images/intro_holidaze_2.png';
import logo_holidaze from '../../assets/icons/Holidaze_logo.png';
import holidaze from '../../assets/images/holidaze.png';
import intro_dbd from '../../assets/images/intro_dbd.png';
import dropByDrop from '../../assets/images/dropByDrop.png';
import logo_dbd from '../../assets/icons/dbd_logo.png';
import intro_dna from '../../assets/images/intro_dna.png';
import dna from '../../assets/images/dna.png';
import logo_dna from '../../assets/icons/dna_logo.png';
import intro_ecom from '../../assets/images/intro_ecom.png';
import ecom from '../../assets/images/ecom.png';
import logo_ecom from '../../assets/icons/ecom_logo.png';
import intro_science from '../../assets/images/intro_science.png';
import science from '../../assets/images/museum_2.jpg';
import logo_science_l from '../../assets/icons/science_logo_light.png';

export const projects = [
  {
    id: 5,
    title: 'Holidaze',
    appUrl: 'https://heroic-capybara-f5b72b.netlify.app/',
    githubUrl: 'https://github.com/AkselBF/holidaze',
    imageUrl: intro_holidaze,
    appLogo: logo_holidaze,
    sideImage: holidaze,
    introduction: "An app featuring a holiday-themed booking system. Language and frameworks being JS React, Typescript for coding and Tailwind for styling.",
    description: "Holidaze is an app featuring a holiday-themed booking system. This Project was a take on a newly launched accommodation booking site called Holidaze. The goal was of course to fulfill several requirements and work with the official API documentation in order to plan, design and build a modern front end accommodation booking application, but while prioritizing these requirements, I decided to add other features to make the application as appeling and user-friendly as possible. I wanted to give a true holiday feel to the app and make sure users understood that as they navigate through the website. This app was made via the feedback of many users after a few tests until as many details as possible were fixed.",
    details: "This project was made possible with the use of JS React, Typescript for coding and making use of the API. For styling, I used Tailwind. Other external resources include mui for Icons and other PNGs/JPGs I obtained from design tools like Figma.",
  },
  {
    id: 4,
    title: 'JS frameworks',
    appUrl: 'https://leafy-macaron-b29a6e.netlify.app/',
    githubUrl: 'https://github.com/AkselBF/js_frameworks_ca',
    imageUrl: intro_ecom,
    appLogo: logo_ecom,
    sideImage: ecom,
    introduction: "A small application with the main goal to test React. Language and frameworks being JS React for coding and Tailwind for styling.",
    description: "A small application with the main goal to test React. There's nothing too new compared to the previous projects design-wise, but the application itself works smoothly. The application does, of course, make use of an API provided by Noroff. Seeing as this was a relatively small project, I didn't focus all that much on design and focused mainly on learning how to best use React from this point onward.",
    details: "This is the first project I tried to make with React. Other than that I simply used Tailwind to style the app. This project was all about testing React in every way I could to best experiment with it. This project also focused on unit-testing and e2e-testing.",
  },
  {
    id: 3,
    title: 'Day-Night Auction',
    appUrl: 'https://akselbf.github.io/Semester_Project_2/',
    githubUrl: 'https://github.com/AkselBF/Semester_Project_2',
    imageUrl: intro_dna,
    appLogo: logo_dna,
    sideImage: dna,
    introduction: "An auction-based app with heavy use of api. Uses JS for coding and Tailwind for styling.",
    description: "An auction-based app with heavy use of api. This project was about making an auction-based application where the user could participate in online auctions. As the previous description mentioned, this project heavily makes use of API to work properly. In the app, the user could attempt to buy items if they had credits ( user always starts with 1000 credits ), or add an item attempting to sell them in order to gain credits. This Application makes use of an api documentation Noroff provides.",
    details: "Along with heavy focus on API, this project uses JS for coding and Tailwind for styling. Other external resources such as icons mostly come from fontawesome.",
  },
  {
    id: 2,
    title: 'Drop by drop',
    appUrl: 'https://hilarious-madeleine-1abb00.netlify.app/',
    githubUrl: 'https://github.com/AkselBF/project-exam-1-AkselBF',
    imageUrl: intro_dbd, 
    appLogo: logo_dbd,
    sideImage: dropByDrop,
    introduction: "An application featuring water. Uses JS for coding and CSS for styling.",
    description: "This is an app about the importance of water and why each and every other human being on the planet should treat it with the utmost care. When choosing this topic, I wanted to make something informative, appealing and functional for a change, and present something I personally think is extremely important.", 
    details: "This project uses HTML, CSS and Javascript, makes it the first project I used intermediate coding tehniques. This is also the first project where I used API. I wanted to make a user-friendly application that the user could immerse themselves into.",
  },
  {
    id: 1,
    title: 'Community Science Museum',
    appUrl: 'https://super-sherbet-88e920.netlify.app/',
    githubUrl: 'https://github.com/AkselBF/Community_Science_Museum',
    imageUrl: intro_science,
    appLogo: logo_science_l,
    sideImage: science,
    introduction: "An app about a science museum. This app uses HTML and CSS.",
    description: "An app featuring a science museum and one of my first works. Uses only html and css. You will find many sorts of designs and themes befitting a science museum. Again, being the first project, means there's not a lot of technique involved regarding javascript. This is a project solely focused on design.",
    details: "This project is simply a test of design choices using HTML and CSS as its primary languages. The goal here was to make the application as visually appealing as possible through colors, contrasts, fonts and images.",
  },
];