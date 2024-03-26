import React from "react";
import PropertyCarousel from '../Components/PropertyCarousel';
import '../../css/PropertyCarousel.css';

const PropertyDetails = () => {
  return (
    <>
      <div className="property-details-container" style={{backgroundColor: "#292F36"}}>
        <PropertyCarousel 
          showIndicators={true}
          swipeable={true}
          useKeyboardArrows={false}
          showThumbs={false}
        />
        <div>
          <p>testafjqsjfsdkgmsfqsdf</p>
        </div>
      </div>
    </>
  );
}

export default PropertyDetails;