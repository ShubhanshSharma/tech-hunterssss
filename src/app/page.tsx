"use client";
import Home from "./home/page";
import Navbar from "./Navbar/Navbar";
import React, { useEffect, useState } from "react"
import CustomCursor from "./Components/CustomCursor";
// import About from "./about/AboutUpper";
import Gallery from "./Gallery/Gallery";
import NavMobile from "./Navbar/NavMobile";
import Team from "./Team/page";
import Link from "next/link";
import LocomotiveScroll from "locomotive-scroll";
import Lenis from "lenis";
import Sponsors from "./Sponsors/page";

export default function App() {

  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);


    // Initialize Lenis
    // const lenis = new Lenis({
    //   autoRaf: true,
    //   duration: 1.2,
    //   easing: (x) => 1 - Math.pow(1 - x, 4),
    // });

  }, []);

  



  return (
    <div className="CONTAINER pb-[100dvh] text-neutral-200 flex flex-col items-center w-[100vw] min-h-screen h-max overflow-x-clip px-14 bg-black ">
      

      <Home />

      <Gallery />

      <Sponsors />

      
      
    </div>
  );
}
