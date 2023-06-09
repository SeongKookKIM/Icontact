import React, { useEffect, useMemo } from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import "./media.css";
import Head from "./pages/Head";
import RoadMap from "./pages/RoadMap";
import About from "./pages/About";
import Nfts from "./pages/Nfts";
import Footline from "./Footline";
import Link from "./pages/Link";
import Footer from "./pages/Footer";

import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import Slide from "./pages/Slide";
import MobileMenu from "./pages/MobileMenu";
import Team from "./pages/Team";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    gsap.to(".bg", {
      scrollTrigger: {
        trigger: ".bg",
        scrub: 1,
      },
      yPercent: 50,
      duration: 5,
    });

    ScrollTrigger.refresh();
  }, []);

  const memoizedHead = useMemo(() => <Head />, []);

  return (
    <BrowserRouter>
      <div className="App">
        {memoizedHead}
        <Slide />
        <About />
        <RoadMap />
        <Nfts />
        <Footline />
        <Team />
        <img src="/assets/image/bg01.png" alt="bg" className="bg"></img>
        <Footer />
        <MobileMenu />
        <Link />
      </div>
    </BrowserRouter>
  );
}

export default App;
