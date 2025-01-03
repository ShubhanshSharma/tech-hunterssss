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
    gsap.to(leftRect.current, { x: '-50vw', duration: 1.5, delay: 0, ease: 'expo.inOut', onComplete: () => {gsap.set(leftRect.current, {display: 'none'})} });
    gsap.to(rightRect.current, { x: '50vw', duration: 1.5, delay: 0, ease: 'expo.inOut', onComplete: () => {gsap.set(rightRect.current, {display: 'none'})} });
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
    <div id="HOME" style={{ overflowX: 'hidden' }} className="HOME CONTAINER text-neutral-200 overflow-x-clip flex flex-col items-center w-screen min-h-screen px-4 md:px-14 bg-black font-[family-name:var(--font-geist-mono)]">
      
      <div ref={homeImageRef} className=" w-full mt-[2em] px-2 mb-2 rounded-[24px] md:rounded-[60px] h-[55vh] lg:h-[400px] object-fill overflow-hidden">
        <Image  src={homeImage} alt="homeImage" className=" object-cover h-full md:w-full md:rounded-[60px]"/>
      </div>
      <div ref={leftRect} className=" absolute left-0 top-0 w-1/2 h-screen bg-black "></div>
      <div ref={rightRect} className=" absolute right-0 top-0 w-1/2 h-screen bg-black "></div>

      <button ref={LandingButton} className=" uppercase py-1 px-3 mt-14  lg:mt-4 text-black bg-neutral-200 md:rounded-full self-start md:px-10 md:py-3 font-light text-sm">
        Join techhunterssss community 
      </button>

      {/* TechHunterss heading */}
      <span ref={huntersHeading} className=" orbitron uppercase leading-[50px] md:leading-[70px] self-start text-wrap max-w-[90vw] text-[50px] lg:text-[60px] xl:text-[70px] font-black mt-10 lg:mt-4 ">
        Tech-hunterssss
      </span>
      
      <div className=" absolute min-w-fit min-h-max invisible md:visible right-0 top-[80vh] md:right-[30px] md:top-[480px] bottom-10 md:scale-75 xl:scale-100 xl:right-[80px] xl:top-[64vh]">
        <HomeAssetAnmation />
      </div>
    </div>
  );
}
