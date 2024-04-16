import React, { useState } from 'react';
import p1 from './image/p1.jpg'
import p2 from './image/p2.jpg'
import p3 from './image/p3.jpg'
import p4 from './image/p4.jpg'

const ImageCarousel = () => {
 
  const images = [
    p2,
    p3,
    p4,
    p1,
  ];

  const [currentImage, setCurrentImage] = useState(0);


  const handleCircleClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="w-full max-h-96 max-w-screen-xl  mx-auto px-4 m-10">
      <img
        src={images[currentImage]}
        alt={`Image ${currentImage + 1}`}
        className="w-full md:h-96 overflow-hidden rounded-lg shadow-lg object-cover"
      />
      <div className="flex justify-center mt-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => handleCircleClick(index)}
            className={`w-4 h-4 rounded-full mx-1 focus:outline-none ${currentImage === index ? 'bg-blue-500' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
