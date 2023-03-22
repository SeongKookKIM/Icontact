import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Shop() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="shop">
      <h2 data-aos="flip-up" data-aos-duration="1000">
        Shop
      </h2>
      <div
        className="shop-content"
        data-aos="flip-down"
        data-aos-duration="1000"
      ></div>
    </section>
  );
}

export default Shop;
