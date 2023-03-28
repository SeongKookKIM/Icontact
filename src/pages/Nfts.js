import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Nfts() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="nfts">
      <h2 data-aos="fade-up" data-aos-duration="2000">
        NFTS
      </h2>
      <div
        className="nfts-content"
        data-aos="flip-left"
        data-aos-duration="3000"
      >
        <ol>
          <li>
            <p>1. Issue NFTs.</p>
          </li>
          <li>
            <p>
              2. A special NFT (Cat snack) giveaway is offered upon reaching 30%
              of holders.
            </p>
          </li>
          <li>
            <p>
              3. Launch volunteering projects for stray cats upon reaching 70%
              of holders.
            </p>
          </li>
          <li>
            <p>
              4. 90% of the profits will be donated to support stray cats upon
              reaching 100% of holders.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}

export default Nfts;
