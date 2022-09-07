import {
  Avatar,
  Center,
  VStack,
  Heading,
  Button,
  color,
} from "@chakra-ui/react";
import Header from "../components/Header";
import Post from "../components/Post";
import { BiPlus } from "react-icons/bi";
import { IconContext } from "react-icons";

const PostItems = [
  {
    id: 1,
    user_id: 1,
    title: "ラーメン作りました！",
    description: "This is the first post",
    image_url: "https://bit.ly/2Z4KKcF",
    image_alt: "image 1",
    created_at: "2021.10.3",
    updated_at: "2021.10.3",
  },
  {
    id: 2,
    user_id: 1,
    title: "Post 2",
    description: "This is the second post",
    image_url: "https://bit.ly/2Z4KKcF",
    image_alt: "image 1",
    created_at: "2021-05-01T00:00:00.000Z",
    updated_at: "2021-05-01T00:00:00.000Z",
  },
];
function Timeline() {
  return (
    <>
      {/* <Flex justifyContent={"space-between"} alignItems={"center"} mb={"51px"}>
        <Center>
          <Avatar
            size="md"
            mr={"16px"}
            src={
              "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
            }
          />
          <Heading size={"lg"}>username</Heading>
        </Center>
        <ButtonGroup>
          <Button rounded={"full"} px={6} bg="#9B9B9B" color={"white"}>
            log in
          </Button>
          <Button
            rounded={"full"}
            px={6}
            colorScheme={"orange"}
            bg={"#F1873B"}
            _hover={{ bg: "orange.500" }}
          >
            sign up
          </Button>
        </ButtonGroup>
      </Flex> */}
      <div style={{ position: "fixed" }}>
        <Header>
          <Center>
            <Avatar
              size="md"
              mr={"16px"}
              src={
                "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
              }
            />
            <Heading size={"lg"}>username</Heading>
          </Center>
        </Header>
      </div>
      <div>
        <Button
          color={"black"}
          bg="white"
          height="170px"
          width="170px"
          borderRadius={"60px"}
          position={"fixed"}
          marginLeft={"400px"}
          marginTop={"520px"}
          shadow={"20"}
          _hover={{ bg: "#F1873B", color: "white" }}
        >
          <IconContext.Provider value={{ color: "F1873B", size: "60px" }}>
            <BiPlus />
          </IconContext.Provider>
        </Button>
        <VStack spacing={"75px"}>
          {PostItems.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </VStack>
      </div>
    </>
  );
}
export default Timeline;
