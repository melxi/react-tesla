import React from "react";
import { Header } from "./components/Header";
import { HeaderSlider } from "./components/HeaderSlider";
import { Stats } from "./components/Stats";
import { Showcase } from "./components/Showcase";
import { Advantages } from "./components/Advantages";
import { Design } from "./components/Design";

const App = () => {
  return (
    <>
      <Header />
      <HeaderSlider />
      <Stats />
      <Showcase />
      <Advantages />
      <Design />
    </>
  );
};

export default App;
