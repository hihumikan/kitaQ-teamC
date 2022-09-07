import { useRef } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  useDisclosure,
  VStack,
  Text,
  Stack,
  Flex,
  ButtonGroup
} from "@chakra-ui/react";
import ProfileModal from "./ProfileModal";

function SignupModal({ isOpen, onClose }) {
  const {
    isOpen: isOpenProfile,
    onOpen: onOpenProfile,
    onClose: onCloseProfile,
  } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size={"3xl"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody pb={6} mt={"100px"}>
            <VStack justify={"center"} spacing="30px">
              <Text fontSize="3xl" as="b" mb={"40px"}>
                Signup
              </Text>
              <Flex minWidth="max-content" alignItems="center" gap="2">
                <ButtonGroup gap="2">
                  <Button w={"200px"} h={"150px"} color="black">投稿する</Button>
                  <Button w={"200px"} h={"150px"} color="black">応援する</Button>
                </ButtonGroup>
              </Flex>
              <FormControl width={"auto"}>
                <Input
                  variant="filled"
                  ref={initialRef}
                  placeholder="e-mail"
                  w={"400px"}
                />
              </FormControl>

              <FormControl mt={4} width={"auto"}>
                <Input variant="filled" placeholder="password" w={"400px"} />
              </FormControl>
            </VStack>
          </ModalBody>

          <ModalFooter
            justifyContent="center"
            textAlign={"center"}
            mb={"40px"}
            mt={"20px"}
            alignItems="center"
          >
            <Stack spacing={3}>
              <Button
                colorScheme="orange"
                w={"230px"}
                borderRadius={"20px"}
                mb={"30px"}
                onClick={onClose}
              >
                Signup
              </Button>
            </Stack>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <ProfileModal isOpen={isOpenProfile} onClose={onCloseProfile} />
    </>
  );
}

export default SignupModal;
