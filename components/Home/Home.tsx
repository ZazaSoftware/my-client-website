"use client";
import React  from 'react';
import Hero from "./Hero/Hero";
import About from "./About/About";
import Services from './Services/Services';
import Project from './Project/Project';
import Skills from './Skills/Skills';
import Reviews from './Reviews/Reviews';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import ScrollToTop from '../Helper/ScrollToTop';
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";



//import Home from "@/components/Home/Home";
const Home = () => {

  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
          duration:1000,
          easing:"ease",
          once:true,
          anchorPlacement:'top-bottom',
      });
    };

    initAOS();

  }, []);

  return (
    <div className='overflow-hidden'>
      <Hero />
      <About />
      <Services  />
      <Project />
      <Skills />
      <Reviews />
      <Blog />
      <Contact />
      <Footer /> 
      <ScrollToTop />
    
      
      
      </div>);
  
};

export default Home;