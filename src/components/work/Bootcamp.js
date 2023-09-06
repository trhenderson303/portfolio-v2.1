import React, { useRef } from "react";
import "../../styles/work.css";
import PortfolioCard from "../PortfolioCard";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Bootcamp() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.5, 0.6], [0, 1, 1, 0]);
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 0.58 ? "sticky" : "realitve";
     
  });

  const techProjects = [
    {
      title: "Fruit Finder",
      img: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      link: "https://fruit-finder-f298ed9223ea.herokuapp.com/",
      github: "https://github.com/ThePebble01/fruit-finder",
      info: "A Social Media App for fruit lovers!",
    },
    {
      title: "PetPal",
      img: "https://images.unsplash.com/photo-1594499468121-f45e83e30df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1325&q=80",
      link: "https://outlawdisco.github.io/Pet-Pal/",
      github: "https://github.com/OutlawDisco/Pet-Pal",
      info: "A personal assistant app to help manage all of your pet's needs.",
    },
    {
      title: "The Weather Times",
      img: "https://media.istockphoto.com/id/610666864/vector/global-warming-headline-newspaper-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=u9oHQFinPoFLz1FYYHzqSIj3hlKdS-c-J458PWMgsCQ=",
      link: "https://trhenderson303.github.io/weather-app/",
      github: "https://github.com/trhenderson303/weather-app",
      info: "A weather dashboard inspired by vintage newspaper",
    },
    {
      title: "Budgie",
      img: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      link: "https://budgie-c967e4a5fd01.herokuapp.com/",
      github: "https://github.com/eqmccullough/cache-money",
      info: "A personal assistant app to help you budget responsibly.",
    },
    {
      title: "JavaScript Quiz",
      img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      link: "https://trhenderson303.github.io/javascript-quiz/",
      github: "https://github.com/trhenderson303/javascript-quiz",
      info: "A basic JavaScript quiz game.",
    },
    {
      title: "Note Taker App",
      img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      link: "https://evening-atoll-78738-5833f2c377ad.herokuapp.com/",
      github: "https://github.com/trhenderson303/JATE",
      info: "The only note taking app you will ever need!",
    },
  ];

  return (
    <div className="portfolio-page">
          <div className="work-subhead sticky"> Full-stack Bootcamp </div>
          <motion.p className="work-info" ref={ref} style={{ opacity, position }}>
            In the spring of 2023, I enrolled in a full-stack bootcamp through the University of Denver and EdX to jumpstart a new career in web development and design. Over the course of the 3-month program I was able to learn through hands-on projects, working both collaboratively and individually to create a variety of digital applications. 
          </motion.p>
          <div className="card-box buffer">
            {techProjects.map((project, index) => (
              <PortfolioCard
                key={index}
                title={project.title}
                img={project.img}
                link={project.link}
                info={project.info}
                github={project.github}
              />
            ))}
          </div>
        </div>
  );
}