import React from "react";
import {
  LeftColumn,
  RightColumn,
  Section,
  Container,
} from "./infoSection.elements";
import { Button } from "../Utils/Buttons";

const InfoSection = ({
  heading,
  paragraph1,
  paragraph2,
  buttonLabel,
  image,
  reverse,
  label,
}) => {
  return (
    <Section>
      <Container>
        <LeftColumn>
          <h1>{heading}</h1>
          <p>{paragraph1}</p>
          <p>{paragraph2}</p>
          <Button to="/homes" primary="true" big="true">
            {buttonLabel}
          </Button>
        </LeftColumn>
        <RightColumn reverse={reverse}>
          <img src={image} alt="home" />
        </RightColumn>
      </Container>
    </Section>
  );
};

export default InfoSection;
