import { Box, Button, Flex, Heading, HStack, Text, Spacer, Image } from "@chakra-ui/react"
import { BsChat } from "react-icons/bs"

function Post({ post }) {
  return (
    <Box pos={"relative"}>
      {console.log(post)}
      <Flex
        flexDirection={"column"}
        alignItems={"flex-start"}
        bg='#FFFFFF'
        rounded={"29px"}
        p={"10"}
        maxW={"642px"}
        gap={"36px"}
        boxShadow={"xs"}
        _hover={{ boxShadow: "sm" }}
      >
        <Text ml='auto' color={"#8C8A8A"}>
          {post.created_at}
        </Text>
        <Image
          h={"270px"}
          w={"500px"}
          src={post.image_url}
          alt={post.image_alt}
          // fallbackSrc='https://via.placeholder.com/300'
        />
        <Text as='b' fontSize='2xl'>
          {post.title}
        </Text>
        <Text>{post.description}</Text>
        <Flex ml='auto' gap='2'>
          <BsChat size={30} />
          <Text fontSize={"23px"} color={"#5B5B5B"}>
            {post.comments}
          </Text>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Post
