import {
  Flex,
  ButtonGroup,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react"
import LoginModal from "./utils/LoginModal"
import { useState } from "react"

function Header({ children }) {
  const [isOp, setIsOp] = useState(false)
  const onClick = () => {
    setIsOp(true)
  }
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} mb={"51px"}>
      {children}
      <ButtonGroup>
        <Button rounded={"full"} px={6} bg='#9B9B9B' color={"white"}>
          log in
        </Button>
        <Button
          onClick={()=>{
            setIsOp(true)
          }}
          rounded={"full"}
          px={6}
          colorScheme={"orange"}
          bg={"#F1873B"}
          _hover={{ bg: "orange.500" }}
        >
          sign up
        </Button>
      </ButtonGroup>
      {isOp ? <LoginModal /> : <></>}
    </Flex>
  )
}

export default Header
