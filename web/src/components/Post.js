import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Text,
  Spacer,
} from "@chakra-ui/react";
import { BsChat } from "react-icons/bs";

function Post({ post }) {
  return (
    <Box pos={"relative"}>
      <Flex
        flexDirection={"column"}
        alignItems={"flex-start"}
        bg="#FFFFFF"
        rounded={"29px"}
        p={"10"}
        maxW={"642px"}
        gap={"36px"}
        boxShadow={"md"}
      >
        <Text ml="auto" color={"#8C8A8A"}>
          {post.created_at}
        </Text>
        <img src={post.image_url} alt={post.image_alt} />
        <Text as="b" fontSize="2xl">
          {post.title}
        </Text>
        <Text>{post.description}</Text>
        <Flex ml="auto" gap="2">
          <BsChat size={30} />
          <Text fontSize={"23px"} color={"#5B5B5B"}>
            {post.comments}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Post;
