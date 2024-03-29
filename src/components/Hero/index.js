import React, { useState, useEffect, useRef } from "react";
import {
  HeroSection,
  HeroWrapper,
  HeroContent,
  HeroImage,
  HeroSlide,
  HeroSlider,
  PrevArrow,
  NextArrow,
  SliderButtons,
} from "./hero.elements";

import { sliderData as slides } from "../../data/sliderData";

import { Button } from "../Utils/Buttons";

const Index = () => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
    timeout.current = setTimeout(nextSlide, 4000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === length - 1 ? 0 : current + 1);

    console.log(current);
  };

  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === 0 ? length - 1 : current - 1);
    console.log(current);
  };

  return (
    <HeroSection>
      <HeroWrapper>
        {slides.map((slide, index) => (
          <HeroSlide key={index}>
            {current === index && (
              <HeroSlider>
                <HeroImage src={slide.image} />
                <HeroContent>
                  <h1>{slide.title}</h1>
                  <p>{slide.price}</p>
                  <Button to={slide.path} primary="true">
                    {slide.label}
                  </Button>
                </HeroContent>
              </HeroSlider>
            )}
          </HeroSlide>
        ))}
        <SliderButtons>
          <PrevArrow onClick={prevSlide} />
          <NextArrow onClick={nextSlide} />
        </SliderButtons>
      </HeroWrapper>
    </HeroSection>
  );
};

export default Index;
