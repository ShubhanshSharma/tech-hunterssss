"use client";
import React from "react";
import AnimatedCursor from "react-animated-cursor"

export default function CustomCursor() {
  return (
    <div className="App">
    <AnimatedCursor
    trailingSpeed={1}
      innerSize={12}
      outerSize={30}
      color='255, 255, 255'
      outerAlpha={1}
      innerScale={4}
      outerScale={2}
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