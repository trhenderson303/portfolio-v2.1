import React, { useRef } from "react";
import "../../styles/work.css";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Broncos() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.57, 0.6], [0, 1, 1, 0]);


  return (
    <div className="portfolio-page">
            <div className="work-subhead sticky"> Denver Broncos </div>
            <motion.p className="work-info" ref={ref} style={{ opacity }}>
              {" "}
              During the 2018 NFL Season, I was able to work for the Denver
  Broncos' Gameday Public Relations staff. My primary responsibility
  was to provide excellent service to the media covering the team,
  including the timely delivery of stats, information, and quotes.
  With years of experience working football gamedays at CU, I was also
  able to offer guidance to younger assistants.{" "}
            </motion.p>
      </div>
  );
}

