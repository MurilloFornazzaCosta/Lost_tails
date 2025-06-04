import { useState, useEffect } from "react";
import slide0 from "../assets/imgSlide4.png";
import slide1 from "../assets/imgSlide1.jpg";
import slide2 from "../assets/imgSlide2.png";
import slide3 from "../assets/imgSlide3.png";
import slide4 from "../assets/imgSlide5.png";

const images = [slide0, slide1, slide2, slide3, slide4];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(2);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

    // Avança automaticamente a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval); // limpa intervalo ao desmontar
  }, []);

  return (
    <div className="relative w-screen rounded-xl mt-40 shadow-lg ">
      <div
        className="flex transition-transform duration-500 gap-36"
        style={{ transform: `translateX(-${currentIndex * 111.54}%)` }}
      >
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Slide ${index + 1}`} className="w-full flex-shrink-0" />
        ))}
      </div>

      {/* Botões */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
      >
        &#10095;
      </button>
    </div>
  );
};

export default ImageCarousel;
// O componente ImageCarousel exibe um carrossel de imagens com botões para navegar entre as imagens.
