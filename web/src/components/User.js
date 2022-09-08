import {
  Box,
  Center,
  Avatar,
  useColorModeValue,
  Text,
  Flex,
  VStack,
} from "@chakra-ui/react";

export default function PostCard(props) {
  return (
    <Center py={0}>
      <VStack
        maxW={"320px"}
        bg={useColorModeValue("white", "gray.900")}
        rounded={"lg"}
        textAlign={"center"}
        w="290px"
        h="380px"
        borderRadius="30"
        boxShadow={"md"}
        p={"10"}
        transition={".4s"}
        _hover={{ boxShadow: "sm" ,transform: "scale(1.05)"}}
      >
        <Avatar
          mt={"43px"}
          size={"2xl"}
          src={props.image_url}
          alt={"Avatar Alt"}
          pos={"relative"}
        />
        <br />
        <Text fontSize={"2xl"} my="38" as="b">
          {props.name}
        </Text>
        <Box noOfLines={3} px="6">
          {props.description}
        </Box>
      </VStack>
    </Center>
  );
}
