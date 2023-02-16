import { Accordion, Button, Card } from "react-bootstrap";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { ShopingCart } from "../Context/ShopingCart";
type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgurl: string;
};

export const StoreItem = ({ id, name, price, imgurl }: StoreItemProps) => {
  const { getItemQuality, increaseCartqty, drecreaseqty, Removeqty } =
    ShopingCart();

  const Qty = getItemQuality(id);

  return (
    <>
      <Card key={id} style={{ width: "18rem", objectFit: "cover" }}>
        <Card.Img variant="top" src={imgurl} />
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-baseline">
            <span>{name}</span>
            <span className="text-muted">${price}</span>
          </Card.Title>
          {/* <Card.Text>${price}</Card.Text> */}
          {/* <Button variant="primary">Go somewhere</Button> */}
          <Accordion>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <AiFillPlusCircle />{" "}
                <span className="ms-3">Add to the Cart</span>
              </Accordion.Header>
              <Accordion.Body className="d-flex align-item-center justify-content-center">
                {Qty === 0 ? (
                  <Button onClick={() => increaseCartqty(id)}>ADD</Button>
                ) : (
                  <>
                    <Button onClick={() => increaseCartqty(id)}>
                      <AiFillPlusCircle />
                    </Button>
                    <div>
                      <span className="">{Qty}in Cart</span>
                    </div>
                    <Button onClick={() => drecreaseqty(id)}>
                      <AiFillMinusCircle />
                    </Button>
                    <br />
                    <Button onClick={() => Removeqty(id)}>Delete</Button>
                  </>
                )}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>
    </>
  );
};
