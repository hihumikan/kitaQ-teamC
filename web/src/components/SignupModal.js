import { useRef, useState, useMemo } from "react"

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
  useRadio,
  useDisclosure,
  useRadioGroup,
  chakra,
} from "@chakra-ui/react"
import { MdOutlinePerson, MdLockOutline } from "react-icons/md"
import { IoMdClose } from "react-icons/io"
import { TbId } from "react-icons/tb"
import { BsMegaphoneFill } from "react-icons/bs"
import { PrimaryButton, ModalButton } from "./Button"
import MyInputGroup from "./MyInputGroup"
import ProfileModal from "./ProfileModal"

function CustomRadio(props) {
  const { icon, text, title, ...radioProps } = props
  const { state, getInputProps, getCheckboxProps, htmlProps, getLabelProps } = useRadio(radioProps)

  return (
    <chakra.label {...htmlProps} cursor='pointer' >
      <input {...getInputProps({})} hidden />
      <Center
      _checked={{ color: "fuchsia" }}
        w={"250px"}
        h='180px'
        border={state.isChecked ? "4px" : ""}
        borderColor={"#FFB885"}
        borderRadius={"3xl"}
        boxShadow={state.isChecked ? "" : "md"}
        // bgColor={state.isChecked ? "#FFB885" : ""}
        // color={state.isChecked ? "white" : ""}
      >
        <VStack>
          <TbId size={"40px"} />
          <Text fontWeight={"bold"}>{title}</Text>
          <Text w={'80%'} px={3} textAlign={"center"} fontSize={"10px"}>
            {text}
          </Text>
        </VStack>
      </Center>
    </chakra.label>
  )
}

function SignupModal({ isOpen, onClose }, props) {
  const defaultValue = useMemo(
    () => ({
      id: "",
      user_name: "",
      email: "",
      password: "",
      description: "",
      isParent: true,
      created_at: "",
      updated_at: "",
    }),
    []
  )
  const [fieldValues, setFieldValues] = useState(defaultValue)
  const handleInputChange = (e) => {
    const target = e.target
    const name = target.name
    let value = target.value
    setFieldValues({ ...fieldValues, [name]: value })
  }
  const test = [
    {
      title: "投稿する",
      text: "自炊を投稿することで応援を受けることができます",
      icon: "https://s3-alpha-sig.figma.com/img/eef6/5a39/353d7ba42dfb1f0e6026b4d15d55faee?Expires=1663545600&Signature=c9NrzDg~UgYtYHOFjZRCD86X4vEuGqufb4Qwt9RxAuB7ek-n1hFTMjXYr7jPt1AEDQgK5FW-FfngeINxtoEf~1YgXwguHaT~KLJtrD0wR-mElNWg720YJRuS4gNlvowz-aC9Rjz0o92s2LvRnfuEju1PVo~HlRErBuvZgtS8Yp~YNPd0FGXAzL~6MabX9-K~qUe9kpkn6sV3TNLdMJUrma9HSqD20lN0JDv6IY93Md6XZsV3s5Pg~pUt13GcZ290ZzP0zen7kkKvs~j0keWLvFL5bDPQRQTB~3I83Uc2gZ0BCYaTlQlaHOOuCrXnu~Xig-ho~7PbsennSmuT6qo1QQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      title: "応援する",
      text: "自炊を頑張っている人をコメントで応援することができます",
      icon: "https://s3-alpha-sig.figma.com/img/eef6/5a39/353d7ba42dfb1f0e6026b4d15d55faee?Expires=1663545600&Signature=c9NrzDg~UgYtYHOFjZRCD86X4vEuGqufb4Qwt9RxAuB7ek-n1hFTMjXYr7jPt1AEDQgK5FW-FfngeINxtoEf~1YgXwguHaT~KLJtrD0wR-mElNWg720YJRuS4gNlvowz-aC9Rjz0o92s2LvRnfuEju1PVo~HlRErBuvZgtS8Yp~YNPd0FGXAzL~6MabX9-K~qUe9kpkn6sV3TNLdMJUrma9HSqD20lN0JDv6IY93Md6XZsV3s5Pg~pUt13GcZ290ZzP0zen7kkKvs~j0keWLvFL5bDPQRQTB~3I83Uc2gZ0BCYaTlQlaHOOuCrXnu~Xig-ho~7PbsennSmuT6qo1QQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
  ]

  const initialRef = useRef(null)
  const finalRef = useRef(null)
  const { isOpen: isOpenProfile, onOpen: onOpenProfile, onClose: onCloseProfile } = useDisclosure()
  const changeModal = () => {
    onClose()
    onOpenProfile()
  }
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const { value, getRadioProps } = useRadioGroup({
    name: "test",
    defaultValue: "",
    onChange: {},
  })

  return (
    <>
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
          <ModalHeader fontSize={"2xl"}>アカウントを作成する</ModalHeader>
          <ModalButton
            icon={<IoMdClose />}
            onClick={onClose}
            pos='absolute'
            right={"20"}
          ></ModalButton>
          <ModalBody py={8}>
            <Text>The selected radio is: {value}</Text>
            <HStack>
              {test.map((m) => {
                return (
                  <CustomRadio
                    key={m.title}
                    title={m.title}
                    text={m.text}
                    {...getRadioProps({ value: m.title })}
                  />
                )
              })}
            </HStack>
            <Box h={"20px"}></Box>
            <VStack w={"20%"} align={"center"}>
              <MyInputGroup
                pl={"45px"}
                name={"email"}
                icon={<MdOutlinePerson color='gray.800' />}
                placeholder={"メールアドレス"}
              />
              <MyInputGroup
                pl={"45px"}
                name={"password"}
                icon={<MdLockOutline color='gray.800' />}
                placeholder={"パスワード"}
                onChange={(e) => {
                  handleInputChange(e)
                  console.log(fieldValues)
                }}
              />
            </VStack>
          </ModalBody>

          <ModalFooter>
            <PrimaryButton size={"lg"} onClick={changeModal}>
              始める
            </PrimaryButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <ProfileModal isOpen={isOpenProfile} onClose={onCloseProfile} />
    </>
  )
}

export default SignupModal
