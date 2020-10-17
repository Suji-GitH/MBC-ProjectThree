import React from "react";
import Header from "../components/BO_Layout/Header";
import Footer from "../components/BO_Layout/Footer";
import ThemeGrid from "../components/BO_Layout/ThemeGrid";


function ThemeBuilder() {
  return (
    <>
      <Header />
      <ThemeGrid />
      <Footer />
    </>
  );
}

export default ThemeBuilder;