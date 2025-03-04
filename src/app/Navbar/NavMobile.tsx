"use client";
import {gsap} from "gsap"
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation';
import Lenis from 'lenis';
import { RiMenu5Fill } from 'react-icons/ri';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);


const NavMobile = () => {
    const [NavbarOpen, setNavbarOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const lenis = useRef<Lenis | null>(null);

    useEffect(() => {
        lenis.current = new Lenis({
            duration: 1.2,
            easing: (x) => 1 - Math.pow(1 - x, 4),
        });

        function raf(time: number) {
            lenis.current?.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.current?.destroy();
        };
    }, []);
    
    useEffect(() => {
        gsap.to('.NAVMOB', {
            opacity: 1,
            duration: 5.6,
            delay: 3.3,
            ease: 'power2.out'
        })
    },[])


    //for client side rendering
    const [isClient, setIsClient] = useState(false);
  
    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        closeNav();
    }, [pathname])
    

    const closeNav =() => {
        gsap.to('.NAVMOB-bg',{
            // boxShadow: '1px 20px 4px 700px rgba(255, 255, 255, 0)',
            scale: 1,
            duration: 0.4,
            ease: 'power2.in'
        })
        gsap.to(['.NAVMOB-home', '.NAVMOB-about', '.NAVMOB-gallery', '.NAVMOB-sponsors', '.NAVMOB-team', '.NAVMOB-pastEvents', '.NAVMOB-contact'],{
            display: 'none',
            x: 0,
            y: 0,
            opacity: 0,
            duration: 0.4,
            ease: 'power2.in'
        })
        setNavbarOpen(false);
    }

    const scrollToSection = (id: string) => {
        console.log('scrolling to section', id);
        if (!lenis.current) return;
        closeNav();

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
        closeNav();

        const scroll = () => {
            const target = document.getElementById('GALLERY');
            if(target){
                lenis.current?.scrollTo(target, { offset: window.innerHeight / 2 , duration: 1.2, easing: (x) => 1 - Math.pow(1 - x, 4) });

            };

        };
        

        if (pathname !== '/') {
            router.push('/');
            setTimeout(scroll, 800);
        } else {
            scroll();
        }
    };
    

    useEffect(() => {
        if(NavbarOpen){
            gsap.to('.NAVMOB-bg',{
                scale: 18,
                duration: 0.4,
                ease: 'power2.inOut'
            })
            gsap.to('.NAVMOB-home',{
                display: 'block',
                opacity: 1,
                x: -20,
                y: -340,
                duration: 0.6,
                ease: 'power2.inOut'
            })
            gsap.to('.NAVMOB-about',{
                display: 'block',
                opacity: 1,
                x: -140,
                y: -300,
                duration: 0.6,
                ease: 'power2.inOut'
            })
            gsap.to('.NAVMOB-gallery',{
                display: 'block',
                opacity: 1,
                x: -224,
                y: -227,
                duration: 0.6,
                ease: 'power2.inOut'
            })
            gsap.to('.NAVMOB-sponsors',{
                display: 'block',
                opacity: 1,
                x: -280,
                y: -140,
                duration: 0.6,
                ease: 'power2.inOut'
            })
            
            gsap.to('.NAVMOB-pastEvents',{
                display: 'block',
                opacity: 1,
                x: -132,
                y: -140,
                duration: 0.6,
                ease: 'power2.inOut'
            })
            gsap.to('.NAVMOB-team',{
                display: 'block',
                opacity: 1,
                x: -60,
                y: -230,
                duration: 0.6,
                ease: 'power2.inOut'
            })
            gsap.to('.NAVMOB-contact',{
                display: 'block',
                opacity: 1,
                x: -290,
                y: -50,
                duration: 0.6,
                ease: 'power2.inOut'
            })
        }else{
            closeNav();
        }
    },[NavbarOpen])


    
    if (!isClient) {
        return <div>Loading...</div>; // or a skeleton/placeholder
    }
      

  return (
    <div className='NAVMOB uppercase fixed md:hidden rounded-full w-[50px] h-[50px] right-3 bottom-[5px]
       text-black  text-[20px]'> 
        
        <div className=' NAVMOB-bg z-0 fixed bg-white aspect-square w-10 rounded-full'></div>
        <RiMenu5Fill className=' m-auto h-full scale-150'
        onClick={() => setNavbarOpen(!NavbarOpen)}/>

        <button onClick={() => scrollToSection('HOME')} className='NAVMOB-home absolute'>HOME</button>
        <button onClick={() => scrollToSection('GALLERY')} className='NAVMOB-about absolute'>ABOUT</button>
        <button onClick={() => scrollToGallery()} className='NAVMOB-gallery absolute'>GLIMPSE</button>
        <button onClick={() => scrollToSection("SPONSORS")} className='NAVMOB-sponsors absolute'>SPONSORS</button>
        
        {/* on Contact scroll to bottom irrespective of path */}
        <button className='NAVMOB-contact absolute' onClick={() => {
                if (!lenis.current) return;
                closeNav();
                lenis.current?.scrollTo(document.body.scrollHeight, { duration: 1.2, easing: (x) => 1 - Math.pow(1 - x, 4) });
            }}>
            CONTACT
        </button>
        <button onClick={() => scrollToSection('PASTEVENTS')} className="NAVMOB-pastEvents absolute w-max">PAST EVENTS</button>
        {/* <Link href="/Track" className='NAVMOB-pastEvents absolute w-max'> PAST EVENTS</Link> */}
        <button onClick={() => scrollToSection("TEAM")} className='NAVMOB-team absolute'>TEAM</button>
    </div>
  )
}

export default NavMobile