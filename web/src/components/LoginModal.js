import { useRef } from "react"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  VStack,
} from "@chakra-ui/react"
import { MdOutlinePerson, MdLockOutline } from "react-icons/md"
import { IoMdClose } from "react-icons/io"
import { PrimaryButton, ModalButton } from "./Button"
import Link from "./Link"
import MyInputGroup from "./MyInputGroup"

function LoginModal({ isOpen, onClose }) {
  const initialRef = useRef(null)
  const finalRef = useRef(null)
  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
      size='3xl'
    >
      <ModalOverlay />
      <ModalContent alignItems={"center"} py={"64px"}>
        <ModalHeader fontSize={"3xl"}>User login</ModalHeader>
        {/* <ModalCloseButton /> */}
        <ModalButton
          icon={<IoMdClose />}
          onClick={onClose}
          pos='absolute'
          right={"20"}
        ></ModalButton>
        <ModalBody py={8}>
          <MyInputGroup name={"email"} icon={<MdOutlinePerson color='gray.800' />} mb={9} />
          <MyInputGroup name={"password"} icon={<MdLockOutline color='gray.800' />} mb={9} />
        </ModalBody>

        <ModalFooter>
          <VStack>
            <PrimaryButton colorScheme='blue' mr={3} size={"lg"} mb={9}>
              Login
            </PrimaryButton>
            <Text>
              アカウントをお持ちでない方は
              <Link color={"#008CF1"} to={"/"}>
                こちら
              </Link>
              から
            </Text>
          </VStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default LoginModal
