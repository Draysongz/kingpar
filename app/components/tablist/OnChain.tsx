import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Text,
  Image,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
} from "@chakra-ui/react";
import { FaRegCheckCircle } from "react-icons/fa";
import { TonConnectButton } from "@tonconnect/ui-react";



const OnChain = () => {
 
  
  // Initial user balance
  const [balance, setBalance] = useState(30600);
  const earnRewards = 250;

  // Array containing content for boxes
  const boxes = [{ id: 1, title: "Connect TON Wallet" }];

  // State for buttons
  const [buttonStates, setButtonStates] = useState(
    boxes.map(() => "start") // Initialize all buttons to "start"
  );

  //
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBoxIndex, setCurrentBoxIndex] = useState<number | null>(null);

  const handleButtonClick = (index: number) => {
    if (buttonStates[index] === "start") {
      setCurrentBoxIndex(index); // Set the index of the current box
      setIsModalOpen(true); // Open the modal
    } else if (buttonStates[index] === "claim") {
      setBalance((prevBalance) => prevBalance + earnRewards); // Add rewards
      setButtonStates((prev) => {
        const newStates = [...prev];
        newStates[index] = "done"; // Change to "done"
        return newStates;
      });
    }
  };

  const handleModalConfirm = () => {
    if (currentBoxIndex !== null) {
      setButtonStates((prev) => {
        const newStates = [...prev];
        newStates[currentBoxIndex] = "claim"; // Change to "claim"
        return newStates;
      });
    }
    setIsModalOpen(false); // Close the modal
  };

  return (
    <Box display={"grid"} w={"100%"} gap={4}>
      {boxes.map((box, index) => (
        <Box
          display={"flex"}
          key={box.id}
          borderRadius="md"
          p={4}
          boxShadow="sm"
          width="100%"
          h={"60px"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Flex gap={3} alignItems={"center"}>
            <Image
              src="../Icons/earnIcon.png"
              alt={`Box ${box.id}`}
              w={"30px"}
            />
            <Box>
              <Text fontSize={"15px"}>{box.title}</Text>
              <Text fontSize={"10px"}>+{earnRewards} KP</Text>
            </Box>
          </Flex>
          <Button
            width="57px"
            height={"30px"}
            borderRadius={"100px"}
            fontSize={"10px"}
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
            _hover={{
              bg:
                buttonStates[index] === "start"
                  ? "#ffffff33"
                  : buttonStates[index] === "claim"
                  ? "#32EAFF"
                  : "#EAEAEA33",
            }}
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

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        isCentered
      >
        <ModalOverlay backdropFilter="blur(10px)" />
        <ModalContent
          w={"95%"}
          alignItems={"center"}
          bg={"black"}
          color={"#EAEAEA"}
          py={10}
          borderRadius={"20px"}
          boxShadow={"1px 1px 10px 5px #FFFFFF1A"}
        >
          <ModalBody
            display={"grid"}
            alignItems={"center"}
            textAlign={"center"}
            gap={10}
          >
            <Box display={"grid"} onClick={()=> setIsModalOpen(false)} >
              <TonConnectButton />
            </Box>
           

            
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default OnChain;
