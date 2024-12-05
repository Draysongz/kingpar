import React from "react";
import { Box, Text, Flex, Button } from "@chakra-ui/react";

const WeeklyCarousel = () => {
  // Array containing slide data
  const slides = [
    {
      id: 1,
      title: "Proof of Activity",
      prize: "1000",
      taskDone: "",
    },
    {
      id: 2,
      title: "Earn for checking socials",
      prize: "0/450",
      taskDone: "0 / 4",
    },
    {
      id: 3,
      title: "Get the latest News",
      prize: "0/300",
      imagePath: "../Icons/telegram.png",
      taskDone: "0 / 3",
    },
  ];

  return (
    <Flex
    overflowX="scroll"
    width="90%"
    mx="auto"
    borderRadius="md"
    boxShadow="lg"
    css={{
      "&::-webkit-scrollbar": {
        display: "none", // Hides the scrollbar for a cleaner look
      },
    }}
    >
      {slides.map((slide) => (
        <Box
        key={slide.id}
        flex="0 0 95%"
        justifyContent={"space-evenly"}
        mr="10px"
        p={4}
        // h={"183px"}
        bg="#EAEAEA33"
        borderRadius="20px"
        cursor={slide.id === 1 ? "pointer" : "default"}
      >
        <Text fontSize="20px" fontWeight={800}>
          {slide.title}
        </Text>
        <Text fontSize={"10px"} fontWeight={500} color={"#eaeaea"} mb={3}>
          +{slide.prize} KP
        </Text>
        <Flex w={"100%"} justifyContent={"space-between"}>
          <Button
            bg={"#121212"}
            w={"60px"}
            h={"30px"}
            borderRadius={"100px"}
            p={"10px"}
            color={"#EAEAEA"}
            fontSize={"10px"}
            _hover={{ bg: "#121212" }}
          >
            Open
          </Button>
          <Flex
            w={"66px"}
            h={"34px"}
            borderRadius={"100px"}
            border={"5px solid #121212"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text fontSize={"10px"} fontWeight={400} color={"#EAEAEA"}>
              {" "}
              {slide.taskDone}
            </Text>
          </Flex>
        </Flex>
      </Box>
      ))}
    </Flex>
  );
};

export default WeeklyCarousel;
