"use client";
import Image from "next/image";
import homeImage from "./Assets/Home_Image.png";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Demo from './Components/demo';
import Home from "./home/page";
import Navbar from "./Navbar/Navbar";
import AnimatedCursor from "react-animated-cursor";
import React from "react"
import CustomCursor from "./Components/CustomCursor";
// import About from "./about/AboutUpper";
import Gallery from "./Gallery/Gallery";
import AboutUpper from "./about/AboutUpper";
import AboutLower from "./about/AboutLower";


export default function App() {


  return (
    <div style={{ overflowX: 'hidden' }} className="CONTAINER text-neutral-200 overflow-x-hidden flex flex-col items-center w-screen min-h-screen px-14 bg-black font-[family-name:var(--font-geist-mono)]">
      
      <CustomCursor />
      <Navbar />

      <Home />

      <AboutUpper />
      <AboutLower />

      <Gallery />

      <div className=" bg-black relative w-screen h-screen"></div>
    
    </div>
  );
}
