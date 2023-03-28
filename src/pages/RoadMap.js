import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function RoadMap() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="roadmap" id="roadmap">
      <h2
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        RoadMap
      </h2>
      <div
        className="roadmap-content"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <p>
          The cat that greets you with warm eye contact is currently shivering
          with hunger on the street. Abandoned and unfamiliar with seeking help
          from people, stray cats endure pain, loneliness, and hunger on their
          own. We need to help them out with warm hearts.
        </p>
      </div>
    </section>
  );
}

export default RoadMap;
