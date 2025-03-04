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
        onComplete: () => { gsap.set(leftRect.current, {display: 'none'}) }
      }, 0.4)
      .to(rightRect.current, { 
        x: '50vw', 
        duration: 1.5, 
        ease: 'expo.inOut',
        onComplete: () => { gsap.set(rightRect.current, {display: 'none'}) } 
      }, 0.4) // Run at the same time as left rect
      
      // Image animation
      .fromTo(homeImageRef.current, 
        {scale: 1.27, opacity: 1}, 
        {scale: 1, opacity: 1, duration: 1.5, ease: 'expo.out'}, 
        0.4) // Start at the same time as rectangles
      
      // Heading animation
      .fromTo(huntersHeading.current,
        {y: 50, opacity: 0},
        {y: 0, opacity: 1, duration: 1.5, ease: 'power4.out'},
        2.4) // Start after image starts scaling
        
      // Button animation  
      .fromTo(LandingButton.current,
        {yPercent: 50, opacity: 0},
        {yPercent: 0, opacity: 1, duration: 1.5, ease: 'power4.out'},
        2.4) // Start after heading animation starts

        .fromTo('.scroll-down-animation',
          {yPercent: 50, opacity: 0},
          {yPercent: 20, opacity: 1, duration: 1.5, ease: 'power4.out'},
          3.4); // Start after heading animation starts

      }
  }, [isLoaded]);

  return (
    <div 
      id="HOME" 
      className="HOME overflow-x-hidden text-neutral-200 flex flex-col justify-center items-center w-screen min-h-screen pb-[70px] px-4 md:px-14 bg-black"
    >
      <div ref={homeImageRef} className="absolute top-0 homeImage overflow-hidden">
        <Image 
          priority 
          src={homeImage} 
          alt="homeImage" 
          placeholder="blur" // Add a blur placeholder
          // blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          className="w-[100vw] h-[60vh] md:h-[90vh] object-cover"
          onLoadingComplete={() => setIsLoaded(true)}
        />
      </div>
      
      {/* Use conditional rendering for animation elements */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <div className="animate-pulse text-2xl">Loading...</div>
        </div>
      )}
      {/*initial animation divs */}
      <div ref={leftRect} className="leftRect absolute left-0 top-0 w-1/2 h-screen "></div>
      <div ref={rightRect} className="rightRect absolute right-0 top-0 w-1/2 h-screen "></div>

      {/* TechHunterss heading */}
      <span 
        ref={huntersHeading} 
        className="uppercase homeHeading leading-[50px]  md:leading-[70px]  max-w-[90vw] text-[30px] sm:text-[60px] md:text-[80px] lg:text-[100px] font-black mt-[62vh] lg:mt-14"
      >
        Tech~hunterssss
      </span>
      
      <pre className="homePara z-50 up relative mx-auto text-justify block text-[12px] md:text-[20px] font-normal md:font-light md:text-gray-50 mt-2 md:mt-12 px-[50px]  max-w-[400px] text-gray-500">
        " together, we hold the power <br/>to build the world we envision "
      </pre>

      <a 
        href="https://chat.whatsapp.com/L2H2Ykk1qtLLy9y8jxsZjl"
        ref={LandingButton} 
        target="_blank"
        className="uppercase py-2 px-6 mt-14  opacity-0 text-[12px] sm:text-[16px] text-slate-50 bg-white bg-opacity-30 backdrop-blur-md border-white border rounded-lg md:rounded-[14px]  font-light"
      >
        Join US 
      </a>

      {/* Scroll down animation */}
      {/* <div className="scroll-down-animation opacity-0 translate-y-24">
        <span></span>
        <span></span>
        <span></span>
      </div> */}
      <div className="mouse m-2 -translate-y-6 md:translate-y-28 scroll-down-animation opacity-0 "></div>


      {/* Lazy load the asset animation when needed */}
      {isLoaded && (
        <div className="absolute min-w-fit min-h-max invisible md:visible right-0 top-[80vh] md:right-[30px] md:top-[480px] bottom-10 md:scale-75 xl:scale-100 xl:right-[80px] xl:top-[76vh]">
          {/* <HomeAssetAnmation /> */}
        </div>
      )}
    </div>
  );
}