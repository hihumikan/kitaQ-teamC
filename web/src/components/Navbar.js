import { Avatar, Box, Flex, Icon, Heading, VStack, Center, Img, Button } from "@chakra-ui/react"
import { TbHome, TbBookmark } from "react-icons/tb"
import Link from "./Link"
import { useAuth } from "../context/AuthContext"
import { useEffect, useState } from "react"

const LinkItems = [
  { name: "Home", icon: TbHome, to: "/" },
  { name: "Settings", icon: TbBookmark, to: "/timeline" },
]

export default function Navbar({ children }) {
  return (
    <Box
      minH='100vh'
      bg='#F8F8F8'
      bgImage={"/bg_image.png"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
    >
      {/* {console.log(user)} */}
      <SidebarContent />
      <Box ml='134px' p={"10"}>
        {children}
      </Box>
    </Box>
  )
}

const SidebarContent = ({ onClose, ...rest }) => {
  const user = useAuth()
  return (
    <Flex
      bg='#FFFFFF'
      pos='fixed'
      w='134px'
      h='full'
      // py="10"
      flexDirection='column'
      justifyContent='space-between'
      alignItems='center'
      {...rest}
    >
      {console.log(user)}
      <Box w={"full"}>
        <Heading fontSize='xl' fontFamily='monospace' fontWeight='bold' mb={"80px"}>
          <Img src='/logo.png' />
        </Heading>
        <VStack spacing={"7"}>
          {LinkItems.map((link) => (
            <NavItem key={link.name} icon={link.icon} to={link.to} />
          ))}
        </VStack>
      </Box>
      <Box as='button' borderRadius={"100px"} marginBottom={"60px"}>
        {user != undefined ? (
          <Img
            borderRadius={"100px"}
            width={"60px"}
            // src={"http://flat-icon-design.com/f/f_object_151/s256_f_object_151_0bg.png"}
            // src={user === null ? user.image_url : ""}
            src={user.data.user_data.image_url}
          />
        ) : (
          <></>
        )}
      </Box>
    </Flex>
  )
}

const NavItem = ({ icon, to }) => {
  return (
    <Link
      to={to}
      w='full'
      h={"50px"}
      href='#'
      style={{ textDecoration: "none" }}
      cursor='pointer'
      _focus={{ boxShadow: "none" }}
      _hover={{
        borderRight: "2px solid #F1873B",
        pl: "2px",
      }}
    >
      <Center h={"full"}>
        {icon && (
          <Icon
            fontSize='27px'
            // _groupHover={{
            //   color: "white",
            // }}
            as={icon}
          />
        )}
      </Center>
    </Link>
  )
}
