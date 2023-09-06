import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import "../styles/work.css";



function PortfolioCard({ title, img, link, github, info }) {

    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: cardRef,
        offset: ["start end", "end start"],
    });
    const opacity = useTransform(scrollYProgress, [0, 0.4, 0.5, 0.6], [0, 1, 1, 0]);
    const rotateY = useTransform(scrollYProgress, [0, 0.4, 0.5, 0.6], [90, 0, 0, 90]);

    return (
        <motion.div ref={cardRef} style={{ opacity, rotateY }} className="card"> 
            <img className="card-img" src={img} alt="image" />
            <div className="card-body">
                <h3 className="card-title"> {title} </h3>
                <p className="card-blurb"> {info} </p>
                <div className="card-actions">
                    <a href={link} target="_blank"> <button className="card-button"> Website </button></a>
                    <a href={github}> <button className="card-button"> Github </button> </a>
                </div>
            </div>
        </motion.div>
    );
}

export default PortfolioCard;