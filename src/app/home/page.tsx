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

    //image animation
    let homeImageTl = gsap.timeline();
    homeImageTl.fromTo(homeImageRef.current,{scale: 1.27, opacity: 1,}, { opacity: 1 ,scale: 1, duration: 1.3, delay: 0, ease: 'expo.inOut' });
    homeImageTl.fromTo(homeImageRef.current,{y: 100}, {y:0, duration: 1, ease: 'power4.inOut'});
    // button animation
    gsap.fromTo(LandingButton.current,{xPercent: 50, opacity: 0} , { xPercent: 0, opacity: 1, duration: 2.4, delay: 2.8, ease: 'power4.inOut' });


    // hunters heading animation
    gsap.fromTo(huntersHeading.current,{x: 50, opacity: 0} , { x: 0, opacity: 1, duration: 2.4, delay: 2.8, ease: 'power4.inOut' });
    

  },[])

  return (
    <div id="HOME" style={{ overflowX: 'hidden' }} className="HOME CONTAINER text-neutral-200 overflow-x-clip flex flex-col items-center w-screen min-h-screen pb-[30vh] px-4 md:px-14 bg-black">
      
      <div ref={homeImageRef} className=" homeImage w-screen mb-2  object-fill overflow-hidden">
        <Image  src={homeImage} priority={true} alt="homeImage" className=" object-cover w-full "/>
      </div>
      <div ref={leftRect} className=" absolute left-0 top-0 w-1/2 h-screen bg-black "></div>
      <div ref={rightRect} className=" absolute right-0 top-0 w-1/2 h-screen bg-black "></div>

      <button ref={LandingButton} className=" hidden uppercase py-1 px-3 mt-14  lg:mt-4 text-black bg-neutral-200 md:rounded-full self-start md:px-10 md:py-3 font-light text-sm">
        Join techhunterssss community 
      </button>

      {/* TechHunterss heading */}
      <span ref={huntersHeading} className=" uppercase leading-[50px] md:leading-[70px] self-start text-wrap max-w-[90vw] text-[50px] lg:text-[60px] xl:text-[70px] font-black mt-10 lg:mt-4 ">
        Tech~hunterssss
        <span className="absolute toRightHomeAnimationAsset h-full w-full left-0 bg-black z-20"></span>
      </span>
      
      <div className=" absolute min-w-fit min-h-max invisible md:visible right-0 top-[80vh] md:right-[30px] md:top-[480px] bottom-10 md:scale-75 xl:scale-100 xl:right-[80px] xl:top-[76vh]">
        <HomeAssetAnmation />
      </div>
    </div>
  );
}
