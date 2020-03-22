import React from "react";
import { Header } from "./components/Header";
import { HeaderSlider } from "./components/HeaderSlider";
import { Stats } from "./components/Stats";
import { Showcase } from "./components/Showcase";

const App = () => {
  return (
    <>
      <Header />
      <HeaderSlider />
      <Stats />
      <Showcase />
    </>
  );
};

export default App;
