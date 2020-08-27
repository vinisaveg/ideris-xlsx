import React, { FunctionComponent } from "react";
import { Heading, Grid, Input, Button } from "@chakra-ui/core";

const SearchOrderById: FunctionComponent = () => {
  return (
    <>
      <Heading mb="5">Buscar pedido por ID</Heading>
      <Grid
        className="api-data"
        mb="5"
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(3, 1fr)"]}
        gap={5}
      >
        <Input placeholder="ID" />
        <Button variantColor="purple" type="submit">
          Buscar
        </Button>
      </Grid>
    </>
  );
};

export default SearchOrderById;
