import React from "react";
import { FontIcon, mergeStyles, mergeStyleSets, Stack } from "@fluentui/react";
import {
  Navbar as NavbarBs,
  Nav,
  Container,
  Button,
  Offcanvas,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaBitbucket } from "react-icons/fa";
import { ShopingCart } from "../Context/ShopingCart";
import { CarditemBuket } from "./Carditembucket";
import { DataItem } from "./data";
const iconClass = mergeStyles({
  fontSize: 50,
  height: 50,
  width: 50,
  margin: "0 25px",
});

const classNames = mergeStyleSets({
  deepSkyBlue: [{ color: "deepskyblue" }, iconClass],
  greenYellow: [{ color: "greenyellow" }, iconClass],
  salmon: [{ color: "salmon" }, iconClass],
});

export const Navbar = () => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { cartQuantityyy, carditem } = ShopingCart();

  return (
    <NavbarBs className="bg-grey shadow-sm mb-3">
      <Container>
        <Nav>
          <Nav.Link to={"/"} as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to={"/Aboutus"} as={NavLink}>
            About Us
          </Nav.Link>
          <Nav.Link to={"/Store"} as={NavLink}>
            Store Bar
          </Nav.Link>
        </Nav>
        {cartQuantityyy > 0 && (
          <Button
            className=" btn-outline-warning rounded-circle"
            style={{ position: "relative" }}
            onClick={handleShow}
          >
            <FaBitbucket />
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-item-center"
              style={{
                color: "white",
                width: "1.3rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(45%,30%)",
              }}
            >
              {cartQuantityyy}
            </div>
          </Button>
        )}
        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Selected Cart Basket</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Stack>
              {carditem.map((itm) => (
                <CarditemBuket key={itm.id} {...itm} />
              ))}
              <div className="d-flex justify-content-between align-items-baseline mt-2">
                <span className="ms-2 fw-bold" style={{ color: "orange" }}>
                  Total of products =
                </span>
                <span className="me-3 text-muted fw-bolder">
                  {carditem.reduce((total, carditem) => {
                    const itenm = DataItem.find((i) => i.id === carditem.id);
                    return total + (itenm?.price || 0) * carditem.qty;
                  }, 0)}
                </span>
              </div>
            </Stack>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </NavbarBs>
  );
};
