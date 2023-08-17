import React, { useContext } from "react";
import { Button, ListGroup } from "react-bootstrap";
import Context from "../../Context";

function CartItem(props) {
  const ctx = useContext(Context);
  return (
    <ListGroup.Item>
      <div className="d-flex gap-3 align-items-center">
        <img
          src={props.data.url}
          alt=""
          className="object-fit-cover"
          style={{ width: "100px", height: "100px" }}
        />
        <div>
          <p className="m-0">
            Item - <span className="fw-semibold">{props.data.item}</span>
          </p>
          <p className="m-0">
            Price - <span className="fw-semibold">₹ {props.data.price}</span>
          </p>
          <p className="m-0">
            Quantity{" "}
            <span className="fw-semibold">
              <i
                class="bi bi-plus-lg"
                onClick={() => {
                  ctx.changeCart(props.data.id, 1);
                }}
              ></i>{" "}
              {props.data.quantity}{" "}
              <i
                class="bi bi-dash-lg"
                onClick={() => {
                  ctx.changeCart(props.data.id, -1);
                }}
              ></i>
            </span>
          </p>
          <Button
            variant="danger"
            size="sm"
            className="mt-2 p-1"
            style={{ fontSize: "12px" }}
            onClick={() => {
              ctx.removeCart(props.data.id);
            }}
          >
            Remove
          </Button>
        </div>
      </div>
    </ListGroup.Item>
  );
}

export default CartItem;