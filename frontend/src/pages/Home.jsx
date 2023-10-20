import {
  Box,
  Button,
  Container,
  HStack,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";

const welcomingQuotes = [
  "Welcome to a world of wisdom and inspiration.",
  "Step into the realm of timeless quotes and infinite inspiration.",
  "Discover the power of words on this journey of inspiration.",
  "Where words meet wisdom - Welcome to our Quotes Universe.",
  "Embrace the beauty of words in this sanctuary of quotes.",
  "Unlock the wisdom of the ages through the art of quotes.",
  "Inhale inspiration, exhale gratitude. Welcome to our Quotes Oasis.",
  "Prepare to be inspired, one quote at a time.",
  "Words have the power to change lives. Welcome to the world of transformative quotes.",
  "Get ready to explore the universe of profound thoughts and powerful words.",
];

const Home = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [message, setMessage] = useState("");
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % welcomingQuotes.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const handleShayari = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:8080/quote?type=${"hindi shayari"}&keyword=${keyword}&words=50`
      );
      console.log(response?.data?.message);
      setLoading(false);
      setMessage(response?.data?.message);
    } catch (error) {
      setLoading(false);
      setMessage("Please try again...");
      console.log(error);
    }
  };

  const handleQuote = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:8080/quote?type=${"quote"}&keyword=${keyword}&words=50`
      );
      console.log(response?.data?.message);
      setLoading(false);
      setMessage(response?.data?.message);
    } catch (error) {
      setLoading(false);
      setMessage("Please try again...");
      console.log(error);
    }
  };
  const handleStory = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:8080/quote?type=${"story"}&keyword=${keyword}&words=200`
      );
      console.log(response?.data?.message);
      setLoading(false);
      setMessage(response?.data?.message);
    } catch (error) {
      setLoading(false);
      setMessage("Please try again...");
      console.log(error);
    }
  };

  return (
    <Box
      bgGradient={`linear(to-r, green.400, pink.400)`}
      fontFamily={"Poppins"}
      minH={"90vh"}
      paddingTop={{ base: "20px", md: "20px", lg: "50px" }}
    >
      <Container
        maxW={{ base: "100%", md: "90%", lg: "6xl" }}
        padding={"20px"}
        borderRadius={"10px"}
        boxShadow={"rgb(3, 24, 56) 0px 20px 30px -10px"}
      >
        <Stack
          direction={{ base: "column", md: "column", lg: "row" }}
          marginTop={{ base: "30px", md: "0px", lg: "30px" }}
        >
          <Input
            variant={"outline"}
            _placeholder={{
              color:"white"
            }}
            placeholder="Keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <HStack
            justifyContent={"center"}
            alignItems={"center"}
            marginTop={{ base: "10px", md: "10px", lg: "0px" }}
          >
            <Button colorScheme="pink" onClick={handleShayari}>
              Shayari
            </Button>
            <Button colorScheme="green" onClick={handleQuote}>
              Quote
            </Button>
            <Button colorScheme="purple" onClick={handleStory}>
              Story
            </Button>
          </HStack>
        </Stack>
        <Box
          boxShadow={
            " rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 85, 85) 0px 0px 0px 10px"
          }
          margin={"auto"}
          marginTop={"50px"}
          marginBottom={"50px"}
          borderRadius={"10px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          padding={"50px"}
          width={"90%"}
          bgGradient={`linear(to-r, #660027, #C00029)`}
          color={"white"}
          minH={"400px"}
        >
          <Text fontSize={"20px"}>
            {loading ? (
              <Loading />
            ) : message ? (
              message
            ) : (
              welcomingQuotes[quoteIndex]
            )}
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
