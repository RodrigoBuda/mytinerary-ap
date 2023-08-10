import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "../components/Card";

export default function Carrusel({ data }) {
  let counter = 0;
  let counterTo = 4;
  function counter_suma() {
    counter += 4;
    counterTo += 4;
  }

  const carouselItems = [];

  while (counterTo <= data.length) {
    carouselItems.push(
      <Carousel.Item key={counterTo}>
        <div className="cuatro-img">
          {data.slice(counter, counterTo).map((each, index) => (
            <Card src={each.photo} alt={each.id} city={each.city} key={index} />
          ))}
        </div>
      </Carousel.Item>
    );

    counter_suma();
  }

  return <Carousel>{carouselItems}</Carousel>;
}
