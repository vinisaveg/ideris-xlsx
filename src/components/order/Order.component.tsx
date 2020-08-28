import React, { FunctionComponent } from "react";
import { Box, Image, Flex } from "@chakra-ui/core";

import OrderDetail from "../orderDetail/OderDetail.component";

interface OrderProps {
  id: number
  nomeContaMarketplace: string
  data: string
  status: string
  caminhoImagemItem?: string
  compradorPrimeiroNome?: string
  enderecoEntregaCep?: string
}

const Order: FunctionComponent<OrderProps> = ({...props}) => {

  return (
    <Flex mb="5" mt="5" bg="gray.500" alignItems="center">
      <Image
        display={["none", "none", "block"]}
        src={props.caminhoImagemItem || "https://www.miriandor.com.br/tema/miriandor/img/produtos/default.jpg"}
        alt="Pedido"
        width="250px"
        maxHeight="250px"
      />

      <Box p="2">
        <OrderDetail name="Id" value={props.id} />
        <OrderDetail
          name="nomeContaMarketPlace"
          value={props.nomeContaMarketplace}
        />
        <OrderDetail name="data" value={props.data} />
        <OrderDetail name="status" value={props.status} />
        <OrderDetail name="primeiro nome" value={props.compradorPrimeiroNome || ""} />
        <OrderDetail name="CEP" value={props.enderecoEntregaCep || ""} />
      </Box>
    </Flex>
  );
};

export default Order;
