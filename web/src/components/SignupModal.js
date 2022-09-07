import { useRef } from "react"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react"
import { MdOutlinePerson, MdLockOutline } from "react-icons/md"
import { IoMdClose } from "react-icons/io"
import { PrimaryButton, ModalButton } from "./Button"
import MyInputGroup from "./MyInputGroup"

function SignupModal({ isOpen, onClose }) {
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
        <ModalHeader fontSize={"3xl"}>create account</ModalHeader>
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
          <PrimaryButton colorScheme='blue' mr={3} size={"lg"} mb={9}>
            get started !
          </PrimaryButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default SignupModal
