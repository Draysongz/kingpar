import React, { useState } from "react";
import { Box, Button, Text, Image, Flex } from "@chakra-ui/react";
import { FaRegCheckCircle } from "react-icons/fa";

const Farming = () => {
  // Initial user balance
  const [balance, setBalance] = useState(30600);
  const farmPointsAccumulated = 2431;

  // Array containing content for boxes
  const boxes = [
    { id: 1,  limit: "20,000", earnRewards: 1111 },
    { id: 2,  limit: "10,000", earnRewards: 300 },
    { id: 3,  limit: "5,000", earnRewards: 200 },
    { id: 4,  limit: "1,000", earnRewards: 150 },
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
        setBalance((prevBalance) => prevBalance + boxes[index].earnRewards); // Add 50 points to balance
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
            <Text fontSize={'15px'} fontWeight={600}>Invite {box.limit} frens</Text>
            <Text fontSize={'10px'} fontWeight={500}> {farmPointsAccumulated} / {box.limit} , +{box.earnRewards} KP</Text>
            </Box>
            </Flex>
            
            <Button
              width="67px" height={'30px'} borderRadius={'100px'} fontSize={'10px'}
              fontFamily='StretchPro'
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
                  ? "#EAEAEA2"
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

export default Farming;
