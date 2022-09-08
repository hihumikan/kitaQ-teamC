import {
  Avatar,
  Center,
  VStack,
  Heading,
  Button,
  Text,
} from "@chakra-ui/react";
import Header from "../components/Header";
import Post from "../components/Post";
import { BiPlus } from "react-icons/bi";
import { IconContext } from "react-icons";
import { useParams, Link } from "react-router-dom";

const PostItems = [
  {
    id: 1,
    user_id: 1,
    title: "久しぶりの自炊！",
    description: "最近自炊をしてなかったので、スーパーに行ってきました",
    image_url:
      "https://dol.ismcdn.jp/mwimgs/0/c/1080m/img_0c3c361d8de37f34ae80b8bf60a09fc7198652.jpg",
    image_alt: "image 1",
    created_at: "2021.10.3",
    updated_at: "2021.10.3",
  },
  {
    id: 2,
    user_id: 1,
    title: "今日は...",
    description: "This is the second post",
    image_url:
      "https://cdn.clipkit.co/tenants/381/articles/images/000/133/901/large/0e183ddb-f1ed-4df5-902e-fdd7817adbf2.jpg?1633183765",
    image_alt: "image 1",
    created_at: "2021.10.1",
    updated_at: "2021.10.1",
  },
];
function Timeline() {
  // paramのidはuser_idです！
  const { uid } = useParams();
  return (
    <>
      <div style={{ position: "fixed" }}>
        <Header>
          <Center>
            <Avatar
              size="md"
              mr={"16px"}
              src={
                "http://flat-icon-design.com/f/f_object_151/s256_f_object_151_0bg.png"
              }
            />
            <Text as="b" fontSize="3xl">
              加藤 恵吾
            </Text>
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
        <VStack spacing={"75px"} mr={"40px"} mt={"80px"}>
          {PostItems.map((post) => (
            <Link
              _hover={{
                textDecoration: "none",
                boxShadow: "lg",
                opacity: "0.95",
              }}
              to={`/onePostPage/${post.id}`}
            >
              <Post key={post.id} post={post} />
            </Link>
          ))}
        </VStack>
      </div>
    </>
  );
}
export default Timeline;
