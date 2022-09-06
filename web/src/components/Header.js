import { Flex, ButtonGroup, Button } from "@chakra-ui/react";

function Header({ children }) {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} mb={"51px"}>
      {children}
      <ButtonGroup>
        <Button rounded={"full"} px={6} bg="#9B9B9B" color={"white"}>
          log in
        </Button>
        <Button
          rounded={"full"}
          px={6}
          colorScheme={"orange"}
          bg={"#F1873B"}
          _hover={{ bg: "orange.500" }}
        >
          sign up
        </Button>
      </ButtonGroup>
    </Flex>
  );
}

export default Header;
