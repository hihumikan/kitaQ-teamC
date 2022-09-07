import { Avatar, Center, VStack, Heading, Button } from "@chakra-ui/react";
import Header from "../components/Header";
import Post from "../components/Post";
import { BiPlus } from "react-icons/bi";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Timeline() {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`http://localhost:3001/users${id}`);
      setPosts(result.data.posts);
    };
    fetchData();
  }, []);

  return (
    <>
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
          {posts.map((post) => (
            <Link
              _hover={{
                textDecoration: "none",
                boxShadow: "lg",
                opacity: "0.95",
              }}
              to={`/onePostPage/${post.post_id}`}
              key={post.post_id}
            >
              <Post post={post} />
            </Link>
          ))}
        </VStack>
      </div>
    </>
  );
}
export default Timeline;
