import { Stack } from "@fluentui/react";
import React, { createRef, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { ActivityList } from "../Components/Activitylist";

const Home = () => {
  // const [state, setState] = useState();
  const inputRef: any = createRef();
  const focusfunction = (event: any) => {
    event.preventDefault();
    inputRef.current.focus();
  };
  // useEffect(() => {
  // }, []);
  const hello = {
    name: "Sudhanshu",
    age: 77,
  };
  return (
    <>
      <Stack>
        Home.....
        <ActivityList ref={inputRef} data={hello} />
        <Button onClick={focusfunction}>Update Bttn</Button>
      </Stack>
    </>
  );
};
export default Home;
