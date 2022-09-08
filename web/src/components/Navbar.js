import {
  Avatar,
  Box,
  Flex,
  Icon,
  Heading,
  VStack,
  Center,
  Img,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { TbHome, TbBookmark } from "react-icons/tb";
import Link from "./Link";
import ProfileModal from "./ProfileModal";


const LinkItems = [
  { name: "Home", icon: TbHome, to: "/" },
  { name: "Settings", icon: TbBookmark, to: "/timeline" },
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
  const {
    isOpen: isOpenProfile,
    onOpen: onOpenProfile,
    onClose: onClosePrfile,
  } = useDisclosure();
  return (
    <>
      <Flex
        bg="#FFFFFF"
        pos="fixed"
        w="134px"
        h="full"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        {...rest}
      >
        <Box w={"full"}>
          <Heading fontSize="xl" fontWeight="bold" mb={"80px"}>
            <Img src="/logo.png" fallbackSrc="./logo.png" />
          </Heading>
          <VStack spacing={"7"}>
            {LinkItems.map((link) => (
              <NavItem key={link.name} icon={link.icon} to={link.to} />
            ))}
          </VStack>
        </Box>
        <Box
          as="button"
          borderRadius={"100px"}
          marginBottom={"60px"}
          boxShadow={"2xl"}
          _hover={{
            boxShadow: "sm",
          }}
          onClick={onOpenProfile}
        >
          <Img
            borderRadius={"100px"}
            width={"60px"}
            src={
              "http://flat-icon-design.com/f/f_object_151/s256_f_object_151_0bg.png"
            }
          />
        </Box>
      </Flex>
      <ProfileModal isOpen={isOpenProfile} onClose={onClosePrfile} />
    </>

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
      transition={".2s"}

      _focus={{ boxShadow: "none" }}
      _hover={{
        borderRight: "2px solid #FFC2CC",
        pl: "2px",
      }}
    >
      <Center h={"full"}>{icon && <Icon fontSize="27px" as={icon} />}</Center>
    </Link>
  );
};
