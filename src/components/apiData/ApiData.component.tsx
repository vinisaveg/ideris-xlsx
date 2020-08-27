import React from "react";
import { Heading, Grid, Input, Button } from "@chakra-ui/core";

const ApiData: React.FC = () => {
  return (
    <>
      <Heading mb="5">Dados da API</Heading>
      <Grid
        className="api-data"
        mb="5"
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(3, 1fr)"]}
        gap={5}
      >
        <Input type="password" placeholder="Chave da API" />
        <Button variantColor="purple">Gerar Token</Button>
      </Grid>
    </>
  );
};

export default ApiData;
