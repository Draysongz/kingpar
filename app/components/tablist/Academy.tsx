import React, { useState } from "react";
import { Box, Button, Text, Image, Flex } from "@chakra-ui/react";
import { FaRegCheckCircle } from "react-icons/fa";

const Academy = () => {
  // Initial user balance
  const [balance, setBalance] = useState(30600);
  const earnRewards = 250;

  // Array containing content for boxes
  const boxes = [
    { id: 1,  title: "Crypto Slang. Part 3" },
    { id: 2,  title: "Smart Contracts 101" },
    { id: 3,  title: "What’s Next for DeFi?" },
    { id: 4,  title: "What is Slippage?" },
    { id: 5,  title: "Understanding Gas Fees" },
    { id: 6,  title: "What’s Crypto DEX?" },
    { id: 7,  title: "Node Sales in Crypto" },
    { id: 8,  title: "Choosing a Crypto Exchange" },
    { id: 9,  title: "Crypto Slang. Part 2" },
    { id: 10,  title: "DeFi Risks: Key Insights" },
    { id: 11,  title: "Pumptober Special" },
  ];

  // State for buttons
  const [buttonStates, setButtonStates] = useState(
    boxes.map(() => "start") // Initialize all buttons to "start"
  );

  const handleButtonClick = (index: number) => {
    setButtonStates((prev) => {
      const newStates = [...prev];
      if (newStates[index] === "start") {
        newStates[index] = "claim"; // Change to "claim" after "start"
      } else if (newStates[index] === "claim") {
        setBalance((prevBalance) => prevBalance + earnRewards); // Add 50 points to balance
        newStates[index] = "done"; // Change to "done" after claiming
      }
      return newStates;
    });
  };

  return (
      <Box display={'grid'} w={'100%'} gap={4}>
        {boxes.map((box, index) => (
          <Box
            display={'flex'}
            key={box.id}
            borderRadius="md"
            p={4}
            boxShadow="sm"
            width="100%"
            h={"60px"}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <Flex gap={3} alignItems={'center'}>
            <Image src='../Icons/earnIcon.png' alt={`Box ${box.id}`} w={'30px'} />
            <Box>
            <Text fontSize={'15px'}>{box.title}</Text>
            <Text fontSize={'10px'}>+{earnRewards} KP</Text>
            </Box>
            </Flex>
            <Button
              width="57px" height={'30px'} borderRadius={'100px'} fontSize={'10px'}
              bg={
                buttonStates[index] === "start"
                  ? "#FFFFFF33"
                  : buttonStates[index] === "claim"
                  ? "#32EAFF"
                  : "#EAEAEA33"
              }
              color={
                buttonStates[index] === "start"
                  ? "#EAEAEA"
                  : buttonStates[index] === "claim"
                  ? "#121212"
                  : "#121212"
              }
              _hover={{ bg: buttonStates[index] === "start" ? "#ffffff33" : buttonStates[index] === "claim" ? "#32EAFF" : "#EAEAEA33"}}
              onClick={() => handleButtonClick(index)}
              isDisabled={buttonStates[index] === "done"} // Disable button if "done"
            >
              {buttonStates[index] === "done" ? (
                <FaRegCheckCircle />
              ) : (
                buttonStates[index].toUpperCase()
              )}
            </Button>
          </Box>
        ))}
      </Box>
  );
};

export default Academy;
