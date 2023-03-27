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
      <div className="about-content">
        <p>
          When a cat and a person make eye contact, it signifies understanding
          and communication between them. The NFT artwork "Eye Contact"
          intensifies this connection even more. The artwork captures a moment
          where a cat and a person are looking at each other. The cat is filled
          with curiosity, and the person greets it with a warm smile. As their
          eyes meet, their connection begins. The background of the artwork is
          colorless, representing the moment when cats and humans are with
          nature, recognizing each other's existence. Furthermore, this artwork
          is an NFT created using blockchain technology, ensuring its uniqueness
          and authentication. Owning this artwork provides the opportunity to
          not only view the moment of the cat and person making eye contact, but
          also allows one to experience a special sense of ownership.
        </p>
      </div>
    </section>
  );
}

export default About;
