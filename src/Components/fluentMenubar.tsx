import React, { useState } from "react";
import { IButtonProps } from "@fluentui/react/lib/Button";
import { Button } from "react-bootstrap";
import { Link } from "@fluentui/react";

let adjustmentInterval: undefined;

export const FluentMenubar: React.FunctionComponent = () => {
  const [timer, setTimer] = useState<number>(0);
  const [start, setStarted] = useState<boolean>(false);
  const Starter = () => {
    (adjustmentInterval as any) = setInterval(() => {
      setTimer((x) => x + 1);
    }, 1000);
    setStarted(true);
  };
  function Stoper() {
    clearInterval(adjustmentInterval);
    setStarted(false);
  }
  function Reseter() {
    setTimer(0);
  }
  return (
    <>
      <div>
        <h6>{timer}</h6>
        <Button disabled={start} onClick={Starter} style={{ color: "green" }}>
          Start it.
        </Button>
        <Button onClick={Stoper}>Stop it.</Button>
        <Button onClick={Reseter}>Reset it.</Button>
        <Link href="https://www.youtube.com/" underline>
          it renders as an anchor tag.
        </Link>
      </div>
    </>
  );
};
