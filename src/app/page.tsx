"use client";
import Home from "./home/page";
import Navbar from "./Navbar/Navbar";
import React from "react"
import CustomCursor from "./Components/CustomCursor";
// import About from "./about/AboutUpper";
import Gallery from "./Gallery/Gallery";
import NavMobile from "./Navbar/NavMobile";
import Team from "./Team/page";
import Link from "next/link";

export default function App() {


  return (
    <div className="CONTAINER scroll-smooth pb-[100dvh] text-neutral-200 flex flex-col items-center w-[100vw] min-h-screen h-max overflow-x-clip px-14 bg-black ">
      
      <CustomCursor />
      <Navbar />
      <NavMobile />

      <Home />

      <Gallery />

      <Team />
      
      
    </div>
  );
}
