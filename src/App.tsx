import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer/Footer";
const App: React.FC = () => {
  const body = document.body;
  body.style.background = "var(--bg-color)";
  return (
    <>
      <div className="hero selection:bg-transparent  w-full min-h-[100vh] bg-[var(--bg-color)] xl:!px-10 xl:!py-8 lg:!px-8 lg:!py-6 !px-5 !py-4 overflow-hidden ">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Portfolio />
      </div>
      <Footer />
    </>
  );
};
export default App;
