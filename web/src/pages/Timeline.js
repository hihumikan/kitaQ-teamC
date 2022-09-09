import {
  Avatar,
  Center,
  VStack,
  Button,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Header from "../components/Header";
import Post from "../components/Post";
import PostModal from "../components/PostModal";
import { TbPencil } from "react-icons/tb";
import { IconContext } from "react-icons";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Timeline() {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`https://api.kitaq.qqey.net/users/${id}`);
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
          bg={"white"}
          height="170px"
          width="170px"
          borderRadius={"60px"}
          position={"fixed"}
          marginLeft={"400px"}
          marginTop={"400px"}
          boxShadow={"xl"}
          _hover={{ boxShadow: "sm" }}
          onClick={onOpen}
        >
          <IconContext.Provider value={{ color: "#EFB6BF", size: "50px" }}>
            <TbPencil />
          </IconContext.Provider>
        </Button>
        <VStack spacing={"75px"} mr={"45px"} mt={"80px"}>
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
      <PostModal
        isOpen={isOpen}
        onClose={onClose}
        posts={posts}
        setPosts={setPosts}
      />
    </>
  );
}
export default Timeline;
