"use client";
import gsap from 'gsap'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

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

  return (
    <div className='NAV rounded-[30px] w-fit px-[70px] h-[50px] fixed bottom-[-50px] items-center flex justify-center gap-[80px]
       text-white '
        onMouseEnter={() => setNavbarHover(true)} onMouseLeave={() => setNavbarHover(false)}>

        <a href="#HOME">Home</a>
        <a href="#ABOUT">About</a>
        <a href="#GALLERY">Gallery</a>
        <a href="#CONTACT">Contact</a>
        
    </div>
  )
}

export default Navbar