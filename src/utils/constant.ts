import { Iitem } from ".././types/data";
import { IServiceType } from ".././types/data";

export const items: Iitem[] = [
  {
    id: 1,
    img: "/p1.jpg",
    title: "Full Stack Furniture Application",
    desc: "A full-stack responsive furniture site built with React, TypeScript, Tailwind CSS, and Node.js. Includes email subscription, and clean UI using shadcn/ui. Deployed with Vercel and Render",
    github:"https://github.com/kavana77/furniture-app",
    link: "https://furniture-app-sable.vercel.app/",
  },
  {
    id: 2,
    img: "/p2.jpg",
    title: "School Management System",
    desc: "Lorem ipsum...",
    github:"/",
    link: "/",
  },
  {
    id: 3,
    img: "/p3.jpg",
    title: "Real-time Chat Application",
    desc: "Lorem ipsum...",
    github:"/",
    link: "/",
  },
  {
    id: 4,
    img: "/p4.jpg",
    title: "Social Media Project",
    desc: "Lorem ipsum...",
    github:"/",
    link: "/",
  },
  {
    id: 5,
    img: "/p5.jpg",
    title: "Animated Portfolio Website",
    desc: "Lorem ipsum...",
    github:"/",
    link: "/",
  },
];

export const services: IServiceType[] = [
  { id: 1, img: "/service1.png", title: "Web Development", counter: 35 },
  { id: 2, img: "/service2.png", title: "Product Design", counter: 23 },
  { id: 3, img: "/service3.png", title: "Branding", counter: 46 },
];
