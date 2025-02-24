"use client";
import React from 'react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomCursor from '../Components/CustomCursor';
import Navbar from '../Navbar/Navbar';
gsap.registerPlugin(ScrollTrigger);

export default function PastEvents() {
    useEffect(() => {
        gsap.set('.CONTAINER', {
            opacity: 0,
            x: '-100vw'
        });
    
        // Animate in
        gsap.fromTo('.PASTEVENTS',{
            opacity: 0,
            x: '100vw',
        }, {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: 0.4,
            ease: 'power3.out',
        });
    }, []);
    
    return(
        <div id='PASTEVENTS' className="PASTEVENTS bg-black min-h-screen w-screen h-max flex flex-col items-center justify-around ">
            <CustomCursor />
            <Navbar />
            <h2 className=" eventsHeading relative mx-auto font-black text-white  text-[70px]  lg:text-[140px]">
                Past Events will be displayed....
            </h2>
        </div>
    )
}