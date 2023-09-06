import React, { useRef } from "react";
import "../styles/work.css";
import PortfolioCard from "../components/PortfolioCard";
import Bootcamp from "./work/Bootcamp";
import { useScroll, useTransform, motion } from "framer-motion";


export default function TechWork() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0.5, 0.8], [1, 0]);
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 0.5 ? "relative" : "sticky";
  })


  return (
    <> 
        <div id="tech" className="padded">
        <motion.div className="content" ref={ref} style={{ position, opacity }}>
          <div className = "info-box"> 
                <div className="work-subhead sticky"> Tech </div>
                <p className="work-info sticky">
                  {" "}
                  I have experience with several programming languages and methodologies for developing full-stack applications. While I'm comfortable with back-end systems, my passion lies on the front-end in creating unique, intuitive user interfaces. {" "}
            </p>
            </div>
            </motion.div>
        <Bootcamp />
        </div>

      </>
  );
}