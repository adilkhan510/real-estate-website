import styled, { css } from "styled-components";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";

const arrowButtons = css`
  width: 50px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  background-color: #000d1a;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s ease-in;

  &:hover {
    background-color: #cd853f;
    transform: scale(1.05);
  }
`;
export const HeroSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

export const HeroWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const HeroSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;

export const SliderButtons = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;
`;
export const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  z-index: 10;

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
`;
export const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  transition: 0.3s ease-in-out;
`;
export const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  left: -15%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1600px;
  width: calc(100%-100px);
  color: #fff;
  padding: 2rem;
  margin-left: 1rem;

  h1 {
    /* font-size: clamp(1.5rem, 8vw, 2.5rem); */
    /* first value = smallest  */
    font-size: clamp(0.5rem, 8vw, 2.5rem);
    font-weight: 800;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: center;
    margin-bottom: 0.8rem;
  }

  p {
    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    font-size: 1rem;
  }
`;

export const PrevArrow = styled(IoArrowBack)`
  ${arrowButtons}
`;
export const NextArrow = styled(IoArrowForward)`
  ${arrowButtons}
`;
export const Arrow = styled(IoMdArrowRoundForward);
