import {
  Avatar,
  Box,
  Flex,
  Icon,
  Heading,
  VStack,
  Center,
  Img,
} from "@chakra-ui/react";
import { MdOutlineHome, MdOutlineSettings } from "react-icons/md";
import Link from "./Link";

const LinkItems = [
  { name: "Home", icon: MdOutlineHome, to: "/" },
  { name: "Settings", icon: MdOutlineSettings, to: "/timeline" },
];

export default function Navbar({ children }) {
  return (
    <Box
      minH="100vh"
      bg="#F8F8F8"
      bgImage={"/bg_image.png"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
    >
      <SidebarContent />
      <Box ml="134px" p={"10"}>
        {children}
      </Box>
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
      // py="10"
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
          <Img src="./logo.png" />
        </Heading>
        <VStack spacing={"3"}>
          {LinkItems.map((link) => (
            <NavItem key={link.name} icon={link.icon} to={link.to} />
          ))}
        </VStack>
      </Box>
      <Avatar
        size="md"
        src={
          "http://flat-icon-design.com/f/f_object_151/s256_f_object_151_0bg.png"
        }
      />
    </Flex>
  );
};

const NavItem = ({ icon, to }) => {
  return (
    <Link
      to={to}
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
