import React, { useContext } from "react";
import Store from "../Components/Store/Store";
import { Button } from "react-bootstrap";
import Context from "../Context";

function Products() {
  const ctx = useContext(Context);
  return (
    <>
      <Store />
      <div className="bg-dark-subtle py-3 text-center">
        <Button variant="dark" size="lg" onClick={ctx.openCart}>
          View Cart
        </Button>
      </div>
    </>
  );
}

export default Products;
