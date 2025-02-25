"use client";
import gsap from 'gsap'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);


const NavMobile = () => {
    const [NavbarOpen, setNavbarOpen] = useState(false);

    //for client side rendering
    const [isClient, setIsClient] = useState(false);
  
    useEffect(() => {
        setIsClient(true);
    }, []);
    



    useEffect(() => {
        gsap.to('.NAVMOB',{
            y: 70,
            scale: 0.5
        })
        gsap.to('.NAVMOB',{
            y: -10,
            scale: 1,
            duration: 0.6,
            delay: 2,
            ease: 'power2.out'
        })
    },[])

    const scrollToSection = (id: any) => {
        gsap.to(window, {
          scrollTo: { y: `#${id}`, offsetY: 50 }, // Scroll to the element with an optional offset
          duration: 1.4, // Animation duration
          delay: 0.2,
          ease: 'power2.inOut', // Smooth easing
        });
    };

    const scrollToGallery = () => {
        gsap.to(window, {
          scrollTo: { y: '#GALLERY', offsetY: -window.innerHeight/2 }, // Scroll to the element with an optional offset
          duration: 1.4, // Animation duration
          delay: 0.2,
          ease: 'power2.inOut', // Smooth easing
        });
    };
    

    useEffect(() => {
        if(NavbarOpen){
            gsap.to('.NAVMOB-bg',{
                // boxShadow: '0px 0px 0px 50px rgba(255, 255, 255, 1)',
                width: 400,
                y: -200,
                x: -200,
                duration: 0.4
            })
            gsap.to('.NAVMOB-home',{
                display: 'block',
                opacity: 1,
                x: -20,
                y: -170,
                duration: 0.6,
                ease: 'power2.inOut'
            })
            gsap.to('.NAVMOB-about',{
                display: 'block',
                opacity: 1,
                x: -110,
                y: -140,
                duration: 0.6,
                ease: 'power2.inOut'
            })
            gsap.to('.NAVMOB-gallery',{
                display: 'block',
                opacity: 1,
                x: -170,
                y: -70,
                duration: 0.6,
                ease: 'power2.inOut'
            })
            gsap.to('.NAVMOB-footer',{
                display: 'block',
                opacity: 1,
                x: -160,
                y: 10,
                duration: 0.6,
                ease: 'power2.inOut'
            })
        }else{
            gsap.to('.NAVMOB-bg',{
                // boxShadow: '1px 20px 4px 700px rgba(255, 255, 255, 0)',
                width: 0,
                y: 30,
                x: 30,
                duration: 0.4,
            })
            gsap.to('.NAVMOB-home',{
                display: 'none',
                opacity: 0,
                x: 0,
                y: 0,
                duration: 0.6,
                ease: 'power2.inOut'
            })
            gsap.to('.NAVMOB-about',{
                display: 'none',
                opacity: 0,
                x: 0,
                y: 0,
                duration: 0.6,
                ease: 'power2.inOut'
            })
            gsap.to('.NAVMOB-gallery',{
                display: 'none',
                opacity: 0,
                x: 0,
                y: 0,
                duration: 0.6,
                ease: 'power2.inOut'
            })
            gsap.to('.NAVMOB-footer',{
                display: 'none',
                opacity: 0,
                x: 0,
                y: 0,
                duration: 0.6,
                ease: 'power2.inOut'
            })
        }
    },[NavbarOpen])


    
    if (!isClient) {
        return <div>Loading...</div>; // or a skeleton/placeholder
    }
      

  return (
    <div className='NAVMOB uppercase visible md:invisible rounded-full w-[50px] h-[50px] fixed bottom-[5px] right-[16px]
       text-black bg-white text-[20px]'
        onClick={() => setNavbarOpen(!NavbarOpen)}>
        
        <div className=' NAVMOB-bg z-0 fixed bg-white aspect-square w-1 rounded-full'></div>

        <a onClick={() => scrollToSection('HOME')} className='NAVMOB-home absolute'>Home</a>
        <a onClick={() => scrollToSection('GALLERY')} className='NAVMOB-about absolute'>About</a>
        <a onClick={() => scrollToGallery()} className='NAVMOB-gallery absolute'>Gallery</a>
        <a onClick={() => scrollToSection('FOOTER')} className='NAVMOB-footer absolute'>Contact</a>
    </div>
  )
}

export default NavMobile