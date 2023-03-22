import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className="about"
      data-aos="zoom-out-down"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <h2>ABOUT</h2>
      <div className="about-content"></div>
    </section>
  );
}

export default About;
