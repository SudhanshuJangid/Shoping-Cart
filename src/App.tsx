import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Container } from "react-bootstrap";
import { Stack } from "@fluentui/react";
import { Navbar } from "./Components/Navbar";
import { ShoppingCartPovider } from "./Context/ShopingCart";

const Home = lazy(() => import("./pages/Home"));
const Aboutus = lazy(() => import("./pages/Aboutus"));
const Store = lazy(() => import("./pages/Store"));

export const App: React.FunctionComponent = () => {
  return (
    <ShoppingCartPovider>
      <BrowserRouter>
        <Container>
          <Navbar />
          <Stack>
            <Suspense fallback={<h1>Loading...</h1>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Aboutus" element={<Aboutus />} />
                <Route path="/Store" element={<Store />} />
              </Routes>
            </Suspense>
          </Stack>
        </Container>
      </BrowserRouter>
    </ShoppingCartPovider>
  );
};
