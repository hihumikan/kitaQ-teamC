import { Box, Button, Flex, Heading, HStack, Text } from "@chakra-ui/react"
import { BsChat } from "react-icons/bs"

function Post({ post }) {
  return (
    <Box pos={"relative"}>
      <Flex
        flexDirection={"column"}
        alignItems={"flex-start"}
        bg='#FFFFFF'
        rounded={"29px"}
        p={"20"}
        maxW={"642px"}
        gap={"36px"}
      >
        <Text ml='auto' color={"#8C8A8A"}>
          {post.created_at}
        </Text>
        <img src={post.image_url} alt={post.image_alt} />
        <Text size='lg'>{post.title}</Text>
        <Text>{post.description}</Text>
      </Flex>
      <HStack position='absolute' bottom={10} right={10}>
        <BsChat size={30} />
        <Text fontSize={"23px"} color={"#5B5B5B"}>
          5
        </Text>
      </HStack>
    </Box>
  )
}

export default Post
