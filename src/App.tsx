import React, { useState, useEffect } from "react";
import ThemeContainer from "./styles/themes/ThemeContainer";
import { Flex } from "@chakra-ui/core";

import Header from "./components/header/Header.component";
import ApiData from "./components/apiData/ApiData.component";
import SearchOrders from "./components/searchOrders/SearchOrders.component";
import SearchOrderById from "./components/searchOrderById/SearchOrderById.component";
import OrdersList from "./components/ordersList/OrdersList.component";

import { api } from "./api/api";

import { jsonToSheet } from "./services/JsonToSheet";

function App() {
  const [token, setToken] = useState("");
  const [orders, setOrders] = useState([]);

  const generateToken = (token: string) => {
    api
      .post("/Login", {
        login_token: token,
      })
      .then((response) => saveToken(response.data))
      .catch((error) => {
        console.log(error);
      });
  };

  const saveToken = (token: string) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const setOrderById = (order: []) => {
    setOrders(order);
  };

  const setOrderByFilters = (orders: []) => {
    setOrders(orders);
  };

  const cleanOrders = () => {
    setOrders([]);
  };

  const generateXLSX = () => {
    jsonToSheet(orders);
  };

  useEffect(() => {
    let getToken = localStorage.getItem("token");

    if (getToken) {
      setToken(getToken);
    }
  }, []);

  return (
    <ThemeContainer>
      <Header />

      <Flex
        justifyContent="center"
        flexDirection="column"
        paddingY="10"
        paddingX={["2", "10", "30", "40"]}
        className="app-wrapper"
      >
        <ApiData handleGenerateToken={generateToken} />

        <SearchOrders
          token={token}
          handleSetOrdersByFilters={setOrderByFilters}
        />

        <SearchOrderById token={token} handleSetOrderById={setOrderById} />

        <OrdersList
          orders={orders}
          handleCleanOrders={cleanOrders}
          handleGenerateXLSX={generateXLSX}
        />
      </Flex>
    </ThemeContainer>
  );
}

export default App;
