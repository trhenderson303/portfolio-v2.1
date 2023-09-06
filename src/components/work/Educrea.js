import React, { useRef } from "react";
import "../../styles/work.css";
import PortfolioCardB from "../PortfolioCardB";
import { useScroll, useTransform, motion } from "framer-motion";

// Project Links
import ClothesPDF from "../../assets/school-links/1-clothing-lessonplan.pdf";
import GeorgraphyPDF from "../../assets/school-links/geography-puzzle.pdf"; 

export default function Educrea() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.5, 0.6],
    [0, 1, 1, 0]
  );
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 0.58 ? "sticky" : "realitve";
  });

  const edProjects1 = [
    {
      title: "Seasonal Clothing Vocab Game (1º)",
      img: "https://www.shutterstock.com/shutterstock/videos/1027827185/thumb/1.jpg?ip=x480 ",
      link: ClothesPDF,
      info: "An active game to practice clothing and season vocabulary",
      action: "PDF",
    },
    {
      title: "Transportation Memory Game (2º)",
      img: " https://www.intelligenttransport.com/wp-content/uploads/shutterstock_184864955-scaled.jpg ",
      link: "https://docs.google.com/presentation/d/1eIaIyBikAXmVxgcAayjjiSuO2V_70WpiXO7PX0-8-Ck/edit?usp=sharing ",
      info: "A memory game to practice transit and time vocabulary",
      action: "Slides",
    },
    {
      title: "Simple Sentence Puzzles (2º)",
      img: " https://imagenes.elpais.com/resizer/2kZjFxiNoG3Pvq9dbeHPTe7aiXc=/1960x1470/cloudfront-eu-central-1.images.arcpublishing.com/prisa/RWF77A5EQGZX4QA2ABH76KQAZE.jpg ",
      link: GeorgraphyPDF,
      info: "Simple sentence puzzles with geography voacbulary ",
      action: "PDF",
    },
    {
      title: "Kahoot: Past Simple (3º)",
      img: "https://i.redd.it/o68mslp7bov71.jpg ",
      link: "https://create.kahoot.it/share/stone-age-people-past-simple-w-negatives-irregulars/e8a227fe-d3d2-4fa8-9bc1-2231ba2574f2 ",
      info: "Kahoot quiz with 'Stone Age' examples to practice irregular past simple verbs",
      action: "Play",
    },
    {
      title: "Kahoot: Past Tenses (4º)",
      img: "https://images2.fanpop.com/image/photos/13700000/FIFA-2010-World-Cup-Champions-Spain-Victory-Parade-And-Celebrations-fifa-world-cup-south-africa-2010-13789267-594-394.jpg",
      link: "https://create.kahoot.it/share/present-perfect-vs-past-simple/6e9a45a1-82b6-4021-a8e5-342dcbde9bed",
      info: "Kahoot quiz with everyday examples to practice present perfect and past simple tenses",
      action: "Play",
    },
  ];

  return (
    <div className="portfolio-page buffer">
      <div className="work-subhead sticky"> Educrea </div>
      <motion.p className="work-info" ref={ref} style={{ opacity, position }}>
        {" "}
        During the 2021-22 school year, I worked with students
        aged 6-12 at Colegio Educrea in Villalbilla, Madrid, Spain. Educrea’s
        unique project-based learning approach offered countless opportunities
        to grow as a young professional. While I worked directly with six fully tenured English teachers,
        incorporating English into the greater project-based curriculum required
        coordination with teachers of other subjects such as social and natural
        sciences.
      </motion.p>
      <div className="card-box buffer">
        {edProjects1.map((project, index) => (
          <PortfolioCardB
            key={index}
            title={project.title}
            img={project.img}
            link={project.link}
            info={project.info}
            action={project.action}
          />
        ))}
      </div>
    </div>
  );
}
