import { ButtonGroup, HStack, useDisclosure } from "@chakra-ui/react"
import { PrimaryButton, SecondaryButton } from "./Button"
import LoginModal from "./LoginModal"
import SignupModal from "./SignupModal"
import { useAuth } from "../context/AuthContext"

function Header({ children }) {
  const user = useAuth()
  const { isOpen: isOpen1, onOpen: onOpen1, onClose: onClose1 } = useDisclosure()
  const { isOpen: isOpen2, onOpen: onOpen2, onClose: onClose2 } = useDisclosure()

  return (
    <>
      <HStack justifyContent={"space-between"} spacing='720px' alignItems={"center"} mb={"51px"}>
        {children}

        {user === undefined ? (
          <ButtonGroup gap={"15px"}>
            <SecondaryButton onClick={onOpen1}>ログイン</SecondaryButton>
            <PrimaryButton onClick={onOpen2}>サインアップ</PrimaryButton>
          </ButtonGroup>
        ) : (
          <></>
        )}
      </HStack>

      <LoginModal isOpen={isOpen1} onClose={onClose1} />
      <SignupModal isOpen={isOpen2} onClose={onClose2} />
    </>
  )
}

export default Header
