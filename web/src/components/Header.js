import { Flex, ButtonGroup, Button, Spacer, HStack } from "@chakra-ui/react";

function Header({ children }) {
  return (
    <HStack
      justifyContent={"space-between"}
      spacing="720px"
      alignItems={"center"}
      mb={"51px"}
    >
      {children}
      <ButtonGroup gap={"15px"}>
        <Button
          rounded={"full"}
          px={6}
          bg="#9B9B9B"
          color={"white"}
          width={"140px"}
        >
          log in
        </Button>
        <Button
          width={"140px"}
          rounded={"full"}
          px={6}
          colorScheme={"orange"}
          bg={"#F1873B"}
          _hover={{ bg: "orange.500" }}
        >
          sign up
        </Button>
      </ButtonGroup>
    </HStack>
  );
}

export default Header;
