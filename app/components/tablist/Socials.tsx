import React, { useState } from "react";
import { Box, Button, Text, Image, Flex } from "@chakra-ui/react";
import { FaRegCheckCircle } from "react-icons/fa";

const Socials = () => {
  // Initial user balance
  const [balance, setBalance] = useState(30600);
  const earnRewards = 250;

  // Array containing content for boxes
  const boxes = [
    { id: 1,  title: "Memepad on Telegram" },
    { id: 2,  title: "Boost Kingpar" },
    { id: 3,  title: "Follow Kingpar on Tiktok" },
    { id: 4,  title: "Backing from Binance Labs" },
    { id: 5,  title: "Follow Kingpar on Coinmarketcap" },
    { id: 6,  title: "Follow Kingpar CEO on IG" },
    { id: 7,  title: "Follow VP of Design on IG" },
    { id: 8,  title: "Join Kingpar Facebook" },
    { id: 9,  title: "Follow Kingpar on X" },
    { id: 10,  title: "Join Kingpar Discord" },
    { id: 11,  title: "Follow Kingpar on Youtube" },
    { id: 12,  title: "Follow Kingpar’s CEO on X" },
    { id: 13,  title: "Follow Kingpar’s CMO on X" },
    { id: 14,  title: "Follow Kingpar’s VP of Design on X" },
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

export default Socials;
