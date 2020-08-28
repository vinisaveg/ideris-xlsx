import React, { FunctionComponent, useState } from "react";
import {
  Heading,
  Grid,
  InputGroup,
  InputLeftAddon,
  Input,
  Button,
  useToast,
} from "@chakra-ui/core";
import { api } from "../../api/api";

interface SearchOrdersProps {
  token: string
  handleSetOrdersByFilters: Function
}

const SearchOrders: FunctionComponent<SearchOrdersProps> = ({ ...props }) => {
  
  const { token, handleSetOrdersByFilters } = props
  const [limitFilter, setLimitFilter] = useState(0)
  const toast = useToast()
  
  const searchAction = () => {
    if (limitFilter) {
      api.get('ListaPedido', {
        params: {
          limit: limitFilter
        },
        headers: {
          'Authorization': token
        }
      })
      .then(response => handleSetOrdersByFilters(response.data.result))
      .catch(error => console.log(error))
    } else {
      toast({
        title: "Filtro vazio!",
        description: "Insira um filtro para fazer a busca",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    }

    setLimitFilter(0)

  }

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
          <Input type="date" isDisabled />
        </InputGroup>

        <InputGroup>
          <InputLeftAddon children="Final" />
          <Input type="date" isDisabled />
        </InputGroup>

        <Input placeholder="Status" isDisabled />
        <Input placeholder="Marketplace" isDisabled />
        <Input placeholder="Código do carrinho" type="number" isDisabled />
        <Input value={limitFilter} onChange={(event: any) => setLimitFilter(event.target.value)} placeholder="Limite da busca" type="number" />

        <Button onClick={() => searchAction()} variantColor="purple" type="submit">
          Buscar
        </Button>
      </Grid>
    </>
  );
};

export default SearchOrders;
