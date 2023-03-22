import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function RoadMap() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="roadmap" id="roadmap">
      <h2 data-aos="fade-up">RoadMap</h2>
      <div className="roadmap-content" data-aos="flip-left">
        <p>
          How to Pick colors to cpa-
          <br />
          tivate Readers and Commu-
          <br />
          nicate Effectively - How to <br />
          Pick Colors to Captivate
          <br />
          Reacders and communicate
          <br />
          Effectively - VennagagaVenn-
          <br />
          gage
        </p>
      </div>
    </section>
  );
}

export default RoadMap;
