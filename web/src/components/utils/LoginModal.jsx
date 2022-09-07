import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Center,
  Heading,
  Stack,
  VStack,
  HStack,
  Box,
  Icon,
  Input,
} from "@chakra-ui/react"
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai"

export default function LoginModal(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Modal isOpen={true} onClose={onClose} isCentered={"true"}>
        <ModalOverlay />
        <ModalContent borderRadius={"63"} h='500px' w='1500px' maxW={"700px"}>
          {/* <ModalCloseButton boxShadow={"xl"} borderRadius='90' fontWeight={"bold"} /> */}
          {/* <ModalBody> */}
          <Stack textAlign={"center"} p={3}>
            <Heading mt={"50px"} mb={"60px"} fontWeight={"medium"}>
              User Login
            </Heading>
            <VStack bgColor={""} justify='center' spacing={"30px"}>
              <HStack bgColor={"#F0F0F0"} w={"533px"} h={"62px"} borderRadius={"2xl"} p={3}>
                <Box mr={"20px"}>
                  <AiOutlineUser size={"36px"} />
                </Box>
                <Input variant='unstyled' placeholder='email' />
              </HStack>
              <HStack bgColor={"#F0F0F0"} w={"533px"} h={"62px"} borderRadius={"2xl"} p={3}>
                <Box mr={"20px"}>
                  <AiOutlineLock size={"36px"} />
                </Box>
                <Input variant='unstyled' placeholder='email' />
              </HStack>
            </VStack>
          </Stack>
          {/* </ModalBody> */}
        </ModalContent>
      </Modal>
    </>
  )
}
