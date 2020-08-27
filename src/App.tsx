import React, { useState, useEffect } from "react";
import ThemeContainer from "./styles/themes/ThemeContainer";
import { Flex, Button } from "@chakra-ui/core";

import Header from "./components/header/Header.component";
import ApiData from "./components/apiData/ApiData.component";
import SearchOrders from "./components/searchOrders/SearchOrders.component";
import SearchOrderById from "./components/searchOrderById/SearchOrderById.component";
import OrdersList from "./components/ordersList/OrdersList.component";

import { api } from "./api/api";

function App() {
  const [token, setToken] = useState("");

  const generateToken = (token: string) => {
    saveToken(token);
  };

  const saveToken = (token: string) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const getAuthToken = () => {
    api
      .post("/Login", {
        login_token: token,
      })
      .then((response) => console.log(response.data));
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

      <Button onClick={() => getAuthToken()}>Get Token Request</Button>

      <Flex
        justifyContent="center"
        flexDirection="column"
        paddingY="20"
        paddingX={["2", "10", "30", "40"]}
        className="app-wrapper"
      >
        <ApiData handleGenerateToken={generateToken} />

        <SearchOrders />

        <SearchOrderById />

        <OrdersList />
      </Flex>
    </ThemeContainer>
  );
}

export default App;
