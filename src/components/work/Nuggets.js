import React, { useRef } from "react";
import "../../styles/work.css";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Nuggets() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.57, 0.6], [0, 1, 1, 0]);


  return (
      
      <div className="portfolio-page bottom-cushion">
          <div className="work-subhead sticky"> Denver Nuggets </div>
        <motion.p className="work-info" ref={ref} style={{ opacity }}>
        During the 2018-19 and 2019-20 NBA Seasons, I was fortunate enough
              to work for the Denver Nuggets' Media Relations staff. Working
              primarily during games and events, my responsibilities ranged from
              managing the media and VIP check-in desk, to assisting with pre
              and post-game media availability sessions.
</motion.p>
      </div>
  );
}