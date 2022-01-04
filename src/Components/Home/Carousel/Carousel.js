import React from 'react';
import { Carousel } from 'react-bootstrap';
const CarouselSection = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://console.kr-asia.com/wp-content/uploads/2020/05/Food-Delivery-Shutterstock-M-Size-1-scaled.jpg"
      alt="First slide"
      height="500px" 
      width="600px"
    />
    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://3toh891af6rf1cn1po1ecevj-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/iStock-1214541379-1536x1024.jpg"
      alt="Second slide"
      height="500px" 
      width="600px"
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.fatbit.com/fab/wp-content/uploads/2017/08/Growcer_MainImage.jpg"
      alt="Third slide"
      height="500px" 
      width="600px"
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item> 

  
</Carousel>
        </div>
    );
};

export default CarouselSection;