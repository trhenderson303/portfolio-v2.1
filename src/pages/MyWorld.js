import { React, useRef } from "react";
import "../styles/work.css";
import { useScroll, useTransform, motion } from "framer-motion";
import NavMenu from "../components/Nav";




export default function MyWorld() {
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
      
        <motion.div style={{ opacity }} ref={ref} className="content">
        {" "}
        <NavMenu/>
                <h3 className="work-title"> My World </h3>
                <p className="work-article">
                  {" "}
                  Hello visitor, my name is Thomas Henderson. I'm a 28-year old web developer and designer, sports fan, foodie, adventurer, and life enthusiast!
                </p>
        </motion.div> 
      
    </>
  );
}