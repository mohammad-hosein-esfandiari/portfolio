import aboutme from "../../assets/aboutme.png";
import profile from "../../assets/4.png";
import skills from "../../assets/skills.png";
import ex from "../../assets/experience.png";
import project from "../../assets/projects.png";
import { Profile } from "../../Components/sections/Profile/Profile";
import { Experience } from "../../Components/sections/Experience/Experience";
import { Projects } from "../../Components/sections/Projects/Projects";
import { Skills } from "../../Components/sections/Skills/Skills";
import { AboutMe } from "../../Components/sections/AboutMe/AboutMe";
export const boxArray = [
  {
    position: [0, 0, 3.7],
    rotation: [0, 0, 0],
    url: "profile",
    color: "#A30015",
    img: profile,
    component: Profile ,
  },
  {
    position: [-1.36, 0, 3],
    rotation: [0, 0, 0],
    url: "experience",
    color: "#533A7B",
    img: ex,
    component: Experience ,
  },
  {
    position: [-3.2, 0, 2.3],
    rotation: [0, 0, 0],
    url: "projects",
    color: "#B3B6B7",
    img: project,
    component: Projects ,
  },
  {
    position: [1.36, 0, 3],
    rotation: [0, 0, 0],
    url: "skills",
    color: "#533A7B",
    img: skills,
    component: Skills ,
  },
  {
    position: [3.2, 0, 2.3],
    rotation: [0, 0, 0],
    url: "aboutMe",
    color: "#B3B6B7",
    img: aboutme,
    component: AboutMe ,
  },
];
