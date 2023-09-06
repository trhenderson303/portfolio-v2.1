import React, { useRef } from "react";
import "../styles/work.css";
import PortfolioCardB from "./PortfolioCardB";
import Buffs from "./work/CUBuffs";
import Nuggets from "./work/Nuggets";
import Broncos from "./work/Broncos";
import { useScroll, useTransform, motion } from "framer-motion";
import WoodardThumb from "../assets/woodard-hof.png";

export default function SportsWork() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.55, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.9], [1, 0]);
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 0.5 ? "relative" : "sticky";
  });


  return (
    <>
      <section id="sports" className="padded">
        <motion.div className="content" ref={ref} style={{ opacity, position }}>
          <div class="info-box"> 
            <div className="work-subhead sticky"> Sports </div>
            <p className="work-info sticky">
              {" "}
              Growing up I always loved sports, and was fortunate enough to
              spend almost six years working in digital and media relations for
              the Colorado Buffaloes (NCAA), Denver Nuggets (NBA), and Denver
              Broncos (NFL). 
            </p>
          </div>
        </motion.div>
        <Buffs />
        <Nuggets />
        <Broncos />
      </section>
    </>
  );
}
