import logo from "../Images/Camlenslogo.png";
import navbar from "./Navbar.module.css";
import { Link as ReactLink } from "react-router-dom"  

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
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Input,
  Heading,
} from "@chakra-ui/react";

import {
  SearchIcon,
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex h="30px" bg="#001e42" color="white" justifyContent="center">
        Enjoy 5% OFF† purchases every day with the Adorama Edge Credit Card.
      </Flex>
      <Flex
        h="35px"
        bg="white"
        // border="2px solid black"
        justifyContent="space-between"
      >
        <Box>
          <Flex>
            <Text className="prenav">ADORAMA BUSINESS</Text>
            <Text className="prenav">ADORAMA RENTALS</Text>
            <Text className="prenav">PRITIQUE</Text>
            <Text className="prenav">OUR BLOG</Text>
          </Flex>
        </Box>
        <Box>
          <Flex></Flex>
        </Box>
      </Flex>
      <Flex
        bg={useColorModeValue("#004387", "gray.800")}
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
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          {/* <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
            Logo
          </Text> */}
          <ReactLink to="/">
            <img src={logo} alt="" width="60px" br="5px" />
          </ReactLink>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
        <Input
          type="search"
          placeholder="Search"
          w="30%"
          mr="1rem"
          bg="white"
          borderRadius={"25px"}
        />
        {/* <SearchIcon mr="2rem" /> */}

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <ReactLink to="/signin">
            <Button
              // as={"a"}
              // fontSize={"sm"}
              // fontWeight={400}
              // variant={"link"}
              // href={"#"}
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"#001e42"}
              href={"#"}
              _hover={{
                bg: "olive",
              }}

             
            >
              Sign In
              
            </Button>
          </ReactLink>

          <ReactLink to="/signup">
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"#001e42"}
              href={"#"}
              _hover={{
                bg: "olive",
              }}
            >
              Sign Up
            </Button>
          </ReactLink>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={3}
                href={navItem.href ?? "#"}
                fontSize={"xl"}
                fontWeight={500}
                color="white"
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue(" #004387", "gray.600") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "white" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"white"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
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
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Products",
    children: [
      {
        label: "Camera",
        subLabel: "Monolights & Strobes",
        href: "#",
      },
      {
        label: "Lenses",
        subLabel: "Mirrorless Lenses",
        href: "#",
      },
      {
        label: "Custom Photo Printing",
        subLabel: "Custom Photo Prints",
        href: "#",
      },

      {
        label: "Desktop Computers",
        subLabel: "All in one PC's",
        href: "#",
      },
      {
        label: "Computer Accessories",
        subLabel: "Computer cables and adapters",
        href: "#",
      },
      {
        label: "Headphones & Earphones",
        subLabel: "Multiple types",
        href: "#",
      },
    ],
  },
  {
    label: "Brands",
    children: [
      {
        label: "Canon",
        subLabel: "Canon Cameras",
        href: "#",
      },
      {
        label: "FujiFilm",
        subLabel: "FujiFilm Cameras",
        href: "#",
      },
      {
        label: "Sony",
        subLabel: "Sony Cameras",
        href: "#",
      },
      {
        label: "Nikon",
        subLabel: "Nikon Cameras",
        href: "#",
      },
      {
        label: "Panasonic",
        subLabel: "Panasonic Cameras",
        href: "#",
      },
    ],
  },
  {
    label: "Used",
    href: "#",
    class: "riya",
  },
  {
    label: "Deals",
    href: "#",
  },
];
