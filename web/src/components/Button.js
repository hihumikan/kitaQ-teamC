import { Button, IconButton } from "@chakra-ui/react";

function PrimaryButton({ size, children, ...rest }) {
  return (
    <Button
      h={size === "lg" ? "72px" : "48px"}
      fontSize={size === "lg" ? "2xl" : "md"}
      px={size === "lg" ? 24 : 12}
      rounded={"full"}
      color={"white"}
      bg="#F1873B"
      _hover={{ bg: "#EE6D11" }}
      _active={{ bg: "#EE6D11" }}
      {...rest}
    >
      {children}
    </Button>
  );
}

function SecondaryButton({ size, children, ...rest }) {
  return (
    <Button
      h={size === "lg" ? "72px" : "48px"}
      fontSize={size === "lg" ? "2xl" : "md"}
      px={size === "lg" ? 24 : 12}
      rounded={"full"}
      color={"white"}
      bg="#9B9B9B"
      _hover={{ bg: "#808080" }}
      _active={{ bg: "#808080" }}
      {...rest}
    >
      {children}
    </Button>
  );
}

function ModalButton({ icon, ...rest }) {
  return (
    <IconButton
      w={"60px"}
      h={"60px"}
      fontSize="30px"
      icon={icon}
      bg="white"
      shadow={"4px 4px 10px #bfbfbf"}
      rounded={"full"}
      {...rest}
    />
  );
}

export { PrimaryButton, SecondaryButton, ModalButton };
