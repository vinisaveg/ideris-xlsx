import React, { FunctionComponent } from "react";
import { Box, Text, Flex } from "@chakra-ui/core";

interface OderDetailProps {
    name: string
    value: string | number
}

const OrderDetail: FunctionComponent<OderDetailProps> = ({ name, value }) => {
  return (
    <Box paddingX="5">
      <Flex>
        <Text fontSize="md" fontWeight="bold" mr="2">
          {name}: 
        </Text>
        <Text fontSize="md">
          {value}
        </Text>
      </Flex>
    </Box>
  );
};

export default OrderDetail;
