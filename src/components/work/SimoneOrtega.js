import React, { useRef } from "react";
import "../../styles/work.css";
import PortfolioCardB from "../PortfolioCardB";
import { useScroll, useTransform, motion } from "framer-motion";

// Project Links
import HotelPDF from "../../assets/school-links/hotel-map-role-play.pdf";
import NameThatDishPDF from "../../assets/school-links/NAMETHATDISH.pdf";


export default function SimoneOrtega() {
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

  const edProjects2 = [
    {
      title: "Hotel Directions Role Play",
      img: "https://skytouchtechnology.com/wp-content/uploads/2018/03/Monetize-hotel-guest-check-in.jpg",
      link: HotelPDF,
      info: "A hotel front-desk role-play activity for hospitality students",
      action: "PDF",
    },
    {
      title: "Name That Dish",
      img: "https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/recipes_1200_800_fallback/public/2020-11/paella-valenciana.jpg?itok=6kh-RXm5 ",
      link: NameThatDishPDF,
      info: "A game for culinary and food service students to practice describing food",
      action: "PDF",
    },
    {
      title: "American Restaurants",
      img: "https://www.reporternews.com/gcdn/presto/2021/08/23/PARN/df2e3a17-f0a3-4403-8871-50f3f1e59412-Chili.jpg ",
      link: "https://docs.google.com/presentation/d/13x_8OZwAgvuvUqYiNksV4xkV3nBmoyMW/edit?usp=sharing&ouid=102757863571140676573&rtpof=true&sd=true",
      info: "A presentation on restaurants in the United States",
      action: "Slides",
    },
    {
      title: "Kahoot: Bread Around the World",
      img: "https://www.kitchensanctuary.com/wp-content/uploads/2021/03/Garlic-Naan-square-FS-42.jpg ",
      link: "https://create.kahoot.it/details/cb801f84-cd61-40f4-8107-db3cbdf899d7 ",
      info: "Kahoot & Video activity on bread around the world",
      action: "Play",
    },
    {
      title: "Kahoot: Kitchen Tools",
      img: "https://www.thespruceeats.com/thmb/jLv9ZeHHHo57Avt-M82ZmBefgEE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Web_1500-Vitamix-test-VitaMixA2300-2I6F2462-49e4dd5447464ba186c99ffd61a4c024.jpg",
      link: "https://create.kahoot.it/share/kitchen-appliance-practice/6f8aee89-872a-4ba7-90d5-3e068db244b9 ",
      info: "Kahoot practicing vocabilary for kitchen tools",
      action: "Play",
    },
    {
      title: "Idioms",
      img: "https://t4.ftcdn.net/jpg/05/71/64/51/360_F_571645167_fRxwSKmcfUQOUVD04xSk1Zd7UfBLMsEx.jpg ",
      link: "https://docs.google.com/presentation/d/1PzejQRbcN6NYqpt40bn-ZT0WaLDRzFZr/edit?usp=sharing&ouid=102757863571140676573&rtpof=true&sd=true ",
      info: "A presentation on common English idiomatic expressions",
      action: "Slides",
    },
    {
      title: "Ski Tourism",
      img: "https://www.travelandleisure.com/thmb/Yiq3rXHGmHnDrgzBsGmEvqjHxSo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/aspen-colorado-lead-ASPENTG0122-3bd432152d1f4758b1b89fd8a3a231cc.jpg ",
      link: "https://docs.google.com/presentation/d/1WraEzYaRSc7n-sXwjYr_D2tkbM6uH0DQ/edit?usp=sharing&ouid=102757863571140676573&rtpof=true&sd=true ",
      info: "A presentation for hospitality students about global ski tourism",
      action: "Slides",
    },
  ];

  return (
    <div className="portfolio-page">
      <div className="work-subhead sticky"> Simone Ortega </div>
      <motion.p className="work-info" ref={ref} style={{ opacity, position }}>
        {" "}
        During the 2020-21 school year, I worked with vocational students aged
        16+ at CIFP Simone Ortega Escuela de Hosterlería y Turismo in Móstoles,
        Madrid, Spain. Teaching older students training for careers in the
        hospitality, tourism, and restaurant industries provided a unique
        experience. I worked directly with three fully tenured English teachers
        and, as well as with vocational teachers to improve their English in
        practical contexts.
      </motion.p>
      <div className="card-box buffer">
        {edProjects2.map((project, index) => (
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
