"use client";
import Image from "next/image";
import homeImage from "./Assets/Home_Image.png";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";


export default function Home() {
  const homeImageRef = useRef(null);
  const leftRect = useRef(null);
  const rightRect = useRef(null);
  const LandingButton = useRef(null);
  const huntersHeading = useRef(null);

  useEffect(() => {

    //image reveal animation
    gsap.to(leftRect.current, { x: '-50vw', duration: 3, delay: 0, ease: 'power4.out' });
    gsap.to(rightRect.current, { x: '50vw', duration: 3, delay: 0, ease: 'power4.out' });
    // gsap.to(leftRect.current, { scale: 0, duration: 0, delay: 2.5,});
    // gsap.to(rightRect.current, { scale: 0 , duration: 0, delay: 2.5,});

    //image animation
    let homeImageTl = gsap.timeline();
    homeImageTl.fromTo(homeImageRef.current,{scale: 0.7, opacity: 1,}, { opacity: 1 ,scale: 1, duration: 1.3, delay: 0, ease: 'power1.in' });
    homeImageTl.fromTo(homeImageRef.current,{y: 100}, {y:0, duration: 1, ease: 'power4.out'});
    gsap.to(homeImageRef.current,{boxShadow:'1px 22px 50px 0px rgba(240,240,240,1)',delay: 1.3, duration: 0.6, ease: 'power4.out'})
    gsap.to(homeImageRef.current,{boxShadow: '1px 22px 0px 0px rgba(240,240,240,0)',delay: 1.7,  duration: 1, ease: 'power4.out'})

    // button animation
    gsap.fromTo(LandingButton.current,{x: '-50vw'} , { x: 0, duration: 1, delay: 2, ease: 'power3.out' });


    // hunters heading animation
    gsap.fromTo(huntersHeading.current,{x: 100, opacity: 0} , { x: 0, opacity: 1, duration: 1, delay: 2.6, ease: 'power3.out' });
    

  },[])

  return (
    <div style={{ overflowX: 'hidden' }} className=" text-neutral-200 overflow-x-hidden flex flex-col items-center w-screen min-h-screen px-14 bg-neutral-950 font-[family-name:var(--font-geist-mono)]">
      
      <Image ref={homeImageRef} src={homeImage} alt="homeImage" className=" w-full mt-[2em] rounded-[60px]"/>
      <div ref={leftRect} className=" absolute left-0 top-0 w-1/2 h-screen bg-neutral-950 "></div>
      <div ref={rightRect} className=" absolute right-0 top-0 w-1/2 h-screen bg-neutral-950 "></div>

      <button ref={LandingButton} className="mt-16 text-black bg-neutral-200 rounded-full self-start px-10 py-3 font-light text-sm">
        Join techhunterssss community 
      </button>

      {/* TechHunterss heading */}
      <span ref={huntersHeading} className=" self-start text-[90px] font-black -mt-1">
        techhunterssss
      </span>

    </div>
  );
}
