import { Flex, ButtonGroup, Button, useDisclosure } from "@chakra-ui/react";
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
      <Flex justifyContent={"space-between"} alignItems={"center"} mb={"51px"}>
        {children}
        <ButtonGroup>
          <Button
            onClick={onOpen1}
            rounded={"full"}
            px={6}
            bg="#9B9B9B"
            color={"white"}
          >
            log in
          </Button>
          <Button
            onClick={onOpen2}
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
      <LoginModal isOpen={isOpen1} onClose={onClose1} />
      <SignupModal isOpen={isOpen2} onClose={onClose2} />
    </>
  );
}

export default Header;
