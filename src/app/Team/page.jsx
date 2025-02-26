'use client';
import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);

export default function Team() {

    useEffect(() => {
        gsap.fromTo('.teamHeading' ,{
            opacity: 0,
            y: '100px'
          },{
            y: '0px',
            opacity: 1,
            duration: 1.2,
            ease: 'power4.inOut',
            scrollTrigger:{
              trigger: '.teamHeading',
              start: 'top 85%',
              // end: 'bottom 70%',
              toggleActions: 'play none none reverse',
              markers: true,
              scrub: false,
              
            }
          })
    }, [])

  return (
    <div id='TEAM' className="TEAM w-screen min-h-screen h-max flex flex-col ">
      <h2 className=" teamHeading relative mx-auto font-black text-white leading-[60px] text-[70px]  lg:text-[90px]">
        TEAM
      </h2>
    </div>
  );
}