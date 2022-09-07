import {
  Box,
  Center,
  Avatar,
  useColorModeValue,
  Text
} from "@chakra-ui/react";

export default function PostCard(props) {
  return (
    <Center py={0}>
      <Box
        maxW={"320px"}
        bg={useColorModeValue("white", "gray.900")}
        rounded={"lg"}
        textAlign={"center"}
        w="298px"
        h="389px"
        borderRadius="30"
      >
        <Avatar
          mt={"43px"}
          size={"2xl"}
          src={props.image_url}
          alt={"Avatar Alt"}
          pos={"relative"}
        />
        <Text fontSize={"2xl"} fontFamily={"body"} my="38">
          {props.name}
        </Text>
        <Box noOfLines={3} px="6">
          {props.description}
        </Box>
      </Box>
    </Center>
  );
}
