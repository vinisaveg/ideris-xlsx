import React from "react";
import ThemeContainer from "./styles/themes/ThemeContainer";
import { Flex } from "@chakra-ui/core";

import Header from "./components/header/Header.component";
import ApiData from "./components/apiData/ApiData.component";
import SearchOrders from "./components/searchOrders/SearchOrders.component";
import SearchOrderById from "./components/searchOrderById/SearchOrderById.component";
import OrdersList from "./components/ordersList/OrdersList.component";

function App() {
  return (
    <ThemeContainer>
      <Header />

      <Flex
        justifyContent="center"
        flexDirection="column"
        paddingY="20"
        paddingX={["2", "10", "30", "40"]}
        className="app-wrapper"
      >
        <ApiData />

        <SearchOrders />

        <SearchOrderById />

        <OrdersList />
      </Flex>
    </ThemeContainer>
  );
}

export default App;
