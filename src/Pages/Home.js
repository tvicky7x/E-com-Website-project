import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function storeBtn() {
    navigate("/products");
  }
  return (
    <>
      <Container className="text-center py-4">
        <h1>Home PAGE</h1>
        <Button variant="dark" size="sm" onClick={storeBtn}>
          Store
        </Button>
      </Container>
    </>
  );
}

export default Home;
