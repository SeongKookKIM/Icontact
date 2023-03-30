import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Team() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="team">
      <h2 data-aos="fade-up" data-aos-delay="200">
        Team Cat Tower
      </h2>
      <ul>
        <li data-aos="fade-up" data-aos-delay="500">
          <h5>illustrator</h5>
          <ol>
            <li>
              <p>Jacop</p>
            </li>
            <li>
              <p>Jane</p>
            </li>
            <li>
              <p>Andew</p>
            </li>
            <li>
              <p>Alex</p>
            </li>
          </ol>
        </li>
        <li data-aos="fade-up" data-aos-delay="800">
          <h5>MD</h5>
          <ol>
            <li>
              <p>Frances</p>
            </li>
            <li>
              <p>Grace</p>
            </li>
          </ol>
        </li>
        <li data-aos="fade-up" data-aos-delay="1100">
          <h5>Project Manager</h5>
          <ol>
            <li>
              <p>Chris</p>
            </li>
            <li>
              <p>Lisa</p>
            </li>
            <li>
              <p>Matthew</p>
            </li>
          </ol>
        </li>
        <li data-aos="fade-up" data-aos-delay="1400">
          <h5>Programmer</h5>
          <ol>
            <li>
              <p>Sam</p>
            </li>
            <li>
              <p>Peter</p>
            </li>
          </ol>
        </li>
      </ul>
    </div>
  );
}

export default Team;
