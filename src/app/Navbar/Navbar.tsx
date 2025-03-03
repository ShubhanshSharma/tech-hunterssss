"use client";
import dynamic from 'next/dynamic'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';   
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image';
import logo from '../Assets/HuntersLogo-removebg-preview.png';
import Lenis from 'lenis';

// Create a component that only renders on client side
export default function Navbar() {
    const [NavbarHover, setNavbarHover] = useState(false);
    const [gsapLoaded, setGsapLoaded] = useState(false);
    const [gsap, setGsap] = useState<any>(null);
    const lenis = useRef<Lenis | null>(null);
    //for client side rendering
    const [isClient, setIsClient] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    // const gallery = document.getElementById('GALLERY');
    // const home = document.getElementById('HOME');
    // const team = document.getElementById('TEAM');
    // const about = document.getElementById('ABOUT');
    // const contact = document.getElementById('CONTACT');
    // const sponsors = document.getElementById('SPONSORS');


      
    useEffect(() => {
        setIsClient(true);
    }, []);

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


    // Load GSAP and ScrollToPlugin only on client side
    useEffect(() => {
        const loadGSAP = async () => {
            const gsapModule = await import('gsap');
            const { ScrollToPlugin } = await import('gsap/ScrollToPlugin');
            
            gsapModule.gsap.registerPlugin(ScrollToPlugin);
            setGsap(gsapModule.gsap);
            setGsapLoaded(true);
        };

        loadGSAP();
    }, []);

    // Initial animation after GSAP is loaded
    useEffect(() => {
        if (!gsapLoaded || !gsap) return;

        gsap.fromTo('.NAV',{
            y:0,
        }, {
            y: -70,
            duration: 0.6,
            delay: 3.2,
            ease: 'power3.out'
        });
    }, [gsapLoaded, gsap]);

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


    if(!isClient){
        return(
            <div>Loading....</div>
        )
    }

    return (
        window.innerWidth > 800 ? (
            <div className={`NAV hidden md:flex font-light w-screen h-[70px] fixed bottom-[-75px] 
                items-center  justify-center gap-[80px] ${gsapLoaded ? 'opacity-100' : 'opacity-0'}`}
            onMouseEnter={() => setNavbarHover(true)} 
            onMouseLeave={() => setNavbarHover(false)}
            >
                <Image src={logo} alt="Hunters-Logo" className="w-[60px]  fixed left-4 object-cover" />
                <button onClick={() => scrollToSection('HOME')} className="cursor-pointer">HOME</button>
                <button onClick={() => scrollToSection('GALLERY')} className="cursor-pointer">ABOUT</button>
                <button onClick={() => scrollToGallery()} className="cursor-pointer">GLIMPSE</button>
                {/* <button onClick={() => directTo('Track')}>PAST EVENTS</button> */}
                <Link href="/Track"> PAST EVENTS</Link>
                <button onClick={() => scrollToSection("SPONSORS")} >SPONSORS</button>
                <button onClick={() => scrollToSection('TEAM')} >TEAM</button>

                {/* <button onClick={() => scrollToSection('TEAM')} className="cursor-pointer">TEAM</button> */}
                <button onClick={() => scrollToSection('CONTACT')}>CONTACT</button>
            </div>
            ) : null
    );
}

// Create the main Navbar component that dynamically loads the client component
// const Navbar = dynamic(() => Promise.resolve(NavbarClient), {
//     ssr: false
// });

// export default Navbar;