import "./home.css";
import React, { useState, useEffect, useRef } from "react";
import slide2 from "./slide2.jpg";
import slide3 from "./slide3.jpg";
import slide5 from "./slide5.jpg";
import slide6 from "./slide6.jpg";
import slide7 from "./slide7.jpg";
import slide8 from "./slide8.jpg";

const images = [slide2, slide3, slide5, slide6, slide7, slide8];

export default function Slideshow() {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timeoutRef = useRef(null);

  // Make a copy of the first slide at the end
  const slides = [...images, images[0]];

  // Preload images to avoid white flashes
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Function to start slideshow
  const startSlideshow = () => {
    clearInterval(timeoutRef.current);
    timeoutRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
      setIsTransitioning(true);
    }, 3000);
  };

  // Start slideshow and handle visibility changes
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearInterval(timeoutRef.current);
      } else {
        startSlideshow();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    startSlideshow();

    return () => {
      clearInterval(timeoutRef.current);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // Handle transition end
  const handleTransitionEnd = () => {
    if (index === images.length) {
      // Disable transition and reset instantly
      setIsTransitioning(false);
      requestAnimationFrame(() => {
        setIndex(0);
        // Re-enable transition for future slides
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
    }
  };

  return (
    <div className="slideshow">
      <div
        className="slide-track"
        style={{
          transform: `translate3d(-${index * 100}%, 0, 0)`,
          transition: isTransitioning ? "transform 0.6s ease-in-out" : "none",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {slides.map((img, i) => (
          <img key={i} src={img} alt={`Slide ${i}`} className="slide" />
        ))}
      </div>
    </div>
  );
}
