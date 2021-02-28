import React, { useState } from "react";
import Dropdown from "./components/DropdownMenu";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection/Index";
import { Navbar } from "./components/Navbar/index";
import GlobalStyle from "./globalStyles";
import { SectionData, SectionData2 } from "./data/InformationSection";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero />
      <InfoSection {...SectionData} />
    </>
  );
}

export default App;
