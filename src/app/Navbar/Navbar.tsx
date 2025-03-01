"use client";
import dynamic from 'next/dynamic'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';  
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import logo from '../Assets/HuntersLogo-removebg-preview.png';

// Create a component that only renders on client side
export default function Navbar() {
    const [NavbarHover, setNavbarHover] = useState(false);
    const [gsapLoaded, setGsapLoaded] = useState(false);
    const [gsap, setGsap] = useState<any>(null);
    //for client side rendering
    const [isClient, setIsClient] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

      
    useEffect(() => {
        setIsClient(true);
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

    // Handle hover animation after GSAP is loaded
    // useEffect(() => {
    //     if (!gsapLoaded || !gsap) return;

    //     gsap.to('.NAV', {
    //         y: NavbarHover ? -80 : -70,
    //         duration: 0.1,
    //         ease: 'power1'
    //     });
    // }, [NavbarHover, gsapLoaded, gsap]);

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
        if (!gsapLoaded || !gsap) return;

        if(pathname === '/'){
            gsap.to(window, {
                scrollTo: { y: `#${id}`, offsetY: 50 },
                duration: 1.4,
                delay: 0.2,
                ease: 'power2.inOut',
            });
        }
        else{
            router.push(`/#${id}`);
            
        }    
    };

    const scrollToGallery = () => {
        if (!gsapLoaded || !gsap) return;

        if(pathname !== '/'){
            router.push('/');
        }
        gsap.to(window, {
            scrollTo: { y: '#GALLERY', offsetY: -window.innerHeight/2 - 40 },
            duration: 1.4,
            delay: .2,
            ease: 'power2.inOut',
        });
    };

    const directTo = (eventId: string) => {
        if (!gsap) return;
    
        // First, prevent any new interactions
        // document.body.style.pointerEvents = 'none';
    
        // Create timeline for better control
        const tl = gsap.timeline({
            onComplete: () => {
                router.push(`/${eventId}`);
            }
        });
    
        tl.to('.CONTAINER', {
            opacity: 0,
            scale: 0.5,
            duration: 1,
            ease: 'power3.inOut',
        });
        // .to('.NAV', {
        //     opacity: 0,
        //     duration: 0.5,
        //     ease: 'power2.in'
        // }, '>-0.5'); // Start slightly before the previous animation ends
    }

    if(!isClient){
        return(
            <div>Loading....</div>
        )
    }

    return (
        <div 
            className={`NAV md:visible font-light w-screen h-[70px] fixed bottom-[-75px] 
                items-center flex justify-center gap-[80px] ${gsapLoaded ? 'opacity-100' : 'opacity-0'}`}
            onMouseEnter={() => setNavbarHover(true)} 
            onMouseLeave={() => setNavbarHover(false)}
            >
            <Image src={logo} alt="Hunters-Logo" className="w-[60px]  fixed left-4 object-cover" />
            <button onClick={() => scrollToSection('HOME')} className="cursor-pointer">HOME</button>
            <button onClick={() => scrollToSection('GALLERY')} className="cursor-pointer">ABOUT</button>
            <button onClick={() => scrollToGallery()} className="cursor-pointer">GLIMPSE</button>
            {/* <button onClick={() => directTo('Track')}>PAST EVENTS</button> */}
            <Link href="/Track"> PAST EVENTS</Link>
            <Link href="/#SPONSORS">SPONSORS</Link>
            <Link href="/Team">TEAM</Link>

            {/* <button onClick={() => scrollToSection('TEAM')} className="cursor-pointer">TEAM</button> */}
            <button onClick={() => scrollToSection('CONTACT')}>CONTACT</button>
        </div>
    );
};

// Create the main Navbar component that dynamically loads the client component
// const Navbar = dynamic(() => Promise.resolve(NavbarClient), {
//     ssr: false
// });

// export default Navbar;