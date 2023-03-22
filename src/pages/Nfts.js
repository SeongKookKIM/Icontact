import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Nfts() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="nfts">
      <h2 data-aos="zoom-out-right" data-aos-duration="2000">
        NFTS
      </h2>
      <div className="nfts-content" data-aos="zoom-out-left"></div>
    </section>
  );
}

export default Nfts;
