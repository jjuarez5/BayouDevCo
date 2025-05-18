import React from "react";
import Header from "./components/Header";
import LandingScreen from "./components/LandingScreen";
import About from "./components/About";
import Pricing from "./components/Pricing";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <Header />
      <LandingScreen />
      <About />
      <Gallery />
      <Pricing />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
