import React from "react";
import Button from "react-bootstrap/Button";

export default function TextCarrusel() {
  return (
    <>
      <h1 className="tit-carrusel">Find the perfect destination</h1>
      <p className="text-carrusel">
        Our app will help you find the perfect path for your next trip. With an
        easy-to-use interface and a host of itinerary options, planning your
        next trip has never been easier.
      </p>
      <Button className="button-viewmore" size="lg">
        View more
      </Button>
    </>
  );
}
