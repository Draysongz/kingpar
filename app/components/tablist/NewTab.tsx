import React, { useState } from "react";
import { Box, Button, Text, Image, Flex } from "@chakra-ui/react";
import { FaRegCheckCircle } from "react-icons/fa";

const NewTab = () => {
  // Initial user balance
  const [balance, setBalance] = useState(30600);
  const earnRewards = 250;

  // Array containing content for boxes
  const boxes = [
    { id: 1,  title: "Crypto Slang. Part 3" },
    { id: 2,  title: "Smart Contracts 101" },
    { id: 3,  title: "What’s next for DeFi?" },
  ];

  // State for buttons
  const [buttonStates, setButtonStates] = useState(
    boxes.map(() => "Start") // Initialize all buttons to "Start"
  );

  const handleButtonClick = (index: number) => {
    setButtonStates((prev) => {
      const newStates = [...prev];
      if (newStates[index] === "Start") {
        newStates[index] = "Claim"; // Change to "Claim" after "Start"
      } else if (newStates[index] === "Claim") {
        setBalance((prevBalance) => prevBalance + earnRewards); // Add 50 points to balance
        newStates[index] = "done"; // Change to "done" after Claiming
      }
      return newStates;
    });
  };

  return (
      <Box display={'grid'} w={'100%'} gap={4} fontFamily={'body'} color={'#eaeaea'}>
        {boxes.map((box, index) => (
          <Box
            display={'flex'}
            key={box.id}
            borderRadius="md"
            p={2}
            boxShadow="sm"
            width="100%"
            h={"60px"}
            alignItems={'center'}
            justifyContent={'space-between'}

          >
            <Flex gap={3} alignItems={'center'}>
            <Image src='../Icons/earnIcon.png' alt={`Box ${box.id}`} w={'30px'} />
            <Box>
            <Text fontSize={'15px'} fontWeight={800}>{box.title}</Text>
            <Text fontSize={'10px'} fontWeight={500}>+{earnRewards} KP</Text>
            </Box>
            </Flex>
            <Button
              width="67px" height={'30px'} borderRadius={'100px'} fontSize={'10px'} fontWeight={400}
              p={'10px'}
             fontFamily='StretchPro'
              bg={
                buttonStates[index] === "Start"
                  ? "#FFFFFF33"
                  : buttonStates[index] === "Claim"
                  ? "#32EAFF"
                  : "#EAEAEA33"
              }
              color={
                buttonStates[index] === "Start"
                  ? "#EAEAEA"
                  : buttonStates[index] === "Claim"
                  ? "#121212"
                  : "#121212"
              }
              _hover={{ bg: buttonStates[index] === "Start" ? "#ffffff33" : buttonStates[index] === "Claim" ? "#32EAFF" : "#EAEAEA33"}}
              onClick={() => handleButtonClick(index)}
              isDisabled={buttonStates[index] === "done"}
              _disabled={{ background: buttonStates[index]}} // Disable button if "done"
            >
              {buttonStates[index] === "done" ? (
                <FaRegCheckCircle size={"15px"}/>
              ) : (
                buttonStates[index]
              )}
            </Button>
          </Box>
        ))}
      </Box>
  );
};

export default NewTab;
