import { useRef, useState, useCallback } from "react";
import { IconContext } from "react-icons";
import { TbCloudUpload } from "react-icons/tb";
import { ImageCropper } from "./ImageCropper";
import { IoMdClose } from "react-icons/io";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  FormControl,
  Input,
  Button,
  VStack,
  Textarea,
} from "@chakra-ui/react";
import { PrimaryButton, ModalButton } from "./Button";
import postApi from "../api/post";

function ProfileModal({ isOpen, onClose, posts, setPosts }) {
  const inputRef = useRef(null);
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  const previewCanvasRef = useRef(null);
  const [src, setSrc] = useState("");
  const [, setCroppedFile] = useState(null);
  const [open, setOpen] = useState(false);
  const [button, setButton] = useState(true);

  const fileUpload = () => {
    console.log(inputRef.current);
    inputRef.current.click();
  };

  const handleChangeFile = useCallback(
    (e) => {
      const file =
        e.target.files !== null && e.target.files[0] ? e.target.files[0] : null;
      if (file) {
        const reader = new FileReader();
        reader.addEventListener("load", () =>
          setSrc(reader.result?.toString() || "")
        );
        reader.readAsDataURL(file);
        setOpen(true);
        setButton(false);
      }
    },
    [setSrc]
  );

  const postHandler = async () => {
    const newPost = {
      file: src,
      title,
      description,
    };
    postApi.post(newPost);
    setPosts([newPost, ...posts]);
    setTitle("");
    setButton(true);
    setDescription("");
    console.log(newPost);
    onClose();
  };

  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
      size={"3xl"}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalButton
          icon={<IoMdClose />}
          onClick={onClose}
          pos="absolute"
          right={"20"}
          top={"10"}
        ></ModalButton>
        <ModalBody pb={6}>
          <VStack h="100%">
            {button ? (
              <div>
                <Button
                  h={"300px"}
                  w={"400px"}
                  bg={"gray.300"}
                  // borderRadius={"130px"}
                  mt={"80px"}
                  onClick={fileUpload}
                >
                  <IconContext.Provider value={{ size: "50px" }}>
                    <TbCloudUpload />
                  </IconContext.Provider>
                </Button>
                <input
                  hidden
                  ref={inputRef}
                  type="file"
                  accept=".png,.jpg,.jpeg"
                  onChange={handleChangeFile}
                />
              </div>
            ) : (
              <div style={{ marginTop: "80px" }}>
                <canvas
                  ref={previewCanvasRef}
                  style={{
                    display: "flex",
                    objectFit: "contain",
                    width: "400px",
                    height: "300px",
                    margin: "0 auto",
                  }}
                />
                <ImageCropper
                  open={open}
                  setOpen={setOpen}
                  aspect={{ width: 400, height: 300 }}
                  src={src}
                  previewCanvasRef={previewCanvasRef}
                  setCroppedFile={setCroppedFile}
                />
              </div>
            )}
          </VStack>
          <VStack justify={"center"} spacing="24px">
            <FormControl mt={"70px"} width={"auto"}>
              <Input
                variant="filled"
                placeholder="タイトル"
                w={"400px"}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormControl>
            <FormControl mt={"100px"} width={"auto"}>
              <Textarea
                variant="filled"
                placeholder="概要"
                w={"400px"}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormControl>
          </VStack>
        </ModalBody>

        <ModalFooter justifyContent="center" mb={"100px"}>
          <PrimaryButton
            colorScheme="blue"
            mr={3}
            size={"lg"}
            mb={9}
            onClick={postHandler}
          >
            投稿する
          </PrimaryButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ProfileModal;
