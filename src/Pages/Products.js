import React, { useContext, useEffect } from "react";
import Store from "../Components/Store/Store";
import Context from "../Context";
import { useNavigate } from "react-router-dom";

function Products() {
  const ctx = useContext(Context);
  const navigate = useNavigate();
  useEffect(() => {
    if (!ctx.isLogIn) {
      navigate("/logIn");
    }
  }, [ctx.isLogIn, navigate]);

  return (
    <>
      <Store />
    </>
  );
}

export default Products;
