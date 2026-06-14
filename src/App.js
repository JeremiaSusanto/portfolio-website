import React from "react";
import "./App.css";

// Import components
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Resume from "./components/resume/Resume";
import Home from "./components/home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
};

export default App;
