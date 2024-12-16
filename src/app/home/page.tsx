"use client";
import Image from "next/image";
import homeImage from "../Assets/Home_Image.png";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import HomeAssetAnmation from "../Components/HomeAssetAnmation";


export default function Home() {
  const homeImageRef = useRef(null);
  const leftRect = useRef(null);
  const rightRect = useRef(null);
  const LandingButton = useRef(null);
  const huntersHeading = useRef(null);

  useEffect(() => {

    //image reveal animation
    gsap.to(leftRect.current, { x: '-50vw', duration: 1.5, delay: 0, ease: 'expo.inOut' });
    gsap.to(rightRect.current, { x: '50vw', duration: 1.5, delay: 0, ease: 'expo.inOut' });
    // gsap.to(leftRect.current, { scale: 0, duration: 0, delay: 2.5,});
    // gsap.to(rightRect.current, { scale: 0 , duration: 0, delay: 2.5,});

    //image animation
    let homeImageTl = gsap.timeline();
    homeImageTl.fromTo(homeImageRef.current,{scale: 1.27, opacity: 1,}, { opacity: 1 ,scale: 1, duration: 1.3, delay: 0, ease: 'expo.inOut' });
    homeImageTl.fromTo(homeImageRef.current,{y: 100}, {y:0, duration: 1, ease: 'power4.out'});
    // gsap.to(homeImageRef.current,{boxShadow:'1px 22px 50px 0px rgba(240,240,240,1)',delay: 1.3, duration: 0, ease: 'power4.out'})
    // gsap.to(homeImageRef.current,{boxShadow: '1px 22px 0px 0px rgba(240,240,240,0)',delay: 1.7,  duration: 0.5, ease: 'power4.out'})
    // gsap.fromTo('.CONTAINER', {backgroundColor: '#fffff'}, {backgroundColor: 'rgba(0,0,0,1)', duration: 1, delay: 1.2, ease : 'power4.out'})

    // button animation
    gsap.fromTo(LandingButton.current,{xPercent: 50, opacity: 0} , { xPercent: 0, opacity: 1, duration: 2.4, delay: 2.8, ease: 'power4.out' });


    // hunters heading animation
    gsap.fromTo(huntersHeading.current,{x: 50, opacity: 0} , { x: 0, opacity: 1, duration: 2.4, delay: 2.8, ease: 'power4.out' });
    

  },[])

  return (
    <div style={{ overflowX: 'hidden' }} className="HOME CONTAINER text-neutral-200 overflow-x-hidden flex flex-col items-center w-screen min-h-screen px-14 bg-black font-[family-name:var(--font-geist-mono)]">
      
      <div ref={homeImageRef} className=" w-full mt-[1em] rounded-[60px] lg:h-[400px] object-fill overflow-hidden">
        <Image  src={homeImage} alt="homeImage" className=" w-full mt-[1em] rounded-[60px]"/>
      </div>
      <div ref={leftRect} className=" absolute left-0 top-0 w-1/2 h-screen bg-black "></div>
      <div ref={rightRect} className=" absolute right-0 top-0 w-1/2 h-screen bg-black "></div>

      <button ref={LandingButton} className=" lg:mt-8 text-black bg-neutral-200 rounded-full self-start px-10 py-3 font-light text-sm">
        Join techhunterssss community 
      </button>

      {/* TechHunterss heading */}
      <span ref={huntersHeading} className=" self-start lg:text-[90px] font-black lg:-mt-4 ">
        techhunterssss
      </span>
      
      <div className=" absolute min-w-fit min-h-max lg:right-[80px] lg:top-[440px]">
        <HomeAssetAnmation />
      </div>
    </div>
  );
}
