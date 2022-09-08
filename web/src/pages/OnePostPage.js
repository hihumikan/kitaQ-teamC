import {
  Box,
  Center,
  Text,
  Flex,
  Divider,
  Heading,
  VStack,
  HStack,
  Image,
  Spacer,
  Avatar,
  Input,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { TbMessage2 } from "react-icons/tb";
import { FiSend } from "react-icons/fi";

const ChatCard = () => {
  return (
    <Box>
      <HStack align={"start"}>
        <VStack>
          <Avatar
            mt={"30px"}
            src="https://s3-alpha-sig.figma.com/img/4cf5/b7a9/8b8488a48edc7a28c40762e9e41de954?Expires=1663545600&Signature=aCR-1PHLZN2xMTE8MG8qAo8wgtDRK~z1dkyZM18soNv7slVduN3zRJdJvC7r8pB~hg6HbBGfju95ZNVSvPvKsvI8ZsSG4fNfWTQrps3QijGKrM5fxYKhzH6ErEWPs1tlyBV7dssB6lK72jlorXXyij4MXGUhoehZ8IsSHJguKGm5HDAGuYT-OnAl8oOV35c6rPKJDi2IW33FA2UFTgGnwQtkLBon18Ry345pfelkR6slcETFXg9aVfJhrTgp7GJIzkoMnGEUGjAx~~BtpuQBeNqKgNDSU104dGY-n-R7Sow0l~9HGQjhlOuepRV3o-gdndWihG7zT21ukDcloNFDDQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          ></Avatar>
          <Text w={"100%"} fontSize={"2xs"}>
            むかい ゆうき
          </Text>
        </VStack>

        <Spacer></Spacer>
        <Box textAlign={"left"} w={"320px"} h={""} className="balloon1" p={6}>
          <Text>
            むかいむかいむかいむかいむかいむかいむかいむかいむかいむかいむかいむかいむかいむかいむかいむかいむかいむかいむかいむかい
          </Text>
        </Box>
      </HStack>
    </Box>
  );
};

const InputArea = () => {
  return (
    <Center
      //   position={"absolute"}
      w={"100%"}
      h={"180px"}
      bgColor={"white"}
      bottom={0}
      right={0}
      zIndex={4}
    >
      <HStack align={"end"}>
        <Box
          borderRadius={"2xl"}
          border={"1px"}
          borderColor={"#9E9E9E"}
          h={"100px"}
          w={"350px"}
          p={4}
          mr={"10px"}
        >
          <Input variant="unstyled" placeholder="コメントを残す" />
        </Box>
        <FiSend size={"30px"} />
      </HStack>
    </Center>
  );
};

export default function OnePostPage() {
  // const isChild = false
  const isChild = true;
  const chatListHeight = isChild === true ? "410px" : "550px";
  // これでurlのid取ってこれます！
  const { id } = useParams();

  /// idからpostを取ってくる
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
                2021.10.3
              </Text>
              <Box h={"30px"}></Box>
              <Image
                src={
                  "https://cdn.clipkit.co/tenants/381/articles/images/000/133/901/large/0e183ddb-f1ed-4df5-902e-fdd7817adbf2.jpg?1633183765"
                }
                alt={""}
              />
              <Spacer></Spacer>
              <Spacer></Spacer>
              <Text bgColor="" fontSize={"30px"} mt="20px">
                今日は...
              </Text>
              <Spacer></Spacer>
              <Text bgColor="" mt="20px" textAlign={"left"}>
                かj保f日おエアsフォイ橋hフィ橋hフィアh瀬fヒアshフィ橋f日はセfはshふあhs絵フォh牌shfbんcあbsべふぁえfはhfかj保f日おエアsフォイ橋hフィ橋hフィアh瀬fヒアshフィ橋f日はセfはshふあhs絵フォh牌shfbんcあbsべふぁえfはhf
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
                <ChatCard></ChatCard>
                <ChatCard></ChatCard>
                <ChatCard></ChatCard>
                <ChatCard></ChatCard>
              </VStack>
              {isChild === true ? <InputArea /> : <></>}
            </VStack>
          </Box>
        </Flex>
      </Box>
    </Center>
  );
}
