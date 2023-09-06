import React, { useRef } from "react";
import "../../styles/work.css";
import PortfolioCardB from "../PortfolioCardB";
import { useScroll, useTransform, motion } from "framer-motion";
import WoodardThumb from "../../assets/woodard-hof.png";
import indyNotes18 from "../../assets/other-links/18-ind-notes-season-1.pdf";

export default function Buffs() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.55, 0.6], [0, 1, 1, 0]);
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 0.58 ? "sticky" : "realitve";
     
  });

  const sportsProjects = [
    {
      title: "Hall of Fame: Kordell Stewart",
      img: "https://dmgxuvvk0mgkf.cloudfront.net/images/2018/11/9/Stewart_kordell.jpg?width=1884&quality=80&format=jpg",
      link: "https://cubuffs.com/news/2018/11/9/football-cu-athletic-hall-of-fame-profile-kordell-stewart",
      info: "Feature article celebrating the Hall of Fame induction of CU legend Kordell Stewart",
      action: "Read",
    },
    {
      title: "Hall of Fame: Tom Woodard",
      img: WoodardThumb,
      link: "https://cubuffs.com/news/2015/10/16/210428104.aspx ",
      info: "Feature article celebrating the Hall of Fame induction of CU golf legend Tom Woodard",
      action: "Read",
    },
    {
      title: "100th Game: Ann Elliott Whidden",
      img: "https://dmgxuvvk0mgkf.cloudfront.net/images/2019/3/7/ann_elliott_whidden.jpg?width=1884&quality=80&format=jpg",
      link: "https://cubuffs.com/news/2019/3/7/lacrosse-buffs-and-whidden-to-celebrate-cus-100th-game-on-friday",
      info: "Feature article on CU Lacrosse Coach Ann Elliott Whidden's 100th game",
      action: "Read",
    },
    {
      title: "NFL Buffs: Week 2 Update",
      img: "https://dmgxuvvk0mgkf.cloudfront.net/images/2018/9/19/Branded_Photo_3_.jpg?width=1884&quality=80&format=jpg ",
      link: "https://cubuffs.com/news/2018/9/19/football-nflbuffs-undrafted-rookie-lindsay-impresses-again-in-week-2.aspx?path=football ",
      info: "Weekly release highlighting CU alumni in the Week 2 of the 2018 NFL season",
      action: "Read",
    },
    {
      title: "#BrickByBrick Twitter Series",
      img: "https://pbs.twimg.com/media/D1F-Ff7VAAARRwz?format=jpg&name=4096x4096",
      link: "https://twitter.com/i/events/1101416851261673472 ",
      info: "Twitter season ticket promotion featuring CU's most iconic wins",
      action: "Explore",
    },
    {
      title: "Individual Media Notes",
      img: "https://ca-times.brightspotcdn.com/dims4/default/44479c7/2147483647/strip/true/crop/2048x1366+0+0/resize/1200x800!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fc5%2Fcd%2Fcb1f961a1dbe830cc4888c9709c5%2Fla-1539310899-mcp1g3ydaz-snap-image",
      link: indyNotes18,
      info: "2018 Final TV & Media individual player note package",
      action: "Explore",
    },
    {
      title: "Game Recap: CU vs. UM Lacrosse",
      img: "https://dmgxuvvk0mgkf.cloudfront.net/images/2018/2/9/Stinson.jpg?width=1920&quality=80&format=jpg ",
      link: "https://cubuffs.com/news/2018/2/9/lacrosse-stinsons-record-breaking-day-lifts-buffs-to-emotional-win.aspx ",
      info: "Official CU vs. Michigan lacrosse game story, completed on deadline",
      action: "Read",
    },
    {
      title: "Game Recap: CU vs. CSU Soccer",
      img: "https://dmgxuvvk0mgkf.cloudfront.net/images/2018/8/20/8_19_CSU_LW_0003.jpg?width=1920&quality=80&format=jpg",
      link: "https://cubuffs.com/news/2018/8/19/soccer-buffs-battle-rams-to-scoreless-draw.aspx",
      info: "Official CU vs. CSU soccer game story, completed on deadline",
      action: "Read",
    },
  ];

  return (
    <div className="portfolio-page">
          <div className="work-subhead sticky"> CU Buffs </div>
          <motion.p className="work-info" ref={ref} style={{ opacity, position }}>
            {" "}
            From 2014-19, I worked for the University of Colorado Sports
            Information Department, serving as both a student assistant and a
            graduate assistant. Over almost five years working for Colorado
            Athletics, I gained valuable experience in public relations, social
            and digital media, writing, and much more. Though primarily focused
            on football, basketball, soccer and lacrosse, I was able to work
            some with nearly all 17 varsity athletic programs.{" "}
          </motion.p>
          <div className="card-box buffer">
            {sportsProjects.map((project, index) => (
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