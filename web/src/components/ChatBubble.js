import { Avatar, Box, HStack, Spacer, Text, VStack } from "@chakra-ui/react";

function ChatBubble({ comment }) {
  return (
    <Box>
      <HStack align={"start"}>
        <VStack>
          <Avatar mt={"30px"} src={comment.image_url}></Avatar>
          <Text w={"100%"} fontSize={"2xs"}>
            {comment.user_name}
          </Text>
        </VStack>

        <Spacer></Spacer>
        <Box textAlign={"left"} w={"320px"} h={""} className="balloon1" p={6}>
          <Text>{comment.comment}</Text>
        </Box>
      </HStack>
    </Box>
  );
}

export default ChatBubble;
