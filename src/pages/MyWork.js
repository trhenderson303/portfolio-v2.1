import { React, useRef } from "react";
import "../styles/work.css";
import TechWork from "../components/TechWork";
import EdWork from "../components/EducationWork";
import SportsWork from "../components/SportsWork";
import { useScroll, useTransform, motion } from "framer-motion";
import NavMenu from "../components/Nav";




export default function MyWork() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0.5, 0.9], [1, 0]);
  // const position = useTransform(scrollYProgress, (pos) => {
  //   return pos === 1 ? "relative" : "fixed";
  // })


  return (
    <> 
      <NavMenu/>
        <motion.div style={{ opacity }} ref={ref} className="content">
                {" "}
                <h3 className="work-title"> My Work </h3>
                <p className="work-article">
                  {" "}
                  These days, you can find me making things on the computer. But I've also worked as an English teacher and in sports media.{" "}
                </p>
        </motion.div> 
      <TechWork />
      <EdWork />
      <SportsWork />
      
    </>
  );
}