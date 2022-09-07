import { useRef } from "react"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Spacer,
  Box,
  HStack,
  VStack,
  Center,
  Text,
  Flex,
} from "@chakra-ui/react"
import { MdOutlinePerson, MdLockOutline } from "react-icons/md"
import { IoMdClose } from "react-icons/io"
import { TbId } from "react-icons/tb"
import { BsMegaphoneFill } from "react-icons/bs"
import { PrimaryButton, ModalButton } from "./Button"
import MyInputGroup from "./MyInputGroup"

function SignupModal({ isOpen, onClose }) {
  const initialRef = useRef(null)
  const finalRef = useRef(null)
  return (
    <Modal
      isCentered={"true"}
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
      size='3xl'
    >
      <ModalOverlay />
      <ModalContent alignItems={"center"} py={"64px"}>
        <ModalHeader fontSize={"2xl"}>create account</ModalHeader>
        <ModalButton
          icon={<IoMdClose />}
          onClick={onClose}
          pos='absolute'
          right={"20"}
        ></ModalButton>
        <ModalBody py={8}>
          <HStack>
            <Center
              w={"250px"}
              h='180px'
              border={"4px"}
              borderColor={"#FFB885"}
              borderRadius={"3xl"}
            >
              <VStack>
                <TbId size={"40px"} />
                <Text fontWeight={"bold"}>投稿する</Text>
                <Text px={3} textAlign={"center"} fontSize={"10px"}>
                  自炊を投稿することで 応援を受けることができます
                </Text>
              </VStack>
            </Center>
            <Spacer></Spacer>
            <Center
              w={"250px"}
              h='180px'
              border={"4px"}
              borderColor={"#FFB885"}
              borderRadius={"3xl"}
            >
              <VStack>
                <BsMegaphoneFill size={"40px"} />
                <Text fontWeight={"bold"}>応援する</Text>
                <Text px={3} textAlign={"center"} fontSize={"10px"}>
                  自炊を頑張っている人をコメントで 応援することができます
                </Text>
              </VStack>
            </Center>
          </HStack>
          <Box h={"20px"}></Box>
          <VStack w={"20%"} align={"center"}>
            {/* 無理やり真ん中に寄せています。すみません。 */}
            <MyInputGroup pl={"45px"} name={"email"} icon={<MdOutlinePerson color='gray.800' />} />
            <MyInputGroup pl={"45px"} name={"password"} icon={<MdLockOutline color='gray.800' />} />
          </VStack>
        </ModalBody>

        <ModalFooter>
          <PrimaryButton size={"lg"}>get started !</PrimaryButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default SignupModal
