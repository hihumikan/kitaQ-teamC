import { useRef, useState, useMemo } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
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
} from "@chakra-ui/react";
import { MdOutlinePerson, MdLockOutline } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { TbId } from "react-icons/tb";
import { BsMegaphoneFill } from "react-icons/bs";
import { PrimaryButton, ModalButton } from "./Button";
import MyInputGroup from "./MyInputGroup";
import ProfileModal from "./ProfileModal";

function CustomRadio({ icon, text, title, ...radioProps }) {
  const { state, getInputProps, getCheckboxProps, htmlProps, getLabelProps } =
    useRadio(radioProps);

  return (
    <chakra.label {...htmlProps} cursor="pointer">
      <input {...getInputProps({})} hidden />
      <Center
        _checked={{ color: "fuchsia" }}
        w={"250px"}
        h="180px"
        border={state.isChecked ? "4px" : ""}
        borderColor={"#FFB885"}
        borderRadius={"3xl"}
        boxShadow={state.isChecked ? "" : "md"}
      >
        <VStack>
          <TbId size={"40px"} />
          <Text fontWeight={"bold"}>{title}</Text>
          <Text w={"80%"} px={3} textAlign={"center"} fontSize={"10px"}>
            {text}
          </Text>
        </VStack>
      </Center>
    </chakra.label>
  );
}

function SignupModal({ isOpen, onClose }, props) {
  const defaultValue = useMemo(
    () => ({
      user_name: "",
      email: "",
      password: "",
      isparent: undefined,
      file: "",
      description: true,
    }),
    []
  );
  const [fieldValues, setFieldValues] = useState(defaultValue);
  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    let value = target.value;
    setFieldValues({ ...fieldValues, [name]: value });
  };

  const [userData, setUserData] = useState({
    description: "",
    file: "",
    password: "",
    email: "",
    isparent: "",
    user_name: "",
  });

  const roles = [
    {
      role_id: "0",
      title: "投稿する",
      text: "自炊を投稿することで応援を受けることができます",
      icon: "https://s3-alpha-sig.figma.com/img/eef6/5a39/353d7ba42dfb1f0e6026b4d15d55faee?Expires=1663545600&Signature=c9NrzDg~UgYtYHOFjZRCD86X4vEuGqufb4Qwt9RxAuB7ek-n1hFTMjXYr7jPt1AEDQgK5FW-FfngeINxtoEf~1YgXwguHaT~KLJtrD0wR-mElNWg720YJRuS4gNlvowz-aC9Rjz0o92s2LvRnfuEju1PVo~HlRErBuvZgtS8Yp~YNPd0FGXAzL~6MabX9-K~qUe9kpkn6sV3TNLdMJUrma9HSqD20lN0JDv6IY93Md6XZsV3s5Pg~pUt13GcZ290ZzP0zen7kkKvs~j0keWLvFL5bDPQRQTB~3I83Uc2gZ0BCYaTlQlaHOOuCrXnu~Xig-ho~7PbsennSmuT6qo1QQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      role_id: "1",
      title: "応援する",
      text: "自炊を頑張っている人をコメントで応援することができます",
      icon: "https://s3-alpha-sig.figma.com/img/eef6/5a39/353d7ba42dfb1f0e6026b4d15d55faee?Expires=1663545600&Signature=c9NrzDg~UgYtYHOFjZRCD86X4vEuGqufb4Qwt9RxAuB7ek-n1hFTMjXYr7jPt1AEDQgK5FW-FfngeINxtoEf~1YgXwguHaT~KLJtrD0wR-mElNWg720YJRuS4gNlvowz-aC9Rjz0o92s2LvRnfuEju1PVo~HlRErBuvZgtS8Yp~YNPd0FGXAzL~6MabX9-K~qUe9kpkn6sV3TNLdMJUrma9HSqD20lN0JDv6IY93Md6XZsV3s5Pg~pUt13GcZ290ZzP0zen7kkKvs~j0keWLvFL5bDPQRQTB~3I83Uc2gZ0BCYaTlQlaHOOuCrXnu~Xig-ho~7PbsennSmuT6qo1QQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
  ];

  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const {
    isOpen: isOpenProfile,
    onOpen: onOpenProfile,
    onClose: onCloseProfile,
  } = useDisclosure();
  const changeModal = () => {
    onClose();
    onOpenProfile();
  };
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const { value, getRadioProps } = useRadioGroup({
    name: "test",
    defaultValue: "",
    onChange: {},
  });

  return (
    <>
      <Modal
        isCentered={"true"}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size="3xl"
      >
        <ModalOverlay />
        <ModalContent alignItems={"center"} py={"56px"}>
          <ModalHeader fontSize={"2xl"} padding={"0"} mb={"10"}>
            アカウントを作成する
          </ModalHeader>
          <ModalButton
            icon={<IoMdClose />}
            onClick={onClose}
            pos="absolute"
            right={"72px"}
          />
          <ModalBody mb={"8"} padding={"0"}>
            <Flex justifyContent={"space-between"} gap={"4"} mb={"12"}>
              {roles.map((role) => {
                return (
                  <Flex
                    px={"4"}
                    py={"6"}
                    flex={"1"}
                    key={role.role_id}
                    flexDirection={"column"}
                    alignItems={"center"}
                    gap={"3"}
                    borderRadius={"3xl"}
                    transition={"all 0.5s"}
                    border={
                      role.role_id === userData.isparent
                        ? "2px solid #ff99a8"
                        : "2px solid #e6e6e6"
                    }
                    bg={role.role_id === userData.isparent ? "#ffe9e9" : ""}
                    onClick={() => {
                      setUserData((prev) => ({
                        ...prev,
                        isparent: role.role_id,
                      }));
                    }}
                  >
                    <TbId size={"40px"} />
                    <Text fontWeight={"bold"}>{role.title}</Text>
                    <Text
                      w={"90%"}
                      px={3}
                      textAlign={"center"}
                      fontSize={"10px"}
                    >
                      {role.text}
                    </Text>
                  </Flex>
                );
              })}
            </Flex>
            <Flex flexDirection={"column"} gap={"6"}>
              <MyInputGroup
                name={"email"}
                icon={<MdOutlinePerson color="gray.800" />}
                placeholder={"メールアドレス"}
                w={"full"}
                onChange={(e) => {
                  setUserData((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }));
                }}
              />
              <MyInputGroup
                name={"password"}
                icon={<MdLockOutline color="gray.800" />}
                placeholder={"パスワード"}
                onChange={(e) => {
                  setUserData((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }));
                }}
              />
            </Flex>
          </ModalBody>

          <ModalFooter>
            <PrimaryButton size={"lg"} onClick={changeModal}>
              始める
            </PrimaryButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <ProfileModal
        isOpen={isOpenProfile}
        onClose={onCloseProfile}
        userData={userData}
        setUserData={setUserData}
      />
    </>
  );
}

export default SignupModal;
