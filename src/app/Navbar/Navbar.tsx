"use client";
import dynamic from 'next/dynamic'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';  
import React, { useEffect, useState } from 'react'

// Create a component that only renders on client side
const NavbarClient = () => {
    const [NavbarHover, setNavbarHover] = useState(false);
    const [gsapLoaded, setGsapLoaded] = useState(false);
    const [gsap, setGsap] = useState<any>(null);
    const router = useRouter();
    const pathname = usePathname();

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
    useEffect(() => {
        if (!gsapLoaded || !gsap) return;

        gsap.to('.NAV', {
            y: NavbarHover ? -80 : -70,
            duration: 0.1,
            ease: 'power1'
        });
    }, [NavbarHover, gsapLoaded, gsap]);

    // Initial animation after GSAP is loaded
    useEffect(() => {
        if (!gsapLoaded || !gsap) return;

        gsap.to('.NAV', {
            y: 0,
            scale: 0.5
        });

        gsap.to('.NAV', {
            y: -70,
            scale: 1,
            duration: 0.6,
            delay: 2,
            ease: 'power2.out'
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
            delay: 1.2,
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
            x: '100vw',
            duration: 1,
            ease: 'power3.inOut',
        })
        .to('.NAV', {
            opacity: 0,
            duration: 0.5,
            ease: 'power2.in'
        }, '>-0.5'); // Start slightly before the previous animation ends
    }

    return (
        <div 
            className={`NAV uppercase sm:visible font-light w-fit px-[90px] h-[50px] fixed bottom-[-65px] 
                items-center flex justify-center gap-[80px] text-black ${gsapLoaded ? 'opacity-100' : 'opacity-0'}`}
            onMouseEnter={() => setNavbarHover(true)} 
            onMouseLeave={() => setNavbarHover(false)}
        >
            <a onClick={() => scrollToSection('HOME')} className="cursor-pointer">Home</a>
            <a onClick={() => scrollToSection('GALLERY')} className="cursor-pointer">About</a>
            <a onClick={() => scrollToGallery()} className="cursor-pointer">Gallery</a>
            <a onClick={() => scrollToSection('TEAM')} className="cursor-pointer">TEAM</a>
            <button onClick={() => directTo('Track')}>PAST EVENTS</button>
            <a href="#CONTACT">Contact</a>
        </div>
    );
};

// Create the main Navbar component that dynamically loads the client component
const Navbar = dynamic(() => Promise.resolve(NavbarClient), {
    ssr: false
});

export default Navbar;