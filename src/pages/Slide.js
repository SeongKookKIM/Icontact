import { useState, useMemo } from "react";
import Marquee from "react-fast-marquee";

function Slide() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = useMemo(
    () => [
      { src: "assets/image/marquee01.jpg", alt: "Image 1" },
      { src: "assets/image/marquee02.jpg", alt: "Image 2" },
      { src: "assets/image/marquee01.jpg", alt: "Image 3" },
      { src: "assets/image/marquee02.jpg", alt: "Image 4" },
      { src: "assets/image/marquee01.jpg", alt: "Image 5" },
      { src: "assets/image/marquee02.jpg", alt: "Image 6" },
      { src: "assets/image/marquee01.jpg", alt: "Image 7" },
      { src: "assets/image/marquee02.jpg", alt: "Image 8" },
    ],
    []
  );

  const visibleImages = useMemo(() => {
    const startIndex = currentIndex % images.length;
    return [...images.slice(startIndex), ...images.slice(0, startIndex)];
  }, [currentIndex, images]);

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
        {visibleImages.map((image, index) => (
          <img src={image.src} alt={image.alt} key={`${image.src}-${index}`} />
        ))}
      </Marquee>
    </div>
  );
}

export default Slide;
