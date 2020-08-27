import React, { FunctionComponent } from "react";
import { Box, Image, Flex } from "@chakra-ui/core";

import OrderDetail from "../orderDetail/OderDetail.component";

interface OrderProps {
  id: string
  imageItem: string
  idContaMarketplace: string
  status: string
  codigo: number
  nomeContaMarketplace: string
  marketplace: string
  data: string
  codigoCarrinho: number
}

const Order: FunctionComponent = () => {
  const properties = {
    id: 1,
    imageItem:
      "https://imgd.aeplcdn.com/600x337/n/cw/ec/46994/jaguar-f-type-right-front-three-quarter18.jpeg?q=85",
    idContaMarketplace: 2,
    status: "pago",
    codigo: 10,
    nomeContaMarketplace: "Market Account",
    marketplace: "Marketplace Example",
    data: "7 de Novembro de 2019",
    codigoCarrinho: 9,
  };

  return (
    <Flex mb="5" mt="5" bg="gray.500" alignItems="center">
      <Image
        display={["none", "none", "block"]}
        src={properties.imageItem}
        alt="Pedido"
        maxWidth="400px"
      />

      <Box p="2">
        <OrderDetail name="Id" value={properties.id} />
        <OrderDetail
          name="idContaMarketplace"
          value={properties.idContaMarketplace}
        />
        <OrderDetail name="status" value={properties.status} />
        <OrderDetail name="codigo" value={properties.codigo} />
        <OrderDetail
          name="nomeContaMarketPlace"
          value={properties.nomeContaMarketplace}
        />
        <OrderDetail name="marketplace" value={properties.marketplace} />
        <OrderDetail name="data" value={properties.data} />
        <OrderDetail name="codigoCarrinho" value={properties.codigoCarrinho} />
      </Box>
    </Flex>
  );
};

export default Order;
