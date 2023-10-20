import { Box, Button, Container, HStack, Image } from "@chakra-ui/react";
import React from "react";
import logo from "./logo.png"

const Navbar = () => {
  return (
    <Box padding={"5px"} bgColor={"#00214D"} fontFamily={"Poppins"} >
      <Container maxW={"7xl"} display={"flex"} flexDirection={"row"} justifyContent={"space-between"}>
        <Image src={logo} width={"100px"} />
        <HStack gap={"15px"}>
            <Button border={"1px solid white"} variant={"outline"} color={"white"}>Login</Button>
            <Button colorScheme="blue">Signup</Button>
        </HStack>
      </Container>
    </Box>
  );
};

export default Navbar;
