import React, { Suspense } from "react";
import { Label, Spinner, Stack } from "@fluentui/react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import { DataItem } from "../Components/data";
// import { StoreItem } from "../Components/StoreItem";
import { wait } from "@testing-library/user-event/dist/utils";

const StoreItem = React.lazy(() =>
  wait(1000).then(() =>
    import("../Components/StoreItem").then((module) => {
      return { default: module.StoreItem };
    })
  )
);

const Store = () => {
  return (
    <>
      <div>Store pages.....</div>
      <Row>
        {DataItem.map((ele) => (
          <Col key={ele.id}>
            <Suspense
              fallback={
                <div>
                  <Spinner
                    label="Nope, still loading..."
                    ariaLive="assertive"
                    labelPosition="left"
                  />
                </div>
              }
            >
              <StoreItem {...ele} />
            </Suspense>
          </Col>
        ))}
      </Row>
    </>
  );
};
export default Store;
