import { Flex, Heading, Text } from "@chakra-ui/react";

function Post({ post }) {
  return (
    <Flex
      flexDirection={"column"}
      alignItems={"flex-start"}
      bg="#FFFFFF"
      rounded={"29px"}
      p={"20"}
      maxW={"642px"}
      gap={"36px"}
    >
      <Text ml="auto" color={"#8C8A8A"}>
        {post.created_at}
      </Text>
      <img src={post.image_url} alt={post.image_alt} />
      <Heading size="lg">{post.title}</Heading>
      <Text>{post.description}</Text>
    </Flex>
  );
}

export default Post;
