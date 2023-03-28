import React, { useEffect, useCallback, useState, useMemo } from "react";
import lax from "lax.js";
import { Link } from "react-scroll";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Head() {
  // Lax.js
  useEffect(() => {
    lax.init();

    lax.addDriver("scrollY", function () {
      return window.scrollY;
    });

    lax.addElements(
      ".head",
      {
        scrollY: {
          rotate: [
            [0, 1e9],
            [0, 1e9],
          ],
        },
      },
      []
    );
  }, []);

  // Particles
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  // Image Loader
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "assets/image/bg02.gif";
    img.onload = () => setIsLoaded(true);
  }, []);

  // Nav Bar Controll
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        setIsNavVisible(true);
      } else {
        setIsNavVisible(false);
      }
      setPrevScrollPos(currentScrollPos);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  // Memoized nav style
  const navStyle = useMemo(
    () => ({ top: isNavVisible ? "20px" : "-80px" }),
    [isNavVisible]
  );

  return (
    <div className="header">
      <div className="header-bg">
        {isLoaded && <img src="assets/image/bg02.gif" alt="head-bg" />}
      </div>
      <div className="head-title">
        <img src="/assets/image/title.gif" alt="title"></img>
      </div>
      <div className="head">
        <img src="/assets/image/head.png" alt="head"></img>
      </div>
      <nav style={navStyle}>
        <ul>
          <li>
            <h3>
              <Link to="about" smooth={true} duration={500} offset={0}>
                <i>ABOUT</i>
              </Link>
            </h3>
          </li>
          <li>
            <h3>
              <Link to="roadmap" smooth={true} duration={500} offset={0}>
                <i>Road MAP</i>
              </Link>
            </h3>
          </li>
          <li>
            <h3>
              <Link to="nfts" smooth={true} duration={500} offset={40}>
                <i>NFTS</i>
              </Link>
            </h3>
          </li>
        </ul>
      </nav>

      <div className="arrow">
        <img src="assets/image/arrow.gif" alt="arrow"></img>
      </div>

      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
            modes: {
              bubble: {
                distance: 450,
                duration: 3,
                size: 2,
                opacity: 0,
              },
              repulse: {
                distance: 400,
                duration: 4,
              },
            },
          },
          particles: {
            color: {
              value: "#fff",
            },
            links: {
              color: "#fff",
              distance: 0,
              enable: true,
              opacity: 1,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 40,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 0.5, max: 4 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}

export default Head;
