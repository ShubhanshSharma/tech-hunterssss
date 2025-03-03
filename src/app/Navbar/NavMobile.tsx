"use client";
import gsap from 'gsap'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { usePathname, useRouter } from 'next/navigation';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollToPlugin);


const NavMobile = () => {
    const [NavbarOpen, setNavbarOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const lenis = useRef<Lenis | null>(null);

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

    const scrollToSection = (id: string) => {
        if (!lenis.current) return;

        const scroll = () => {
            const target = document.getElementById(id);
            if (target) {
                lenis.current?.scrollTo(target, { offset: 0, duration: 1.2 ,easing: (x) => 1 - Math.pow(1 - x, 4)});
            }
        };

        if (pathname !== "/") {
            router.push("/");
            setTimeout(scroll, 800); // Allow time for page load
        } else {
            scroll();
        }
    };


    const scrollToGallery = () => {
        if (!lenis.current) return;
        const target = document.getElementById('GALLERY');
        if(!target) return;

        if (pathname !== '/') {
            router.push('/');
            setTimeout(() => lenis.current?.scrollTo( target, { offset: window.innerHeight / 2, easing: (x) => 1 - Math.pow(1 - x, 4) }), 800);
        } else {
            lenis.current.scrollTo(target, { offset: window.innerHeight / 2 , duration: 1.2, easing: (x) => 1 - Math.pow(1 - x, 4) });
        }
    };
    

    useEffect(() => {
        if(NavbarOpen){
            gsap.to('.NAVMOB-bg',{
                // boxShadow: '0px 0px 0px 50px rgba(255, 255, 255, 1)',
                scale: 180,
                // y: -200,
                // x: -200,
                duration: 0.4
            })
            gsap.to('.NAVMOB-home',{
                display: 'block',
                opacity: 1,
                x: -20,
                y: -290,
                duration: 0.6,
                ease: 'power2.inOut'
            })
            gsap.to('.NAVMOB-about',{
                display: 'block',
                opacity: 1,
                x: -140,
                y: -250,
                duration: 0.6,
                ease: 'power2.inOut'
            })
            gsap.to('.NAVMOB-gallery',{
                display: 'block',
                opacity: 1,
                x: -224,
                y: -177,
                duration: 0.6,
                ease: 'power2.inOut'
            })
            gsap.to('.NAVMOB-sponsors',{
                display: 'block',
                opacity: 1,
                x: -280,
                y: -90,
                duration: 0.6,
                ease: 'power2.inOut'
            })
            
            gsap.to('.NAVMOB-pastEvents',{
                display: 'block',
                opacity: 1,
                x: -132,
                y: -80,
                duration: 0.6,
                ease: 'power2.inOut'
            })
            gsap.to('.NAVMOB-team',{
                display: 'block',
                opacity: 1,
                x: -60,
                y: -170,
                duration: 0.6,
                ease: 'power2.inOut'
            })
            gsap.to('.NAVMOB-footer',{
                display: 'block',
                opacity: 1,
                x: -290,
                y: -35,
                duration: 0.6,
                ease: 'power2.inOut'
            })
        }else{
            gsap.to('.NAVMOB-bg',{
                // boxShadow: '1px 20px 4px 700px rgba(255, 255, 255, 0)',
                scale: 1,
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
            gsap.to('.NAVMOB-sponsors',{
                display: 'none',
                opacity: 0,
                x: 0,
                y: 0,
                duration: 0.6,
                ease: 'power2.inOut'
            })
            gsap.to('.NAVMOB-pastEvents',{
                display: 'none',
                opacity: 0,
                x: 0,
                y: 0,
                duration: 0.6,
                ease: 'power2.inOut'
            })
            gsap.to('.NAVMOB-team',{
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
    <div className='NAVMOB uppercase fixed md:hidden rounded-full w-[50px] h-[50px] right-3 bottom-[5px]
       text-black  text-[20px]'
        onClick={() => setNavbarOpen(!NavbarOpen)}> 
        
        <div className=' NAVMOB-bg z-0 fixed bg-white aspect-square w-1 rounded-full'></div>

        <button onClick={() => scrollToSection('HOME')} className='NAVMOB-home absolute'>HOME</button>
        <button onClick={() => scrollToSection('GALLERY')} className='NAVMOB-about absolute'>ABOUT</button>
        <button onClick={() => scrollToGallery()} className='NAVMOB-gallery absolute'>GLIMPSE</button>
        <button onClick={() => scrollToSection("SPONSORS")} className='NAVMOB-sponsors'>SPONSORS</button>

        <button onClick={() => scrollToSection('CONTACT')} className='NAVMOB-footer absolute'>CONTACT</button>
        <Link href="/Track" className='NAVMOB-pastEvents'> PAST EVENTS</Link>
        <button onClick={() => scrollToSection("TEAM")} className='NAVMOB-team absolute'>TEAM</button>
    </div>
  )
}

export default NavMobile