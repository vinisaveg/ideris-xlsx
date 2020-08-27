import React, { FunctionComponent } from "react";
import {
  Heading,
  Grid,
  InputGroup,
  InputLeftAddon,
  Input,
  Button,
} from "@chakra-ui/core";

const SearchOrders: FunctionComponent = () => {
  return (
    <>
      <Heading mb="5">Buscar pedidos</Heading>

      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
        ]}
        gap={3}
        mb="5"
      >
        <InputGroup>
          <InputLeftAddon children="Inicial" />
          <Input type="date" />
        </InputGroup>

        <InputGroup>
          <InputLeftAddon children="Final" />
          <Input type="date" />
        </InputGroup>

        <Input placeholder="Status" />
        <Input placeholder="Marketplace" />
        <Input placeholder="Código do carrinho" type="number" />
        <Input placeholder="Limite da busca" type="number" />

        <Button variantColor="purple" type="submit">
          Buscar
        </Button>
      </Grid>
    </>
  );
};

export default SearchOrders;
