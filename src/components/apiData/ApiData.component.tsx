import React, { useState } from "react";
import { Heading, Grid, Input, Button, useToast } from "@chakra-ui/core";

interface ApiDataProps {
  handleGenerateToken: Function;
}

const ApiData: React.FC<ApiDataProps> = ({ handleGenerateToken }) => {
  const [token, setToken] = useState("");
  const toast = useToast();

  const handleToken = () => {
    if (token) {
      handleGenerateToken(token);
    } else {
      toast({
        title: "Chave Inválida!",
        description: "Insira a sua Chave da API para gerar o Token",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }

    setToken("");
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
          value={token}
        />
        <Button onClick={() => handleToken()} variantColor="purple">
          Gerar Token
        </Button>
      </Grid>
    </>
  );
};

export default ApiData;
