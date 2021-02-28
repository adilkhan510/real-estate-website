import React from "react";
import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
`;
export const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const LeftColumn = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem 2rem;
  line-height: 1.4;
  order: ${({ reverse }) => (reverse ? "2" : "1")};

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    margin-bottom: 2rem;
  }
`;
export const RightColumn = styled.section`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "1" : "2")};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media screen and (max-width: 768px) {
      height: 90%;
      width: 90%;
    }
  }
`;
