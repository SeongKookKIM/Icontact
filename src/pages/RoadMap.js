import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { debounce } from "lodash";

function RoadMap() {
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = debounce(() => {
      if (contentRef.current) {
        AOS.refreshHard();
      }
    }, 300);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="roadmap">
      <h2 data-aos="fade-up" data-aos-duration="2000" ref={contentRef}>
        NFTS
      </h2>
      <div
        className="roadmap-content"
        data-aos="flip-right"
        data-aos-duration="3000"
        ref={contentRef}
      >
        <p>
          The cat that greets you with warm eye contact is currently shivering
          with hunger on the street. Abandoned and unfamiliar with seeking help
          from people, stray cats endure pain, loneliness, and hunger on their
          own. We need to help them out with warm hearts.
        </p>
      </div>
    </div>
  );
}

export default RoadMap;
