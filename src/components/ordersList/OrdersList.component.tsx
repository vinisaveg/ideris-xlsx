import React, { FunctionComponent } from "react";
import { Flex, Button } from "@chakra-ui/core";

import Order from "../order/Order.component";

const OrdersList: FunctionComponent = () => {
  return (
    <>
      <Flex
        mt="5"
        flexDir="column"
        borderRadius={5}
        maxHeight="600px"
        minHeight="250px"
        overflow="scroll"
        bg="gray.700"
      >
        <Order />
        <Order />
        <Order />
        <Order />

        {/* <span>Faça uma busca</span> */}
      </Flex>

      <Flex justifyContent="flex-end" alignItems="center" mt="5">
        <Button variantColor="yellow" mr="5">
          Limpar
        </Button>
        <Button variantColor="green">Gerar Excel</Button>
      </Flex>
    </>
  );
};

export default OrdersList;
