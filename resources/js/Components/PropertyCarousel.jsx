import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MyPropertyCarousel = () => {
  return (
    <Carousel>
      <div>
        <img src="..\images\abby-rurenko-uOYak90r4L0-unsplash.jpg" alt="Property room 1" />
      </div>
      <div>
        <img src="" alt="Property room 2" />
      </div>
      {/* Add more images as needed */}
    </Carousel>
  );
}

export default MyPropertyCarousel;
