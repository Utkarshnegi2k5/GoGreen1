
import React, { useState, useEffect } from "react";
import "./Slideshow.css";
import img1 from "../image/image1.jpg";
import img2 from "../image/image2.jpg";
import img3 from "../image/image3.jpg";

const images = [img1, img2, img3];

function Slideshow() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);

  // For fade animation, only update prev when slide changes
  useEffect(() => {
    if (prev !== null) {
      const timeout = setTimeout(() => setPrev(null), 700);
      return () => clearTimeout(timeout);
    }
  }, [prev]);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [current]);

  const handlePrev = () => {
    setPrev(current);
    setCurrent((prevIdx) => (prevIdx - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setPrev(current);
    setCurrent((prevIdx) => (prevIdx + 1) % images.length);
  };

  return (
    <div className="slideshow-container">
      <button
        className="slideshow-arrow left"
        onClick={handlePrev}
        aria-label="Previous Slide"
      >
        &#8592;
      </button>
      <button
        className="slideshow-arrow right"
        onClick={handleNext}
        aria-label="Next Slide"
      >
        &#8594;
      </button>
      {prev !== null && (
        <img
          src={images[prev]}
          alt={`Slideshow ${prev + 1}`}
          className="slideshow-image exit"
        />
      )}
      <img
        src={images[current]}
        alt={`Slideshow ${current + 1}`}
        className="slideshow-image enter"
      />
      <div className="slideshow-dots">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={current === idx ? "dot active" : "dot"}
            onClick={() => {
              if (idx !== current) {
                setPrev(current);
                setCurrent(idx);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Slideshow;