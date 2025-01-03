"use client";
import gsap from 'gsap'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);


const Navbar = () => {

    const [NavbarHover, setNavbarHover] = useState(false);

    useEffect(() => {

        gsap.to('.NAV',{
            y: NavbarHover? -80 : -70,
            duration: 0.1,
            ease: 'power1'
        })
    },[NavbarHover])

    useEffect(() => {
        gsap.to('.NAV',{
            y: 0,
            scale: 0.5
        })
        gsap.to('.NAV',{
            y: -70,
            scale: 1,
            duration: 0.6,
            delay: 2,
            ease: 'power2.out'
        })
    },[])

    const scrollToSection = (id) => {
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
      

  return (
    <div className='NAV uppercase invisible sm:visible rounded-[30px] w-fit px-[70px] h-[50px] fixed bottom-[-50px] items-center flex justify-center gap-[80px]
       text-black '
        onMouseEnter={() => setNavbarHover(true)} onMouseLeave={() => setNavbarHover(false)}>

        <a onClick={() => scrollToSection('HOME')}>Home</a>
        <a onClick={() => scrollToSection('GALLERY')}>About</a>
        <a onClick={() => scrollToGallery()}>Gallery</a>
        <a href="#CONTACT">Contact</a>
        
    </div>
  )
}

export default Navbar