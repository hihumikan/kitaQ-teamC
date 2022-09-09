import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  VStack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
// import { CloseIcon, ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { TbAlignJustified } from "react-icons/tb";
import { CgClose } from "react-icons/cg";
import { PrimaryButton, SecondaryButton } from "./Button";

export default function MobileNavbar({ display }) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box position={"fixed"} w={"full"} display={display} zIndex={"100"}>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <CgClose w={3} h={3} />
              ) : (
                <TbAlignJustified w={5} h={5} />
              )
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Image src="/logo_mobile.png" h={"60px"} />
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            href={"#"}
          ></Button>
          <Button
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"pink.400"}
            href={"#"}
            _hover={{
              bg: "pink.300",
            }}
          ></Button>
        </Stack>
      </Flex>

      <Box boxShadow={"5px 5px 4px #e2e2e2"}>
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </Box>
  );
}

const MobileNav = () => {
  return (
    <VStack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
      boxShadow={"100px 100px 100px red"}
      alignItems
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      <SecondaryButton display={"block"} mr={"0"}>
        ログイン
      </SecondaryButton>
      <PrimaryButton display={"block"} mr={"0"}>
        サインアップ
      </PrimaryButton>
    </VStack>
  );
};

const MobileNavItem = ({ label, href }) => {
  return (
    <Stack spacing={4}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
      </Flex>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "ホーム",
    href: "/",
  },
  {
    label: "タイムライン",
    href: "/timeline",
  },
];
