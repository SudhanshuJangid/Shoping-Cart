import { Stack } from "@fluentui/react";
import { Button } from "react-bootstrap";
import { ShopingCart } from "../Context/ShopingCart";
import { DataItem } from "./data";
type Caritmprops = {
  id: number;
  qty: number;
};

export const CarditemBuket = ({ id, qty }: Caritmprops) => {
  const { Removeqty } = ShopingCart();
  const itenm = DataItem.find((i) => i.id === id);
  if (itenm == null) {
    return null;
  }
  const ParticularAddPrice = itenm.price * qty;
  return (
    <>
      <Stack>
        <img src={itenm.imgurl} style={{ width: "345px", height: "175px" }} />
        <div className="d-flex justify-content-between align-items-baseline py-1">
          <span className="ms-2 fw-bold">
            {itenm.name} * {qty}
          </span>
          <span className="me-3 text-muted">${itenm.price}</span>
        </div>
        <div className="d-flex justify-content-between align-items-baseline">
          <span className="ms-2 fw-bold">Total of product =</span>
          <span className="me-3 text-muted">${ParticularAddPrice}</span>
        </div>
        <Button className="btn-danger my-2 py-1" onClick={() => Removeqty(id)}>
          Delete
        </Button>
      </Stack>
    </>
  );
};
