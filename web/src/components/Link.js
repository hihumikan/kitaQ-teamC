import React from "react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function Link({ children, ...props }) {
  return (
    <ChakraLink as={RouterLink} {...props}>
      {children}
    </ChakraLink>
  );
}

export default Link;
