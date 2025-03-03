"use client";
import React from "react";
import AnimatedCursor from "react-animated-cursor"

export default function CustomCursor() {
  return (
    <>
      {typeof window !== 'undefined' && window.innerWidth > 768 && (
        <div className="App hidden md:block z-[10000]">
          <AnimatedCursor
            trailingSpeed={1.5}
            innerSize={5}
            outerSize={20}
            color='255, 255, 255'
            outerAlpha={1}
            innerScale={1}
            outerScale={7}
            outerStyle={{
              mixBlendMode: 'exclusion'
            }}   
            innerStyle={{
              mixBlendMode: 'exclusion'
            }} 
            clickables={[
              'a',
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              'label[for]',
              'select',
              'textarea',
              'button',
              '.link'
            ]}
          />
        </div>
      )}
    </>
  );
}