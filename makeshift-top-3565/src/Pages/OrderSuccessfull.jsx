import { Button, VStack } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSuccessfull = () => {
  const navigate = useNavigate();

  return (
    <div>
      <VStack
        margin="auto"
        style={{
          border: "0px solid gray",
          width: "40%",
          margin: " auto",
          marginTop: "10PX",
          marginBottom: "100px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        <div>
          <img
            src="https://www.pinkwigscloset.com/images/success-tick.gif"
            alt="img"
          />
        </div>

        <Button
          width="50%"
          style={{ marginTop: "0px", marginBottom: "50px" }}
          onClick={() => navigate("/")}
          fontSize="x"
          padding={5}
          colorScheme="blue"
        >
          Enjoy Your Purchaseing with us!
        </Button>
      </VStack>
    </div>
  );
};

export default OrderSuccessfull;
