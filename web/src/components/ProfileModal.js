import { useRef, useState ,useCallback} from "react";
import { IconContext } from "react-icons";
import { TbCloudUpload } from "react-icons/tb";
import { ImageCropper } from "./ImageCropper";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  Input,
  Button,
  VStack,
  Img,
} from "@chakra-ui/react";


function ProfileModal({ isOpen, onClose }) {
  const inputRef = useRef(null);
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  let [value, setValue] = useState("");
  const [load, setLoad] = useState(false);
  const [fileUrl, setFileUrl] = useState(null);

  const onFileInputChange = (event) => {
    console.log(event.target.files[0]);
    const imageFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setFileUrl(imageUrl);
  };
  const fileUpload = () => {
    console.log(inputRef.current);
    inputRef.current.click();
  };

  const previewCanvasRef = useRef(null);
  const [src, setSrc] = useState("");
  const [croppedFile, setCroppedFile] = useState(null);
  const [open, setOpen] = useState(false);

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
      }
    },
    [setSrc]
  );

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
        <ModalCloseButton />
        <ModalBody pb={6}>


        <div
        style={{
          padding: "30px",
          height: "700px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <input
          type="file"
          accept=".png,.jpg,.jpeg"
          onChange={handleChangeFile}
        />
        <canvas
          ref={previewCanvasRef}
          style={{
            objectFit: "contain",
            width: "300px",
            height: "200px",
          }}
        />
        <ImageCropper
          open={open}
          setOpen={setOpen}
          aspect={{ width: 300, height: 200 }}
          src={src}
          previewCanvasRef={previewCanvasRef}
          setCroppedFile={setCroppedFile}
        />
      </div>




          <VStack h="100%">
            <Button
              h={"130px"}
              w={"130px"}
              bg={"grey"}
              borderRadius={"130px"}
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
              accept="image/*"
              onChange={onFileInputChange}
            />
            <div className="previewImg">
              <Img src={fileUrl} alt={fileUrl} />
            </div>
          </VStack>
          <VStack justify={"center"} spacing="24px">
            <FormControl mt={"70px"} width={"auto"}>
              <Input variant="filled" placeholder="Name" w={"400px"} />
            </FormControl>
            <FormControl mt={"100px"} width={"auto"}>
              <Input variant="filled" placeholder="profile" w={"400px"} />
            </FormControl>
          </VStack>
        </ModalBody>

        <ModalFooter justifyContent="center" mb={"100px"}>
          <Button colorScheme="orange" mr={3} borderRadius={"20px"} w={"229px"}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
export default ProfileModal;
