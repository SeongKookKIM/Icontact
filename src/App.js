import React, { useEffect, useMemo } from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import "./media.css";
import Head from "./pages/Head";
import RoadMap from "./pages/RoadMap";
import About from "./pages/About";
import Nfts from "./pages/Nfts";
import Shop from "./pages/Shop";
import Footline from "./Footline";
import Footer from "./pages/Footer";

import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import Slide from "./pages/Slide";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import RoomRoundedIcon from "@mui/icons-material/RoomRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import CurrencyBitcoinRoundedIcon from "@mui/icons-material/CurrencyBitcoinRounded";
import ShoppingBasketRoundedIcon from "@mui/icons-material/ShoppingBasketRounded";
import MobileMenu from "./pages/MobileMenu";

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
        <RoadMap />
        <About />
        <Nfts />
        <Shop />
        <Footline />
        <img src="/assets/image/bg01.png" alt="bg" className="bg"></img>
        <Footer />
        <MobileMenu />
      </div>
    </BrowserRouter>
  );
}

export default App;
