"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export default function LenisProvider() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      syncTouch: false,
      touchInertiaMultiplier: 3,
      easing: (x) => 1 - Math.pow(1 - x, 4),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      // Cleanup function to prevent memory leaks
      lenis.destroy();
    };
  }, []);

  return null; // No UI needed, just runs the effect
}
