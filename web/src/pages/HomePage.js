import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import PostCard from "../components/posts/PostCard";
import Header from "../components/Header";

export default function HomePage() {
  const testPost = {
    id: "aaa",
    name: "むかいです",
    title: "こんばんちゃ〜",
    description:
      "ハロおおおおおおおおおおおおおおおおおおおおロおおおおおおおおおおおおおおおおおおおおロおおおおおおおおおおおおおおおおおおおおロおおおおおおおおおおおおおおおおおおおお",
  };
  const testPosts = [
    testPost,
    testPost,
    testPost,
    testPost,
    testPost,
    testPost,
    testPost,
    testPost,
    testPost,
    testPost,
    testPost,
    testPost,
    testPost,
    testPost,
    testPost,
    testPost,
  ];
  return (
    <Box>
      <Header>
        <Heading>HOME</Heading>
      </Header>
      <SimpleGrid
        columns={3}
        bgColor="#F8F8F8"
        spacing={10}
        columnGap={2}
        px={20}
        py={10}
      >
        {testPosts.map((m, i) => {
          return <PostCard key={i} name={m.name} description={m.description} />;
        })}
      </SimpleGrid>
    </Box>
  );
}
