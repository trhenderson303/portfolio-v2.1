import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion'

export default function Home() {

  const skyline = require('../assets/skyline.png')
  const portrait = require('../assets/portrait.png')

  return (

      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        exit={{y: window.innerHeight}}> 
      <div className="home-container">
        <div className='split-box'> 
        <motion.div
          animate={{x: 0, y: 0, scale: 1 }}
          initial={{x: -1000, y: -1000, scale: 0 }}
          transition={{ type: "spring", damping: 12, stiffness: 50 }}
          
        > <Link to={"/mywork"} className="home-item">
        <h1> My Work </h1>
      </Link> </motion.div>
      
      <motion.div
          animate={{x: 0, y: 0, scale: 1 }}
          initial={{x: -1000, y: -1000, scale: 0 }}
          transition={{ type: "spring", damping: 10, stiffness: 40, duration: 1.3 }}
          
        ><Link to={"/myworld"} className="home-item">
        <h1> My World </h1>
          </Link>
        </motion.div>


        <motion.div
          animate={{x: 0, y: 0, scale: 1 }}
          initial={{x: -1000, y: -1000, scale: 0 }}
          transition={{ type: "spring", damping: 8, stiffness: 30, duration: 1.6 }}
          
        ><Link to={"/contact"} className="home-item">
        <h1> Connect </h1>
          </Link>
        </motion.div>
      
      
        </div>
        <div className='portrait-box'>
          <motion.div
          animate={{scale: 1, rotateZ: 0 }}
            initial={{ scale: 0, rotateZ: 100 }}
            transition={{ duration: 1 }}> 
            <img src={portrait} className="portrait" alt="thomas-cutout"></img>
            </motion.div>
        </div>
        <motion.div
          className="skyline"
          animate={{rotateX: 0, y: 0, duration: 4 }}
          initial={{ rotateX: -100 }}
          transition={{ type: "tween" }}
          exit={{ y: -10000, duration: 0}}
        > <img src={skyline} className="skyline" alt="skyline"></img> </motion.div>
        </div>
    </motion.div>
    
  );
}

