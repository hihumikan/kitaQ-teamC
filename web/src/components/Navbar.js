import { Avatar, Box, Flex, Icon, Link, Heading } from "@chakra-ui/react";
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
      w="134px"
      pos="fixed"
      h="full"
      flexDirection="column"
      justifyContent="space-between"
      {...rest}
    >
      <Heading fontSize="xl" fontFamily="monospace" fontWeight="bold">
        おかん
        <br />
        おとん
      </Heading>
      <Box>
        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon} />
        ))}
      </Box>
      <Avatar
        size={"sm"}
        src={
          "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
        }
      />
    </Flex>
  );
};

const NavItem = ({ icon, ...rest }) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        role="group"
        cursor="pointer"
        flexDirection="column"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            fontSize="30"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
      </Flex>
    </Link>
  );
};
