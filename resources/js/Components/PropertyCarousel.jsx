import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MyPropertyCarousel = () => {
  return (
    <Carousel>
      <div>
        <img src="..\images\PropertyInterior\front-yard.avif" alt="View of the front yard of the property" />
      </div>
      <div>
        <img src="..\images\PropertyInterior\entrance.avif" alt="View of the entrance of the property" />
      </div>
      <div>
        <img src="..\images\PropertyInterior\living-room.avif" alt="View of the entrance of the property" />
      </div>
      <div>
        <img src="..\images\PropertyInterior\kitchen.avif" alt="View of the entrance of the property" />
      </div>
      <div>
        <img src="..\images\PropertyInterior\dining-room.avif" alt="View of the entrance of the property" />
      </div>
      <div>
        <img src="..\images\PropertyInterior\bedroom1.avif" alt="View of the entrance of the property" />
      </div>
      <div>
        <img src="..\images\PropertyInterior\attic.avif" alt="View of the entrance of the property" />
      </div>
      <div>
        <img src="..\images\PropertyInterior\back-yard.avif" alt="View of the entrance of the property" />
      </div>
      {/* Add more images as needed */}
    </Carousel>
  );
}

export default MyPropertyCarousel;
