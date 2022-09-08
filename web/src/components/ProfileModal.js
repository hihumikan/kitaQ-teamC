import { useRef, useState, useCallback } from "react"
import { IconContext } from "react-icons"
import { TbCloudUpload } from "react-icons/tb"
import { IoMdClose } from "react-icons/io"
import { MdArrowBack } from "react-icons/md"
import { ImageCropper } from "./ImageCropper"
import SignupModal from "./SignupModal"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  Input,
  IconButton,
  useDisclosure,
  Button,
  VStack,
} from "@chakra-ui/react"
import { PrimaryButton, ModalButton } from "./Button"

function ProfileModal({ isOpen, onClose }) {
  const inputRef = useRef(null)
  const initialRef = useRef(null)
  const finalRef = useRef(null)

  let [value, setValue] = useState("")
  const [load, setLoad] = useState(false)
  const [fileUrl, setFileUrl] = useState(null)
  const previewCanvasRef = useRef(null)
  const [src, setSrc] = useState("")
  const [croppedFile, setCroppedFile] = useState(null)
  const [open, setOpen] = useState(false)
  const [button, setButton] = useState(true)

  const onFileInputChange = (event) => {
    console.log(event.target.files[0])
    const imageFile = event.target.files[0]
    const imageUrl = URL.createObjectURL(imageFile)
    setFileUrl(imageUrl)
  }
  const { isOpen: isOpenProfile, onOpen: onOpenProfile, onClose: onCloseProfile } = useDisclosure()
  const changeModal = () => {
    onCloseProfile()
    // onOpen()
  }
  const fileUpload = () => {
    console.log(inputRef.current)
    inputRef.current.click()
  }

  const handleChangeFile = useCallback(
    (e) => {
      const file = e.target.files !== null && e.target.files[0] ? e.target.files[0] : null
      if (file) {
        const reader = new FileReader()
        reader.addEventListener("load", () => setSrc(reader.result?.toString() || ""))
        reader.readAsDataURL(file)
        setOpen(true)
        setButton(false)
      }
    },
    [setSrc]
  )
  const handleClose = () => {
    setButton(true)
    onClose()
  }
  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
      size={"3xl"}
    >
      <ModalOverlay />
      <ModalContent pos={"relative"}>
        <ModalBody pb={6}>
          {/* 戻るボタンちょっとむずい */}
          {/* <ModalButton
            icon={<MdArrowBack />}
            onClick={onClose}
            pos='absolute'
            top={'30'}
            left={"30"}
          ></ModalButton> */}
          <ModalButton
            icon={<IoMdClose />}
            onClick={onClose}
            pos='absolute'
            top={'30'}
            right={"30"}
          ></ModalButton>
          <VStack h='100%'>
            {button ? (
              <div>
                <Button
                  h={"130px"}
                  w={"130px"}
                  bg={"gray.300"}
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
                  type='file'
                  accept='.png,.jpg,.jpeg'
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
                    width: "130px",
                    height: "130px",
                    borderRadius: "130px",
                    margin: "0 auto",
                  }}
                />
                <ImageCropper
                  open={open}
                  setOpen={setOpen}
                  aspect={{ width: 130, height: 130 }}
                  src={src}
                  previewCanvasRef={previewCanvasRef}
                  setCroppedFile={setCroppedFile}
                />
              </div>
            )}
          </VStack>
          <VStack justify={"center"} spacing='24px'>
            <FormControl mt={"70px"} width={"auto"}>
              <Input variant='filled' placeholder='Name' w={"400px"} />
            </FormControl>
            <FormControl mt={"100px"} width={"auto"}>
              <Input variant='filled' placeholder='profile' w={"400px"} />
            </FormControl>
          </VStack>
        </ModalBody>

        <ModalFooter justifyContent='center' mb={"100px"}>
          <PrimaryButton colorScheme='blue' mr={3} size={"lg"} mb={9} onClick={handleClose}>
            保存する
          </PrimaryButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
export default ProfileModal
