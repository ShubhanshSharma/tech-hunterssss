'use client';
import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);

export default function Sponsors() {

    useEffect(() => {
        gsap.fromTo('.sponsorsHeading' ,{
            opacity: 0,
            y: '100px'
          },{
            y: '0px',
            opacity: 1,
            duration: 1.2,
            ease: 'power4.inOut',
            scrollTrigger:{
              trigger: '.sponsorsHeading',
              start: 'top 85%',
              // end: 'bottom 70%',
              toggleActions: 'play none none reverse',
              markers: false,
              scrub: false,
              
            }
          })
    }, [])

  return (
    <div id='SPONSORS' className="SPONSORS w-screen min-h-screen h-max flex flex-col ">
      <h2 className=" sponsorsHeading relative mx-auto font-black text-white leading-[60px] text-[60px]  lg:text-[90px]">
        SPONSORS
      </h2>
    </div>
  );
}