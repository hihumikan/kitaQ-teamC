import { Button, IconButton } from "@chakra-ui/react"

function PrimaryButton({ size, children, hoverVersion, ...rest }) {
  return (
    <Button
      h={size === "lg" ? "72px" : "40px"}
      fontSize={size === "lg" ? "2xl" : "12px"}
      px={size === "lg" ? 24 : 10}
      rounded={"full"}
      color={"white"}
      bg='#FFC2CC'
      boxShadow='sm'
      transition={".5s"}
      _hover={{ bg: "#F4BFC8", transform: "scale(1.1)" }}
      _active={{ bg: "#F4BFC8" }}
      {...rest}
    >
      {children}
    </Button>
  )
}

function SecondaryButton({ size, children, ...rest }) {
  return (
    <Button
      h={size === "lg" ? "72px" : "40px"}
      fontSize={size === "lg" ? "2xl" : "12px"}
      px={size === "lg" ? 24 : 10}
      rounded={"full"}
      color={"white"}
      bg='#CFCCCC'
      transition={".5s"}
      _hover={{ bg: "#B2AEAE", transform: "scale(1.1)" }}
      _active={{ bg: "#808080" }}
      {...rest}
    >
      {children}
    </Button>
  )
}

function ModalButton({ icon, ...rest }) {
  return (
    <IconButton
      w={"60px"}
      h={"60px"}
      fontSize='30px'
      icon={icon}
      bg='white'
      shadow={"4px 4px 10px #bfbfbf"}
      rounded={"full"}
      {...rest}
    />
  )
}

export { PrimaryButton, SecondaryButton, ModalButton }
