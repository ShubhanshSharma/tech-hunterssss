"use client";
import Image from "next/image";
import homeImage from "../Assets/home image.jpg";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
// Only import HomeAssetAnmation when needed
// import HomeAssetAnmation from "../Components/HomeAssetAnmation";

export default function Home() {
  const homeImageRef = useRef(null);
  const leftRect = useRef(null);
  const rightRect = useRef(null);
  const LandingButton = useRef(null);
  const huntersHeading = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Create a single timeline for better performance
    const mainTl = gsap.timeline();
    
    if(isLoaded){
    // Add animations to the timeline sequentially
    mainTl
      // Rectangle animations
      .to(leftRect.current, { 
        x: '-50vw', 
        duration: 1.5, 
        ease: "expo.inOut",
        onComplete: () => { gsap.set(leftRect.current, {visibility: 'hidden'}) } // Use visibility instead of display
      }, 1)
      .to(rightRect.current, { 
        x: '50vw', 
        duration: 1.5, 
        ease: 'expo.inOut',
        onComplete: () => { gsap.set(rightRect.current, {visibility: 'hidden'}) } 
      }, 1) // Run at the same time as left rect
      
      // Image animation
      .fromTo(homeImageRef.current, 
        {scale: 1.27, opacity: 1}, 
        {scale: 1, opacity: 1, duration: 1.5, ease: 'expo.out'}, 
        1) // Start at the same time as rectangles
      
      // Heading animation
      .fromTo(huntersHeading.current,
        {y: 50, opacity: 0},
        {y: 0, opacity: 1, duration: 1.5, ease: 'power4.out'},
        0) // Start after image starts scaling
        
      // Button animation  
      .fromTo(LandingButton.current,
        {yPercent: 50, opacity: 0},
        {yPercent: 0, opacity: 1, duration: 1.5, ease: 'power4.out'},
        2); // Start after heading animation starts

      }
  }, [isLoaded]);

  return (
    <div 
      id="HOME" 
      className="HOME overflow-x-hidden text-neutral-200 flex flex-col justify-center items-center w-screen min-h-screen pb-[6vh] px-4 md:px-14 bg-black"
    >
      <div ref={homeImageRef} className="absolute homeImage overflow-hidden">
        <Image 
          priority 
          src={homeImage} 
          alt="homeImage" 
          // width={1920} 
          // height={1080}
          // quality={85} // Reduce quality slightly for faster loading
          placeholder="blur" // Add a blur placeholder
          // blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          className="w-[100vw] h-[80vh] object-cover"
          onLoadingComplete={() => setIsLoaded(true)}
        />
      </div>
      
      {/* Use conditional rendering for animation elements */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <div className="animate-pulse text-2xl">Loading...</div>
        </div>
      )}
      
      <div ref={leftRect} className="leftRect absolute left-0 top-0 w-1/2 h-screen "></div>
      <div ref={rightRect} className="rightRect absolute right-0 top-0 w-1/2 h-screen "></div>

      {/* TechHunterss heading */}
      <span 
        data-scroll 
        data-scroll-speed="0.5" 
        ref={huntersHeading} 
        className="uppercase leading-[50px] md:leading-[70px] text-wrap max-w-[90vw] text-[50px] lg:text-[60px] xl:text-[70px] font-black mt-10 lg:mt-4"
      >
        Tech~hunterssss
      </span>

      <button 
        ref={LandingButton} 
        className="uppercase py-1 px-3 mt-14 lg:mt-4 text-black bg-neutral-200 rounded-md md:px-10 md:py-3 font-light text-sm"
      >
        Join US 
      </button>
      
      {/* Lazy load the asset animation when needed */}
      {isLoaded && (
        <div className="absolute min-w-fit min-h-max invisible md:visible right-0 top-[80vh] md:right-[30px] md:top-[480px] bottom-10 md:scale-75 xl:scale-100 xl:right-[80px] xl:top-[76vh]">
          {/* <HomeAssetAnmation /> */}
        </div>
      )}
    </div>
  );
}