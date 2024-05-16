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
    title: "About",
    url: "#about",
  },
  {
    id: "1",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "2",
    title: "Films",
    url: "#films",
  },
  {
    id: "3",
    title: "Theory",
    url: "#theory",
  },
  {
    id: "4",
    title: "Art",
    url: "#art",
  },
];

export const heroIcons = [rebel, sith, jedi, saber];

export const notificationImages = [notification4, notification3, notification2];

export const artcheck = ["Star Wars", "Internet Art", "Planning"];

export const roadmap = [
  {
    id: "0",
    title: "Wireframes",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2024",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Style Guide",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2024",
    status: "progress",
    imageUrl: roadmap3,
  },
  {
    id: "2",
    title: "UI & UX",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2024",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "3",
    title: "Why Star Wars?",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2024",
    status: "done",
    imageUrl: roadmap4,
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
    title: "Essay",
    description: "Pokemon",
    link: "#",
  },
  {
    id: "1",
    title: "Artwork Theory",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    link: "#",
  },
  {
    id: "2",
    title: "Independant Research",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    link: null,
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
    url: "https://github.com/Anand-Ramnarain/React-Website",
  },
];
