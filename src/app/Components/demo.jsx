"use client";
import gsap from 'gsap';
import React, { useEffect } from 'react'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const demo = () => {
    
    useEffect(() => {
        let tl = gsap.timeline({
            scrollTrigger:{
                trigger: '.reveal',
                start: 'top center',
                end: '150px center',
                toggleActions: 'play none none reverse',
                scrub: 1,
                markers: false
            },
        })
        tl.fromTo('.reveal', {
            opacity: 0,
        },{
            opacity: 1,
            // ease: "elastic.out(1,0.5)",

        })
    },[]);


  return (
    <div className=' relative h-screen w-screen flex '>
        <h1 className=' reveal relative mx-auto mt-8 text-neutral-100 font-bold text-[50px] drop-shadow-[0_5px_5px_rgba(255,255,250,0.61)]'> 
            helloooo thereeeee!!!!!!!
        </h1>
    </div>
  )
}

export default demo;