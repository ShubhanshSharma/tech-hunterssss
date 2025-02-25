"use client";
import React from "react";
import AnimatedCursor from "react-animated-cursor"

export default function CustomCursor() {
  return (
    <div className="App">
    <AnimatedCursor
    trailingSpeed={5}
      innerSize={5}
      outerSize={25}
      color='255, 255, 255'
      outerAlpha={1}
      innerScale={26}
      outerScale={5}
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
  );
}