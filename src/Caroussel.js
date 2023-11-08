import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollSpeed = 2; // Vitesse de défilement (ajustez selon vos besoins)
  const carouselWidth = 300; // Largeur du carrousel en pixels (ajustez selon vos besoins)
  const slideWidth = 1200; // Largeur d'une diapositive en pixels (ajustez selon vos besoins)

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      setScrollPosition((prevPosition) => (prevPosition + scrollSpeed) % slideWidth);
    }, 50); // Fréquence de mise à jour du défilement (ajustez selon vos besoins)

    return () => {
      clearInterval(scrollInterval);
    };
  }, []);
// style={{ width: `${carouselWidth}px`, height: 'auto', overflow: 'hidden' }}
  return (
    <div className="carousel carousel-center w-11/12 p-4 bg-neutral rounded-box">
      <div
        className="carousel-inner space-x-4"
        style={{
          transform: `translateX(-${scrollPosition}px)`,
          display: 'flex',
          transition: 'transform 0.5s ease-in-out',
        }}
      >
        {/* Contenu de votre carrousel */}
        <div className="carousel-item" >
          <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="rounded-box" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="rounded-box" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="rounded-box" alt="Slide 3" />
        </div>
        <div className="carousel-item">
          <img src="/images/stock/photo-1494253109108-2e30c049369b.jpg" className="rounded-box" alt="Slide 4" />
        </div>
        <div className="carousel-item">
          <img src="/images/stock/photo-1550258987-190a2d41a8ba.jpg" className="rounded-box" alt="Slide 5" />
        </div>
        <div className="carousel-item">
          <img src="/images/stock/photo-1559181567-c3190ca9959b.jpg" className="rounded-box" alt="Slide 6" />
        </div>
        <div className="carousel-item">
          <img src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" className="rounded-box" alt="Slide 7" />
        </div>
        {/* Ajoutez plus de diapositives selon vos besoins */}
      </div>
    </div>
  );
};

export default Carousel;
