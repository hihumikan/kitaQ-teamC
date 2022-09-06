import {
  Box,
  HStack,
  Center,
  Image,
  Heading,
  Avatar,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react"

export default function PostCard(props) {
//   const testPost = {
//     id: "aaa",
//     name: "むかいです",
//     title: "こんばんちゃ〜",
//     description:
//       "ハロおおおおおおおおおおおおおおおおおおおおロおおおおおおおおおおおおおおおおおおおおロおおおおおおおおおおおおおおおおおおおおロおおおおおおおおおおおおおおおおおおおお",
//   }

  return (
    <Center py={0}>
      <Box
        maxW={"320px"}
        bg={useColorModeValue("white", "gray.900")}
        // boxShadow={"2xl"}
        rounded={"lg"}
        textAlign={"center"}
        w='298px'
        h='389px'
        borderRadius='30'
      >
        <Avatar
          mt={"43px"}
          size={"2xl"}
          src={
            "https://s3-alpha-sig.figma.com/img/4cf5/b7a9/8b8488a48edc7a28c40762e9e41de954?Expires=1663545600&Signature=aCR-1PHLZN2xMTE8MG8qAo8wgtDRK~z1dkyZM18soNv7slVduN3zRJdJvC7r8pB~hg6HbBGfju95ZNVSvPvKsvI8ZsSG4fNfWTQrps3QijGKrM5fxYKhzH6ErEWPs1tlyBV7dssB6lK72jlorXXyij4MXGUhoehZ8IsSHJguKGm5HDAGuYT-OnAl8oOV35c6rPKJDi2IW33FA2UFTgGnwQtkLBon18Ry345pfelkR6slcETFXg9aVfJhrTgp7GJIzkoMnGEUGjAx~~BtpuQBeNqKgNDSU104dGY-n-R7Sow0l~9HGQjhlOuepRV3o-gdndWihG7zT21ukDcloNFDDQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          }
          alt={"Avatar Alt"}
          pos={"relative"}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"} my='38'>
          {props.name}
        </Heading>
        <Box noOfLines={3} px='6'>
          {props.description}
        </Box>
      </Box>
    </Center>
  )
}
