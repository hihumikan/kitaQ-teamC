import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import User from "../components/User";
import Header from "../components/Header";
import { useUsers } from "../context/UserContext";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


export default function HomePage() {
  const [hasSound, setHasSound] = useState(true);
  useEffect(() => {
    if ("Notification" in window) {
      // 通知が許可されていたら早期リターン
      const permission = Notification.permission;
      if (permission === "denied" || permission === "granted") {
        return;
      }
      // 通知の許可を求める
      Notification.requestPermission().then(() => new Notification("テスト"));
    }
  }, []);

  const handlePushNotif = () => {
    if ("Notification" in window) {
      const notif = new Notification("今日の自炊を記録してください！");
      const audio = new Audio("./se.wav");
      audio.play();
    }
  };

  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => c + 1);
      handlePushNotif();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const users = useUsers();
  return (
    <Box>
      <Header>
        <Text fontSize={"2xl"} as="b"></Text>
      </Header>
      <SimpleGrid columns={3} spacing={10} columnGap={2} px={20} py={10}>
        {users.map((user) => {
          return (
            <Link to={`/timeline/${user.user_id}`} key={user.user_id}>
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
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
