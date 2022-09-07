import { Box, Heading, SimpleGrid,Text } from "@chakra-ui/react"
import User from "../components/User"
import Header from "../components/Header"
import { useUsers } from "../context/UserContext"
import { Link } from "react-router-dom"

export default function HomePage() {
  const users = useUsers()
  return (
    <Box>
      <Header>
        <Text>HOME</Text>
      </Header>
      <SimpleGrid columns={3} spacing={10} columnGap={2} px={20} py={10}>

        {users.map((user) => {
          return (
            <Link to={`/timeline/${user.user_id}`}>
              <Box
                _hover={{
                  textDecoration: "none",
                  opacity: "0.8",
                }}
              >
                <User
                  key={user.user_id}
                  name={user.user_name}
                  description={user.description}
                  image_url={user.image_url}
                />
              </Box>
            </Link>
          )

        })}
      </SimpleGrid>
    </Box>
  )
}
