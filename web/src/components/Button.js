import { Button } from "@chakra-ui/react";

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
      {...rest}
    >
      {children}
    </Button>
  );
}

export { PrimaryButton, SecondaryButton };
