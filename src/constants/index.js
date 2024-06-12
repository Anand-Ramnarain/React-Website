import {
  hope,
  attack,
  menace,
  returns,
  revenge,
  strike,
  jedi,
  rebel,
  notification2,
  notification3,
  notification4,
  sith,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  saber,
  github,
  arrow,
  css,
  light,
  java,
  githubs,
  reacts,
  order,
  sLogo,
  rebelLogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "/#hero",
  },
  {
    id: "1",
    title: "About",
    url: "/#about",
  },
  {
    id: "2",
    title: "Roadmap",
    url: "/#roadmap",
  },
  {
    id: "3",
    title: "Films",
    url: "/#films",
  },
  {
    id: "4",
    title: "Theory",
    url: "/#theory",
  },
  {
    id: "5",
    title: "Art",
    url: "/#art",
  },
];

export const heroIcons = [rebel, sith, jedi, saber];

export const notificationImages = [notification4, notification3, notification2];

export const artcheck = ["Star Wars", "Internet Art", "Planning"];

export const roadmap = [
  {
    id: "0",
    title: "Wireframes",
    text: "The creation of this website began with a different approach compared to traditional methods. Instead of starting with...",
    date: "May 2024",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
    url: "#wireframes",
  },
  {
    id: "1",
    title: "Style Guide",
    text: "When creating a compelling and user-friendly website, there must be a detailed consideration of various design elements...",
    date: "May 2024",
    status: "progress",
    imageUrl: roadmap3,
    url: "#style",
  },
  {
    id: "2",
    title: "UI & UX",
    text: "Creating an intuitive and engaging user interface (UI) and user experience (UX) for a website involves planning and...",
    date: "May 2024",
    status: "progress",
    imageUrl: roadmap2,
    url: "#ui",
  },
  {
    id: "3",
    title: "Why Star Wars?",
    text: "The Star Wars franchise, with its rich lore, iconic characters, and visually stunning universe, provides a stepping stone for...",
    date: "May 2024",
    status: "done",
    imageUrl: roadmap4,
    url: "#whystar",
  },
];

export const aboutText =
  "Once you start down the dark path, forever will it dominate your destiny. Consume you, it will.";

export const aboutContent = [
  {
    id: "0",
    title: "Star Wars",
  },
  {
    id: "1",
    title: "React",
  },
  {
    id: "2",
    title: "Web Development",
  },
];

export const aboutApps = [
  {
    id: "0",
    title: "CSS",
    icon: css,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "JavaScript",
    icon: java,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Github",
    icon: githubs,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Sabers",
    icon: light,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "React",
    icon: reacts,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Jedi Order",
    icon: order,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Sith Order",
    icon: sLogo,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Rebel",
    icon: rebelLogo,
    width: 38,
    height: 32,
  },
];

export const theorys = [
  {
    id: "0",
    title: "Analysis Of Net.Art",
    description:
      "Twitch Plays Pokémon (TPP) stands as an innovative example of net/web art, showing the relationship between technology, interactivity, and collective creativity. This project started in 2014 where it redefined the boundaries of traditional gaming by using the power of the internet to allow thousands of users to simultaneously control a single game of Pokémon. Through its unique approach, TPP expands the meaning of gaming and evolved into a net/web art form that engages with people on conceptual, aesthetic, and technical levels. This essay aims to examine Twitch Plays Pokémon within the context of net/web art, exploring its innovative use of...",
    link: "#essay",
  },
  {
    id: "1",
    title: "Artwork Theory",
    description:
      "In the realm of digital art, the merging of technology and creativity offers unique opportunities to create immersive and interactive experiences. One compelling concept that is drawn to me is to create an interactive, dynamic artwork that visualizes the iconic image of Darth Vader or the Star Wars logo using binary numbers. This artwork will progressively reveal the image on a black screen as the binary numbers appear, forming the image in real time. This section outlines the development process in theory, strengths and weaknesses, and the theoretical groundwork necessary for creating this piece using React. Which should evoke a sense of digital...",
    link: "#artresearch",
  },
  {
    id: "2",
    title: "Exam Research",
    description:
      "This week marked my return to work after the holiday break. During my time off, I took the opportunity to build my portfolio website using React. This experience gave me a head start in creating a React website for our exercises. While I found the process straightforward due to my prior experience, I encountered some challenges, particularly with pushing my project to GitHub Pages. This obstacle provided a valuable learning opportunity and highlighted areas for improvement in my workflow.A significant portion of this week was dedicated to understanding the concept of internet art, guided by the insightful reading, 'The Work of Art in the Age...",
    link: "#exam",
  },
];

export const movies = [
  {
    id: "0",
    backgroundUrl: "./src/assets/films/card-1.svg",
    imageUrl: hope,
  },
  {
    id: "1",
    backgroundUrl: "./src/assets/films/card-2.svg",
    imageUrl: strike,
    light: true,
  },
  {
    id: "2",
    backgroundUrl: "./src/assets/films/card-3.svg",
    imageUrl: returns,
  },
  {
    id: "3",
    backgroundUrl: "./src/assets/films/card-4.svg",
    imageUrl: menace,
    light: true,
  },
  {
    id: "4",
    backgroundUrl: "./src/assets/films/card-5.svg",
    imageUrl: attack,
  },
  {
    id: "5",
    backgroundUrl: "./src/assets/films/card-6.svg",
    imageUrl: revenge,
  },
];

export const socials = [
  {
    id: "0",
    title: "Github",
    iconUrl: github,
    url: "https://github.com/Anand-Ramnarain/React-Website",
  },
  {
    id: "1",
    title: "Website",
    iconUrl: arrow,
    url: "https://anand-ramnarain.github.io/React-Website/",
  },
];
