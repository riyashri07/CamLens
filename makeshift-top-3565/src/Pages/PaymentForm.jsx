import {
  Button,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Input,
  PinInput,
  PinInputField,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

let data = JSON.parse(localStorage.getItem("cart"));

const PaymentForm = () => {
  const [f_name, setF_name] = useState("");
  const [l_name, setL_name] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [card, setCard] = useState("");
  const [exp_m, setExp_m] = useState("");
  const [exp_y, setExp_y] = useState("");
  const navigate = useNavigate();
  const PaymentDone = () => {
    if (
      f_name === "" ||
      l_name === "" ||
      address === "" ||
      city === "" ||
      state === "" ||
      card === "" ||
      exp_m === "" ||
      exp_y === ""
    ) {
      alert("Fill Your Details First");
    } else {
      alert("Payment Successful");
      navigate("/successful");
    }
  };
  const totalAmountFromApi = data.reduce((acc, e) => {
    return acc + e.price;
  }, 0);

  return (
    <>
      <VStack
        spacing={5}
        width="1200px"
        border="0px solid green"
        margin="auto"
        style={{ marginTop: "30px" }}
        marginBottom="50px"
      >
        <Text fontWeight="bold" fontSize="xl" color="blue">
          Choose Your Payment Method
        </Text>

        <HStack spacing={5}>
          <VStack
            marginTop="-240px"
            width={300}
            align="flex-start"
            padding={5}
            bg="#eeeeee"
          >
            <HStack>
              <Image
                w={25}
                src="https://cdn-icons-png.flaticon.com/128/3037/3037247.png"
              />
              <Text>Debit/Credit Card</Text>
            </HStack>

            <Divider />

            <HStack>
              <Image
                w={25}
                src="https://cdn-icons-png.flaticon.com/128/2169/2169854.png"
              />
              <Text>WALLET</Text>
            </HStack>

            <Divider />
            <HStack>
              <Image
                w={25}
                src="https://cdn-icons-png.flaticon.com/128/483/483742.png"
              />
              <Text>UPI</Text>
            </HStack>

            <Divider />
            <HStack>
              <Image
                w={25}
                src="https://cdn-icons-png.flaticon.com/128/71/71227.png"
              />
              <Text>NET BANKING</Text>
            </HStack>

            <Divider />
            <HStack>
              <Image
                w={25}
                src="https://cdn-icons-png.flaticon.com/128/5163/5163751.png"
              />
              <Text>CASH ON DELIVERY</Text>
            </HStack>

            <Divider />
          </VStack>

          <VStack align="flex-start" spacing={5} padding={5}>
            <VStack>
              <HStack>
                <FormControl>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    size="sm"
                    value={f_name}
                    onChange={(e) => setF_name(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    size="sm"
                    value={l_name}
                    onChange={(e) => setL_name(e.target.value)}
                  />
                </FormControl>
              </HStack>

              <FormControl>
                <FormLabel>Address</FormLabel>
                <Input
                  size="sm"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </FormControl>

              <HStack>
                <FormControl>
                  <FormLabel>City</FormLabel>
                  <Input
                    size="sm"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>State</FormLabel>
                  <Input
                    type="city"
                    size="sm"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />
                </FormControl>
              </HStack>
            </VStack>

            <Divider />

            <VStack>
              <HStack width="full">
                <FormControl>
                  <FormLabel>Card Number</FormLabel>
                  <Input
                    w={280}
                    size="sm"
                    value={card}
                    onChange={(e) => setCard(e.target.value)}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>CVV</FormLabel>
                  <HStack width="full">
                    <PinInput size="sm">
                      <PinInputField />
                      <PinInputField />
                      <PinInputField />
                    </PinInput>
                  </HStack>
                </FormControl>
              </HStack>

              <HStack>
                <FormControl>
                  <FormLabel>Exp Month</FormLabel>
                  <Input
                    size="sm"
                    value={exp_m}
                    onChange={(e) => setExp_m(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Exp Year</FormLabel>
                  <Input
                    size="sm"
                    value={exp_y}
                    onChange={(e) => setExp_y(e.target.value)}
                  />
                </FormControl>
              </HStack>

              <Button
                style={{ marginTop: "20px" }}
                onClick={PaymentDone}
                fontSize="x"
                padding={3}
                w="full"
                colorScheme="blue"
              >
                PAY ₹ {totalAmountFromApi}
              </Button>
            </VStack>
          </VStack>
        </HStack>
      </VStack>
    </>
  );
};
export default PaymentForm;
