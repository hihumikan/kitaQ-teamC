import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import User from "../components/User";
import Header from "../components/Header";
import { useUsers } from "../context/UserContext";

export default function HomePage() {
  const users = useUsers();
  return (
    <Box>
      <Header>
        <Heading>HOME</Heading>
      </Header>
      <SimpleGrid columns={3} spacing={10} columnGap={2} px={20} py={10}>
        {users.map((user) => {
          return (
            <User
              key={user.user_id}
              name={user.user_name}
              description={user.description}
              image_url={user.image_url}
            />
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
