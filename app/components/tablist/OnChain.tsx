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
import { TonConnectButton, useTonConnectModal } from "@tonconnect/ui-react";
useTonConnectModal
import { useTonConnect } from "@/hooks/useTonConnect";



const OnChain = () => {
 
  const {open} = useTonConnectModal()
  const {connected} = useTonConnect()
  
  // Initial user balance
  
  const earnRewards = 250;

  // Array containing content for boxes
  const boxes = [{ id: 1, title: "Connect TON Wallet" }];

  // State for buttons
  const [buttonStates, setButtonStates] = useState("start".toUpperCase()) // Initialize all buttons to "start"

  //
  
  useEffect(()=>{
    if(connected){
       setButtonStates("claim".toUpperCase());
    }
  },[connected])

  const handleClaim = async ()=>{

  }





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
              buttonStates.toLowerCase() === "start"
                ? "#FFFFFF33"
                : connected
                ? "#32EAFF"
                : "#EAEAEA33"
            }
            color={
              buttonStates.toLowerCase() === "start"
                ? "#EAEAEA"
                : connected
                ? "#121212"
                : "#121212"
            }
            _hover={{
              bg:
                buttonStates.toLowerCase() === "start"
                  ? "#ffffff33"
                  : connected
                  ? "#32EAFF"
                  : "#EAEAEA33",
            }}
            onClick={!connected ? open : handleClaim}
            isDisabled={buttonStates === "done"} // Disable button if "done"
          >
            {buttonStates === "done" ? <FaRegCheckCircle /> : buttonStates}
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default OnChain;
