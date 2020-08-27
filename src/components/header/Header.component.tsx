import React, { FunctionComponent } from "react";
import { Flex, Heading, Icon } from "@chakra-ui/core";

const Header: FunctionComponent = () => (
  <Flex
    alignItems="center"
    justifyContent="space-between"
    paddingY="5"
    paddingX="10"
  >
    <Heading>Ideris | xlsx</Heading>

    <Icon name="moon" size="24px" />
  </Flex>
);

export default Header;
