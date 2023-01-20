import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { useState } from "react";
  
let loginObj = {
   
    email: '',
    password: '',
   
  }
  
export default function SimpleCard() {
 const [email, setEmail] = useState("") 
  const [password, setPassword] = useState("") 
  
  //  const HandleEmail = (e) => {
  //    console.log(e.target.value)
  //  }

  // const HandlePassword = (e) => {
  //   console.log(e.target.value);
  // };
    return (
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to Camlens</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to buy all of our cool <Link color={"#004387"}>Gadgets</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "#004387")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  Name="email"
                  value={email}
                  onChange={(e) => console.log(e.target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  Name="password"
                  value={password}
                  // onChange={HandlePassword}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"#004387"}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={"#004387"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }