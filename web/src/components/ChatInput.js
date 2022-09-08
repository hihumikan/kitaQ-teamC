import { Center, HStack, Box, Input } from "@chakra-ui/react";
import { FiSend } from "react-icons/fi";
import axios from "axios";

function ChatInput({ id, comment, setComment }) {
  async function post(comment) {
    // cf. `http://localhost:3001/posts/${id}/comments`
    const result = await axios.post(
      `http://localhost:3001/posts${id}comments`,
      comment
    );
    return result.data;
  }

  return (
    <Center
      w={"100%"}
      h={"180px"}
      bgColor={"white"}
      bottom={0}
      right={0}
      zIndex={4}
    >
      <HStack align={"end"}>
        <Box
          borderRadius={"2xl"}
          border={"1px"}
          borderColor={"#9E9E9E"}
          h={"100px"}
          w={"350px"}
          p={4}
          mr={"10px"}
        >
          <Input
            variant="unstyled"
            placeholder="コメントを残す"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </Box>
        <FiSend
          size={"30px"}
          cursor={"pointer"}
          onClick={() => {
            post({ comment });
            setComment("");
          }}
        />
      </HStack>
    </Center>
  );
}

export default ChatInput;
