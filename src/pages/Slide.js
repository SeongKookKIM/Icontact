import { useState, useMemo } from "react";
import Marquee from "react-fast-marquee";

function Slide() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexs, setCurrentIndexs] = useState(0);

  const images = useMemo(
    () => [
      { src: "assets/image/slider/353.png", alt: "Image 1" },
      { src: "assets/image/slider/354.png", alt: "Image 2" },
      { src: "assets/image/slider/355.png", alt: "Image 3" },
      { src: "assets/image/slider/356.png", alt: "Image 4" },
      { src: "assets/image/slider/357.png", alt: "Image 5" },
      { src: "assets/image/slider/358.png", alt: "Image 6" },
      { src: "assets/image/slider/359.png", alt: "Image 7" },
      { src: "assets/image/slider/360.png", alt: "Image 8" },
      { src: "assets/image/slider/361.png", alt: "Image 9" },
      { src: "assets/image/slider/362.png", alt: "Image 10" },
    ],
    []
  );
  const imagess = useMemo(
    () => [
      { src: "assets/image/slider/363.png", alt: "Image 11" },
      { src: "assets/image/slider/364.png", alt: "Image 12" },
      { src: "assets/image/slider/365.png", alt: "Image 13" },
      { src: "assets/image/slider/366.png", alt: "Image 14" },
      { src: "assets/image/slider/367.png", alt: "Image 15" },
      { src: "assets/image/slider/368.png", alt: "Image 16" },
      { src: "assets/image/slider/369.png", alt: "Image 17" },
      { src: "assets/image/slider/370.png", alt: "Image 18" },
      { src: "assets/image/slider/371.png", alt: "Image 19" },
      { src: "assets/image/slider/372.png", alt: "Image 20" },
    ],
    []
  );

  const visibleImages = useMemo(() => {
    const startIndex = currentIndex % images.length;
    return [...images.slice(startIndex), ...images.slice(0, startIndex)];
  }, [currentIndex, images]);

  const visibleImagess = useMemo(() => {
    const startIndex = currentIndexs % imagess.length;
    return [...imagess.slice(startIndex), ...imagess.slice(0, startIndex)];
  }, [currentIndexs, imagess]);

  return (
    <div className="slide">
      <Marquee
        className="marquee"
        pauseOnHover={false}
        speed={60}
        gradient={false}
      >
        {visibleImages.map((image, index) => (
          <img src={image.src} alt={image.alt} key={`${image.src}-${index}`} />
        ))}
      </Marquee>
      <Marquee
        className="marquee"
        pauseOnHover={false}
        speed={60}
        gradient={false}
        direction={"right"}
      >
        {visibleImagess.map((image, index) => (
          <img src={image.src} alt={image.alt} key={`${image.src}-${index}`} />
        ))}
      </Marquee>
    </div>
  );
}

export default Slide;
