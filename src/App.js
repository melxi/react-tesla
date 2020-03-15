import React from "react";
import { Header } from "./components/Header";
import { HeaderSlider } from "./components/HeaderSlider";
import { Stats } from "./components/Stats";

const App = () => {
  return (
    <>
      <Header />
      <HeaderSlider />
      <Stats />
    </>
  );
};

export default App;
