import React, { useRef } from "react";
import "../styles/work.css";
import { useScroll, useTransform, motion } from "framer-motion";
import Educrea from "./work/Educrea";
import SimoneOrtega from "./work/SimoneOrtega";

export default function EdWork() {
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
      <section id="school" className="padded">
        <motion.div className="content" ref={ref} style={{ opacity, position }}>
          <div class="info-box"> 
            <div className="work-subhead sticky"> Education </div>
            <p className="work-info sticky">
              {" "}
              I also spent 3 years as an English teacher in Madrid, Spain. During this time I was able to work for two public schools and two independent companies, helping around 400 students ranging in age from 5-65 to improve their English. 
            </p>
          </div>
        </motion.div>
        <Educrea />
        <SimoneOrtega/>
      </section>
    </>
  );
}
