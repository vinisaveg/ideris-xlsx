import React, { FunctionComponent } from "react";
import { Flex, Button, Text } from "@chakra-ui/core";

import Order from "../order/Order.component";

interface OrdersListProps {
  orders: Array<object>;
  handleCleanOrders: Function
  handleGenerateXLSX: Function
}

const OrdersList: FunctionComponent<OrdersListProps> = ({ ...props }) => {

  const {orders, handleCleanOrders, handleGenerateXLSX} = props

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
        {orders.map((order: any) => (
          <Order
            key={order.id}
            id={order.id}
            nomeContaMarketplace={order.idContaMarketplace}
            data={order.data}
            caminhoImagemItem={order.Item ? order.Item[0].caminhoImagemItem : order.imagemPedidoItem}
            status={order.status}
            compradorPrimeiroNome={order.compradorPrimeiroNome}
            enderecoEntregaCep={order.enderecoEntregaCep}
          />
        ))}

        {orders.length > 0 ? null : (
          <Text alignSelf="center" mt="100px">
            Faça uma busca
          </Text>
        )}
      </Flex>

      <Flex justifyContent="flex-end" alignItems="center" mt="5">
        <Button onClick={() => handleCleanOrders()} variantColor="yellow" mr="5">
          Limpar
        </Button>
        <Button onClick={() => handleGenerateXLSX()} variantColor="green">Gerar Excel</Button>
      </Flex>
    </>
  );
};

export default OrdersList;
