import React, { FunctionComponent, useState } from "react";
import { Heading, Grid, Input, Button, useToast } from "@chakra-ui/core";
import { api } from "../../api/api";

interface SearchOrderByIdProps {
  token: string
  handleSetOrderById: Function
}

const SearchOrderById: FunctionComponent<SearchOrderByIdProps> = ({handleSetOrderById, token}) => {
  
  const [id, setId] = useState('')
  const toast = useToast()

  const SearchAction = (id: string | number) => {
    if (id) {
      api.get('/Pedido', {
        params: {
          id
        },
        headers: {
          "Authorization": token
        }
      })
        .then(response => handleSetOrderById(response.data.result))
        .catch(error => console.log(error))
    } else {
      toast({
        title: "Insira um ID",
        description: "Para fazer uma busca insira um ID válido",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    }

    setId('')
  }

  return (
    <>
      <Heading mb="5">Buscar pedido por ID</Heading>
      <Grid
        className="api-data"
        mb="5"
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(3, 1fr)"]}
        gap={5}
      >
        <Input value={id} placeholder="ID" onChange={(event: any) => setId(event.target.value)} />
        <Button onClick={() => SearchAction(id)} variantColor="purple" type="submit">
          Buscar
        </Button>
      </Grid>
    </>
  );
};

export default SearchOrderById;
