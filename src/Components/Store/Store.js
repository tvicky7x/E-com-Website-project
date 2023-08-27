import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import ItemCard from "./ItemCard";
import Context from "../../Context";
import Auth from "../Auth/Auth";

function Store() {
  const ctx = useContext(Context);
  return (
    <>
      <Container className="text-center py-3">
        <h2 className="mb-4 mt-2">Music Albums</h2>
        <div className="d-flex flex-wrap gap-3 justify-content-evenly">
          {ctx.List.map((item) => {
            return <ItemCard data={item} key={item.id} />;
          })}
        </div>
        <h2 className="mb-4 mt-5">Merchandise</h2>
        <div className="d-flex flex-wrap gap-3 justify-content-evenly">
          {ctx.Merchandise.map((item) => {
            return <ItemCard data={item} key={item.id} />;
          })}
        </div>
      </Container>
      <Auth />
    </>
  );
}

export default Store;
