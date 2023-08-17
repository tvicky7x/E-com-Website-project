import React from "react";
import { Container } from "react-bootstrap";

function Hero() {
  return (
    <div className="bg-dark-subtle py-3 text-center">
      <Container>
        <h1 style={{ fontSize: "60px" }} className="fw-bold">
          The Generics
        </h1>
      </Container>
    </div>
  );
}

export default Hero;
