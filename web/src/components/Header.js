
import { Flex, ButtonGroup, Button,  Spacer, HStack,useDisclosure } from "@chakra-ui/react";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";

function Header({ children }) {
  const {
    isOpen: isOpen1,
    onOpen: onOpen1,
    onClose: onClose1,
  } = useDisclosure();
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();

  return (
   <>
    <HStack
      justifyContent={"space-between"}
      spacing="720px"
      alignItems={"center"}
      mb={"51px"}
    >
      {children}
      <ButtonGroup gap={"15px"}>
        <Button
          onClick={onOpen1}
          rounded={"full"}
          px={6}
          bg="#9B9B9B"
          color={"white"}
          width={"140px"}
        >
          log in
        </Button>
        <Button
          onClick={onOpen2}
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
    <LoginModal isOpen={isOpen1} onClose={onClose1} />
    <SignupModal isOpen={isOpen2} onClose={onClose2} />
   </>   
  );
}

export default Header;
