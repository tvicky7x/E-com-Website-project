import React, { useContext } from "react";
import Context from "../Context";
import { useParams } from "react-router-dom";
import ProductDetails from "../Components/Product/ProductDetails";

function Product() {
  const ctx = useContext(Context);
  const params = useParams();
  const ListItem = ctx.List.filter((item) => {
    return item.id === params.productId;
  });
  const MerchItem = ctx.Merchandise.filter((item) => {
    return item.id === params.productId;
  });

  return (
    <>
      <div className=" py-3">
        {ListItem.length > 0 && <ProductDetails data={ListItem[0]} />}

        {MerchItem.length > 0 && <ProductDetails data={MerchItem[0]} />}
      </div>
    </>
  );
}

export default Product;
