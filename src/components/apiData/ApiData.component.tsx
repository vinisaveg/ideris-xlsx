import React, { useState } from "react";
import { Heading, Grid, Input, Button } from "@chakra-ui/core";

interface ApiDataProps {
  handleGenerateToken: Function;
}

const ApiData: React.FC<ApiDataProps> = ({ handleGenerateToken }) => {
  const [token, setToken] = useState("");

  const handleToken = () => {
    handleGenerateToken(token);
  };

  return (
    <>
      <Heading mb="5">Dados da API</Heading>
      <Grid
        className="api-data"
        mb="5"
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(3, 1fr)"]}
        gap={5}
      >
        <Input
          onChange={(e: any) => setToken(e.target.value)}
          type="password"
          placeholder="Chave da API"
        />
        <Button onClick={() => handleToken()} variantColor="purple">
          Gerar Token
        </Button>
      </Grid>
    </>
  );
};

export default ApiData;
