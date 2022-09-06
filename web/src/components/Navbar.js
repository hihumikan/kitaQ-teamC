import {
  Avatar,
  Box,
  Flex,
  Icon,
  Link,
  Heading,
  VStack,
  Center,
} from "@chakra-ui/react";
import { MdOutlineHome, MdOutlineSettings } from "react-icons/md";

const LinkItems = [
  { name: "Home", icon: MdOutlineHome },
  { name: "Settings", icon: MdOutlineSettings },
];

export default function Navbar({ children }) {
  return (
    <Box minH="100vh" bg="#F8F8F8">
      <SidebarContent />
      <Box ml="134px">{children}</Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Flex
      bg="#FFFFFF"
      pos="fixed"
      w="134px"
      h="full"
      py="10"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      {...rest}
    >
      <Box w={"full"}>
        <Heading
          fontSize="xl"
          fontFamily="monospace"
          fontWeight="bold"
          mb={"130px"}
        >
          おかん
          <br />
          おとん
        </Heading>
        <VStack spacing={"3"}>
          {LinkItems.map((link) => (
            <NavItem key={link.name} icon={link.icon} />
          ))}
        </VStack>
      </Box>
      <Avatar
        size="md"
        src={
          "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
        }
      />
    </Flex>
  );
};

const NavItem = ({ icon }) => {
  return (
    <Link
      w="full"
      h={"50px"}
      href="#"
      style={{ textDecoration: "none" }}
      cursor="pointer"
      _focus={{ boxShadow: "none" }}
      _hover={{
        borderRight: "2px solid #F1873B",
        pl: "2px",
      }}
    >
      <Center h={"full"}>
        {icon && (
          <Icon
            fontSize="27px"
            // _groupHover={{
            //   color: "white",
            // }}
            as={icon}
          />
        )}
      </Center>
    </Link>
  );
};
