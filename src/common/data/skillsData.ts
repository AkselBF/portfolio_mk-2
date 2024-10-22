// White icons
import HtmlIcon from '../../assets/icons/HtmlIcon.png';
import CssIcon from '../../assets/icons/CssIcon.png';
import JavascriptIcon from '../../assets/icons/JsIcon.png';
import BootstrapIcon from '../../assets/icons/BootstrapIcon.png';
import SassIcon from '../../assets/icons/SassIcon.png';
import TailwindIcon from '../../assets/icons/TailwindIcon.png';
import ReactIcon from '../../assets/icons/ReactIcon.png';
import TypescriptIcon from '../../assets/icons/skill_ts.png';
import SvelteIcon from '../../assets/icons/SvelteIcon.png';
import AngularIcon from '../../assets/icons/AngularIcon.png';
import JQueryIcon from '../../assets/icons/jquery_icon.png';
import NodeIcon from '../../assets/icons/nodejs_icon.png';
import VueIcon from '../../assets/icons/vuejs_icon.png';
import TrelloIcon from '../../assets/icons/TrelloIcon.png';
import FigmaIcon from '../../assets/icons/FigmaIcon.png';
import DigitalArtIcon from '../../assets/icons/ArtIcon.png';
import DrawingIcon from '../../assets/icons/DrawIcon.png';
import ContrastIcon from '../../assets/icons/ContrastIcon.png';
import PixelIcon from '../../assets/icons/PixelartIcon.png';
import BlenderIcon from '../../assets/icons/BlenderIcon.png';

// Colored icons
import HtmlColor from '../../assets/icons_color/html_color.png';
import CssColor from '../../assets/icons_color/css_color.png';
import JsColor from '../../assets/icons_color/js_color.png';
import BootstrapColor from '../../assets/icons_color/skill_bootstrap_color.png';
import SassColor from '../../assets/icons_color/sass_two_color.png';
import TailwindColor from '../../assets/icons_color/tailwind_color.png';
import ReactColor from '../../assets/icons_color/react_color.png';
import TsColor from '../../assets/icons_color/ts_color.png';
import SvelteColor from '../../assets/icons_color/svelte_color.png';
import AngularColor from '../../assets/icons_color/angular_color.png';
import JqueryColor from '../../assets/icons_color/jquery_color.png';
import NodeColor from '../../assets/icons_color/node_color.png';
import VueColor from '../../assets/icons_color/vuejs_color.png';
import TrelloColor from '../../assets/icons_color/trello_color.png';
import FigmaColor from '../../assets/icons_color/figma_color.png';
import DigiArtColor from '../../assets/icons_color/paint_color.png';
import DrawingColor from '../../assets/icons_color/paper_color.png';
import ContrastColor from '../../assets/icons_color/contrast_color.png';
import PixelColor from '../../assets/icons_color/pixel_color.png';
import BlenderColor from '../../assets/icons_color/blender_color.png';

export const skillsData = {
  Frontend: [
    { 
      name: "HTML", 
      iconWhite: HtmlIcon, 
      iconColor: HtmlColor,
      color: "#F1662A", // #E44F26, #EBEBEB, #F1662A, #FFFFFF
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML", 
      description: "HTML (HyperText Markup Language) is the backbone of web development, used to structure content on the web. I use HTML to create the foundational layout and content of web pages, ensuring that all elements like text, images, and links are properly arranged and accessible. After learning React, HTML is used less but more efficiently." 
    },
    { 
      name: "CSS", 
      iconWhite: CssIcon, 
      iconColor: CssColor,
      color: "#33A9DC", // #1572B6, #EBEBEB, #33A9DC, #FFFFFF
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS", 
      description: "CSS (Cascading Style Sheets) is responsible for styling web pages. I use CSS to define the look and feel of websites, including colors, fonts, layouts, and responsive designs. It's essential for making websites visually appealing and user-friendly. It quickly became less used after I learned to use other design frameworks such as Tailwind." 
    },
    { 
      name: "Javascript", 
      iconWhite: JavascriptIcon, 
      iconColor: JsColor,
      color: "#F5DE19", 
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", 
      description: "JavaScript is a programming language that enables dynamic functionality on websites. I use JavaScript to handle interactive elements like forms, animations, and event-driven behaviors, making web pages more engaging and responsive to user input. To this day, javascript remains my primary programming language." 
    },
    { 
      name: "Bootstrap", 
      iconWhite: BootstrapIcon, 
      iconColor: BootstrapColor,
      color: "#7E13F8",
      link: "https://getbootstrap.com/", 
      description: "Bootstrap is a popular CSS framework for building responsive and mobile-first websites. I use Bootstrap to quickly prototype and style web pages, leveraging its pre-built components like navigation bars, modals, and grids for consistent and responsive design." 
    },
    { 
      name: "Sass", 
      iconWhite: SassIcon, 
      iconColor: SassColor,
      color: "#CD6799",
      link: "https://sass-lang.com/", 
      description: "Sass (Syntactically Awesome Stylesheets) is a CSS preprocessor that adds features like variables, nesting, and mixins. I use Sass to write more maintainable and organized CSS, especially in larger projects where complex styling is required. It's a definite upgrade over pure CSS but in my humble opinion, tailwind is better." 
    },
    { 
      name: "Tailwind", 
      iconWhite: TailwindIcon, 
      iconColor: TailwindColor,
      color: "#44A8B3",
      link: "https://tailwindcss.com/", 
      description: "Tailwind CSS is a utility-first CSS framework that allows for rapid UI development. I use Tailwind to apply atomic styles directly in the HTML, making it easier to build custom designs quickly without writing traditional CSS rules. Tailwind became one of my favorite design framework. Nearly all of my frontend projects use it." 
    },
    { 
      name: "React", 
      iconWhite: ReactIcon, 
      iconColor: ReactColor,
      color: "#00D8FF",
      link: "https://react.dev/", 
      description: "React is a JavaScript library for building user interfaces, particularly single-page applications. I use React to create dynamic and reusable UI components, manage application state, and handle complex interactions efficiently. As React is a very popular framework and nowadays, most of my projects use it." 
    },
    { 
      name: "Typescript", 
      iconWhite: TypescriptIcon, 
      iconColor: TsColor,
      color: "#007ACC",
      link: "https://www.typescriptlang.org/", 
      description: "TypeScript is a superset of JavaScript that adds static typing. I use TypeScript to improve code reliability and maintainability by catching potential errors at compile time, especially in larger or more complex React projects. Over tiome, the more I used it, the more I liked it." 
    },
    { 
      name: "Svelte", 
      iconWhite: SvelteIcon, 
      iconColor: SvelteColor,
      color: "#FF3E00",
      link: "https://svelte.dev/", 
      description: "Svelte is a framework that compiles components down to highly efficient vanilla JavaScript at build time. I use Svelte to create highly performant web applications with minimal overhead, focusing on simplicity and speed. Although I use mostly for shorter projects." 
    },
    { 
      name: "Angular", 
      iconWhite: AngularIcon, 
      iconColor: AngularColor,
      color: "#DD0031", // #C3002F, #DD0031, #FFFFFF
      link: "https://angular.dev/", 
      description: "Angular is a full-fledged front-end framework developed by Google. Whenever I get the chance, I use Angular to handle complex data binding, dependency injection, and routing for applications that require robust architecture." 
    },
    { 
      name: "JQuery", 
      iconWhite: JQueryIcon, 
      iconColor: JqueryColor,
      color: "#0868AC",
      link: "https://jquery.com/", 
      description: "jQuery is a fast, small, and feature-rich JavaScript library that simplifies HTML DOM manipulation, event handling, and animations. I use jQuery for adding quick interactivity to legacy projects or when working with older systems where React or other modern frameworks aren't necessary." 
    },
    { 
      name: "Node.js", 
      iconWhite: NodeIcon, 
      iconColor: NodeColor,
      color: "#539E43", // #41873F, #54A044, #66B848, #6CC04A
      link: "https://nodejs.org/en", 
      description: "Node.js is a JavaScript runtime built on Chrome's V8 engine that allows JavaScript to be run server-side. I use Node.js to create server-side applications and APIs, handle requests, manage databases, and serve content for full-stack JavaScript applications." 
    },
    { 
      name: "Vue.js", 
      iconWhite: VueIcon, 
      iconColor: VueColor,
      color: "#41B883", // #41B883, #35495E
      link: "https://vuejs.org/", 
      description: "Vue.js is a progressive JavaScript framework for building user interfaces. I use Vue.js to build reactive web applications with a simple and flexible architecture, especially for projects that need an easy-to-learn framework with strong community support." 
    },
    { 
      name: "Trello", 
      iconWhite: TrelloIcon, 
      iconColor: TrelloColor,
      color: "#2684FF", // #2684FF, #0052CC, #FFFFFF
      link: "https://trello.com/", 
      description: "Trello is a project management tool based on the Kanban method. Trello is something I like to use when organizing and tracking development tasks, manage project timelines, and collaborate with teams in an agile workflow. No project, let alone team-based projects can truly reach their peak without a solid foundation." 
    },
  ],
  Backend: [],
  Design: [
    { 
      name: "Figma", 
      iconWhite: FigmaIcon, 
      iconColor: FigmaColor,
      color: "#A259FF", // #0ACF83, #1ABCFE, #A259FF, #F24E1E, #FF7262
      link: "", 
      description: "Figma is a design platform used to design and create prototypes for whatever project you're working on. Figma can be used to make wireframes to plan the project structure, make a replica of how you plan to design your application, use certain features to simulate potential functions such as button effects or animations. I love Figma and I always use it before making an application." 
    },
    { 
      name: "Digital art", 
      iconWhite: DigitalArtIcon, 
      iconColor: DigiArtColor,
      color: "#42A4FF", // #42A4FF, #276299
      link: "", 
      description: "Digital art is something of a hobby of mine I use either professionally or just to enjoy it. When painting, I use a program called Clip Studio Paint - a more art focused version of Adobe. But what matters is how I use it in frontend. I can make completely original artwork to give my project greater identity, and with Figma, The possibilies remain unseen." 
    },
    { 
      name: "Drawing", 
      iconWhite: DrawingIcon, 
      iconColor: DrawingColor,
      color: "#D9D9D9", // #D9D9D9, #FC6714
      link: "", 
      description: "Like with digital paing, drawing is more of a hobby, but can be used pratically. Besides improving my precision the more I draw, it also helps me make great wireframes for projects. While I realize I can use Figma to do the same, I personally think it helps me more to have everything on paper in front of me." 
    },
    { 
      name: "Contrast", 
      iconWhite: ContrastIcon, 
      iconColor: ContrastColor,
      color: "#2F88FF", // #2F88FF, #43CCF8, #FFFFFF
      link: "", 
      description: "Over my studies in frontend development, I've learned to use colors to create great contrasts as any good designers should. This may be a simple skill on paper but correct use of colors are paramount when making apps and can mean the difference between a positive and a negative review from your client." 
    },
    { 
      name: "Pixel art",
      iconWhite: PixelIcon, 
      iconColor: PixelColor,
      color: "#23E5FF",
      link: "", 
      description: "Pixel art is far more of a hobby than anything else and belongs more in the video game category. I always found this style to be quite charming and has tickled my tastes for JRPGs. I can't determine a common use for it in my current studies besides maybe making unique pictures but who knows. How creatively you use your skills can amount to something great after all." 
    },
    { 
      name: "Blender", 
      iconWhite: BlenderIcon, 
      iconColor: BlenderColor,
      color: "#E87500", // #235785, #E87500
      link: "", 
      description: "Blender is a well-known and powerful open-source 3D creation suite that supports the entirety of the 3D pipeline, including modeling, animation, simulation, rendering, compositing, and video editing. I use Blender to create 3D assets for web applications and games, enabling me to design visually engaging graphics and animations that enhance the user experience." 
    },
  ],
};