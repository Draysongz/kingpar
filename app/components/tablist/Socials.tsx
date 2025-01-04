import React, { useState } from "react";
import { Box, Button, Text, Image, Flex } from "@chakra-ui/react";
import { FaRegCheckCircle } from "react-icons/fa";

const Socials = () => {
  // Initial user balance
  const [balance, setBalance] = useState(30600);
  const earnRewards = 250;

  // Array containing content for boxes
  const boxes = [
    { id: 1,  title: "Boost Kingpar" },
    { id: 2,  title: "Follow Kingpar on Tiktok" },
    { id: 3,  title: "Follow Kingpar on Coinmarketcap" },
    { id: 4,  title: "Follow Kingpar CEO on IG" },
    { id: 5,  title: "Join Kingpar Facebook" },
    { id: 6,  title: "Follow Kingpar on X" },
    { id: 7,  title: "Join Kingpar Discord" },
    { id: 8,  title: "Follow Kingpar on Youtube" },
    { id: 9,  title: "Follow Kingpar’s CEO on X" },
  ];

  // State for buttons
  const [buttonStates, setButtonStates] = useState(
    boxes.map(() => "Start") // Initialize all buttons to "start"
  );

  const handleButtonClick = (index: number) => {
    setButtonStates((prev) => {
      const newStates = [...prev];
      if (newStates[index] === "Start") {
        newStates[index] = "Claim"; // Change to "claim" after "start"
      } else if (newStates[index] === "Claim") {
        setBalance((prevBalance) => prevBalance + earnRewards); // Add 50 points to balance
        newStates[index] = "done"; // Change to "done" after claiming
      }
      return newStates;
    });
  };

  return (
      <Box display={'grid'} w={'100%'} gap={4} fontFamily={'body'}>
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
            <Text fontSize={'15px'} fontWeight={600}>{box.title}</Text>
            <Text fontSize={'10px'} fontWeight={500}>+{earnRewards} KP</Text>
            </Box>
            </Flex>
            <Button
              width="67px" height={'30px'} borderRadius={'100px'} fontSize={'10px'} 
              fontWeight={400}
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
              isDisabled={buttonStates[index] === "done"} // Disable button if "done"
              _disabled={{ background: buttonStates[index] === "done" }}
            >
              {buttonStates[index] === "done" ? (
                <FaRegCheckCircle size={'15px'} />
              ) : (
                buttonStates[index]
              )}
            </Button>
          </Box>
        ))}
      </Box>
  );
};

export default Socials;
