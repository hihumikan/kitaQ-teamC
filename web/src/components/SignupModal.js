import { useRef, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { MdOutlinePerson, MdLockOutline } from "react-icons/md";
import { PrimaryButton } from "./Button";
import MyInputGroup from "./MyInputGroup";
import ProfileModal from "./ProfileModal";

function SignupModal({ isOpen, onClose }) {
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const [modalStatus, setmodalStatus] = useState(false);
  const {
    isOpen: isOpenProfile,
    onOpen: onOpenProfile,
    onClose: onCloseProfile,
  } = useDisclosure();

  const changeModal = () => {
    onClose();
    onOpenProfile();
  };

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size="3xl"
      >
        <ModalOverlay />
        <ModalContent alignItems={"center"} py={"64px"}>
          <ModalHeader fontSize={"3xl"}>create account</ModalHeader>
          <ModalCloseButton />
          <ModalBody py={8}>
            <MyInputGroup
              name={"email"}
              icon={<MdOutlinePerson color="gray.800" />}
              mb={9}
            />
            <MyInputGroup
              name={"password"}
              icon={<MdLockOutline color="gray.800" />}
              mb={9}
            />
          </ModalBody>

          <ModalFooter>
            <PrimaryButton
              colorScheme="blue"
              mr={3}
              size={"lg"}
              mb={9}
              onClick={changeModal}
            >
              get started !
            </PrimaryButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <ProfileModal isOpen={isOpenProfile} onClose={onCloseProfile} />
    </>
  );
}

export default SignupModal;
