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
import { Link } from "react-router-dom";

const PostItems = [
  {
    id: 1,
    user_id: 1,
    title: "ラーメン作りました！",
    description: "This is the first post",
    image_url:
      "https://s3-alpha-sig.figma.com/img/ab88/555e/bf97db9a062b15c16368c0ad75c378de?Expires=1663545600&Signature=QwyMrfscA7V6mTNXSJCpp43kcfiBriiIhr3oZ76K0iCHh0kd8OuzcHWQRDCyObX5AYYlrwmCGi5uvZWtvArcMERrgBDRNauBwYkviJAq9ISho8eB18Ll5kEVeBCASxFKsKTy6rwEpYdIcJk36cFtUMMbOB2t9eV704157UdiPAztleDFUDTo2qRKw2sPlKszeGUDIGD6k8RJhvFCt9wOsJimY3~Xon2QQHEGRYv8PwJf3XNDvqrIFcOs5itZDa6vlA6jE1Q661pmaF0Fz4GnkVbF2o3bTJeulcEBy76OQpxy-XXAk7mCJ67TevXWV3SRSi0Yyy8WkimxuLlSlPVNCQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
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
]
function Timeline() {
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
          {PostItems.map((post) => (
              <Link
              _hover={{ textDecoration: "none", boxShadow: "sm", opacity: "0.95" }}
              to={`/onePostPage/${post.id}`}
            >
              <Post key={post.id} post={post} />
            </Link>
          ))}
        </VStack>
      </div>
    </>
  )
}
export default Timeline
