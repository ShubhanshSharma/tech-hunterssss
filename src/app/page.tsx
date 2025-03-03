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
import Contact from "./Contact/page";

export default function App() {

  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);


  }, []);

  



  return (
    <div className="CONTAINER  text-neutral-200 flex flex-col items-center w-[100vw] h-max overflow-x-hidden px-14 bg-black ">
      

      <Home />

      <Gallery />

      <Sponsors />

      
    </div>
  );
}
