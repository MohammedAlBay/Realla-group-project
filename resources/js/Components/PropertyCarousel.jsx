import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../css/PropertyCarousel.css';

const PropertyCarousel = () => {
  return (
    <Carousel>
      <div>
        <img src="../images/PropertyInterior/front-yard.avif" alt="View of the front yard of the property" />
      </div>
      <div>
        <img src="../images/PropertyInterior/entrance.avif" alt="View of the entrance of the property" />
      </div>
      <div>
        <img src="../images/PropertyInterior/living-room.avif" alt="View of the living room of the property" />
      </div>
      <div>
        <img src="../images/PropertyInterior/kitchen.avif" alt="View of the kitchen of the property" />
      </div>
      <div>
        <img src="../images/PropertyInterior/dining-room.avif" alt="View of the dining-room of the property" />
      </div>
      <div>
        <img src="../images/PropertyInterior/bedroom1.avif" alt="View of the bedroom of the property" />
      </div>
      <div>
        <img src="../images/PropertyInterior/attic.avif" alt="View of the attic of the property" />
      </div>
      <div>
        <img src="../images/PropertyInterior/back-yard.avif" alt="View of the back yard of the property" />
      </div>
    </Carousel>
  );
}

export default PropertyCarousel;
