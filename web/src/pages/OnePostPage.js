import {
  Box,
  Center,
  Text,
  Flex,
  Divider,
  VStack,
  HStack,
  Image,
  Spacer,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { TbMessage2 } from "react-icons/tb";
import { useState, useEffect } from "react";
import axios from "axios";
import ChatBubble from "../components/ChatBubble";
import ChatInput from "../components/ChatInput";

export default function OnePostPage() {
  const isChild = true;
  const chatListHeight = isChild === true ? "410px" : "550px";
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [comment, setComment] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`http://localhost:3001/posts${id}`);
      setPost(result.data);
    };
    fetchData();
  }, [comment]);

  return (
    <Center>
      <Box
        w={"1200px"}
        h={"700px"}
        bgColor={"white"}
        borderRadius={"3xl"}
        p={7}
        boxShadow={"xl"}
      >
        <Flex h={"full"}>
          <Box w={"60%"} h={""} bgColor={""} pl={"70px"}>
            <VStack align={"start"} w={"80%"} bgColor={""}>
              <Text ml="auto" color={"#8C8A8A"} mr={"-20px"}>
                {post.created_at}
              </Text>
              <Box h={"30px"}></Box>
              <Image src={post.image_url} alt={""} />
              <Spacer></Spacer>
              <Spacer></Spacer>
              <Text bgColor="" fontSize={"30px"} mt="20px">
                {post.title}
              </Text>
              <Spacer></Spacer>
              <Text bgColor="" mt="20px" textAlign={"left"}>
                {post.description}
              </Text>
            </VStack>
          </Box>
          <Divider orientation="vertical" size={"20px"}></Divider>
          <Box flex={1} h={"100%"} bgColor={""}>
            <VStack position={"relative"}>
              <HStack p={2}>
                <TbMessage2 size={"40px"}></TbMessage2>
                <Text fontSize={"20px"}>message</Text>
              </HStack>
              <VStack overflow={"auto"} h={chatListHeight} spacing={"40px"}>
                {post.comments &&
                  post.comments.map((comment) => (
                    <ChatBubble key={comment.id} comment={comment} />
                  ))}
              </VStack>
              {isChild === true ? (
                <ChatInput id={id} comment={comment} setComment={setComment} />
              ) : (
                <></>
              )}
            </VStack>
          </Box>
        </Flex>
      </Box>
    </Center>
  );
}
