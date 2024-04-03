const carouselBookmarks = () => {
  const carousel = document.querySelector(".carousel-inner");
  console.log("Carousel Element:", carousel);

  const carouselItems = document.querySelectorAll(".carousel-item");
  console.log("Carousel Items:", carouselItems);

  const carouselItemWidth = carouselItems[0].offsetWidth; // Width of one carousel item
  console.log("Carousel Item Width:", carouselItemWidth);
  
  let currentIndex = 0;

  const moveCarousel = (direction) => {
    if (direction === "prev" && currentIndex > 0) {
      currentIndex--;
    } else if (direction === "next" && currentIndex < carouselItems.length - 3) {
      currentIndex++;
    }
    const newPosition = -currentIndex * carouselItemWidth;
    carousel.style.transform = `translateX(${newPosition}px)`;
  };

  document.querySelector(".carousel-control-prev").addEventListener("click", () => {
    moveCarousel("prev");
  });

  document.querySelector(".carousel-control-next").addEventListener("click", () => {
    moveCarousel("next");
  });
};

export default carouselBookmarks;