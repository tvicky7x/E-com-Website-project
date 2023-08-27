import React, { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Review from "./Review";
import Context from "../../Context";

function ProductDetails({ data }) {
  const ctx = useContext(Context);

  return (
    <>
      <Container>
        <Row className=" gap-3">
          <Col className=" d-flex justify-content-center">
            <img
              src={data.url}
              alt=""
              className="object-fit-cover rounded sticky-top"
              style={{ width: "400px", height: "400px" }}
            />
          </Col>
          <Col md={true}>
            <h2 className=" fs-3">{data.item}</h2>
            <h3 className=" fs-1 fw-bold">₹ {data.price}</h3>
            <Review star={data.star} />
            <div className="mt-3">
              <Button
                variant="dark"
                onClick={() => {
                  ctx.addCart(data);
                }}
              >
                Add to Cart
              </Button>
              <Button
                variant="outline-dark"
                className="ms-2"
                onClick={ctx.openCart}
              >
                View Cart
              </Button>
            </div>
            <h4 className="mt-3 text-dark-emphasis">Description</h4>
            <p>{data.description}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProductDetails;
