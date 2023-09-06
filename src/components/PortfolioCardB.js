import { useState, useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import "../styles/work.css";



function PortfolioCardB({ title, img, link, info, action }) {

    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: cardRef,
        offset: ["start end", "end start"],
    });
    
    const opacity = useTransform(scrollYProgress, [0, 0.4, 0.5, 0.6], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.4, 0.5, 0.6], [0.5, 1, 1, 0.5]);
    const rotateY = useTransform(scrollYProgress, [0, 0.4, 0.5, 0.6], [80, 0, 0, 80]);

    return (
        <motion.div ref={cardRef} style={{ opacity, rotateY }} className="card"> 
            <img className="card-img" src={img} alt="image" />
            <div className="card-body">
                <h3 className="card-title-b"> {title} </h3>
                <p className="card-blurb"> {info} </p>
                <div className="card-actions">
                <a href={link} target="_blank"> <button className="card-button"> { action } </button></a>
                </div>
            </div>
        </motion.div>
    );
}

export default PortfolioCardB;