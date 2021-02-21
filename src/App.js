import React from "react";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar/index";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar></Navbar>
      <Hero></Hero>
    </>
  );
}

export default App;
