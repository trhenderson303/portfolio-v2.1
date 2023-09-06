import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import MyWork from "../pages/MyWork";
import Contact from "../pages/Contact";
import MyWorld from "../pages/MyWorld";
import {AnimatePresence} from 'framer-motion';
 
function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence> 
        <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/mywork" element={<MyWork />} />
        <Route path="/myworld" element={<MyWorld />}/>
        <Route path="/contact" element={<Contact />} />
        
        </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;