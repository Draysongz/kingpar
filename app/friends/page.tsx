"use client";
import React, { useState, useEffect } from "react";
import { Box, Flex, Image, Text, Button, Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure, } from "@chakra-ui/react";
import NavigationBar from "../components/NavigationBar";

const FriendList = [
  {
    id: 1,
    name: "K3nny GZ" ,
    friendPoints: 8946 ,
  },
  {
    id: 2,
    name: "Al3hemyc" ,
    friendPoints: 8946 ,
  },
]


const Frens = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [inviteEarnings, setInviteEarnings] = useState(0);
  const [buttonState, setButtonState] = useState("claim");
  const [timer, setTimer] = useState(8 * 60 * 60);
  const [FriendPoints, setFriendPoint] = useState(8946)

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    return `${hrs}h ${mins}m`;
  };

  //
  useEffect(() => {
    if (buttonState === "farming" && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(interval); // Cleanup interval
    }

    if (timer === 0) {
      setButtonState("claim");
    }
  }, [buttonState, timer]);

  //

  const handleClaim = () => {
    setInviteEarnings(inviteEarnings);
    setButtonState("farming");
  };

  const handleStartFarming = () => {
    setButtonState("farming");
  };

  useEffect (() => {
    const earnings = FriendList.reduce(
      (total, friend) => total + friend.friendPoints * 0.1, 0
    );
    setInviteEarnings(earnings);
  }, [FriendList])

    return(
        <Box
        display={"flex"}
        flexDirection={"column"}
        bgImage={"linear-gradient(rgb(44, 41, 59), rgb(4, 4, 4) 60%)"}
        bgRepeat={"no-repeat"}
        bgPosition={"center"}
        bgSize={"cover"}
        width={"100vw"}
        height={"100vh"}
        alignItems={"center"}
        textColor={"white"}
        overflowY={"scroll"}
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "../Background/background.png",
          zIndex: 0,
        }}
      >
        <Flex
        direction={"column"}
        gap={32}
        width="100%"
        alignItems="center"
        justifyContent={'space-between'}
        zIndex="1"
        py={4}
        pb={32}
      >
        <Flex direction={'column'} alignItems={'center'} gap={5}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={2}
          alignItems={"center"}
          justifyContent={"center"}
          mt={10}
        >
          <Image src="../Icons/frens.png" w={'100px'}/>
          <Text
            fontSize={"40px"}
            color={"#ffffff"}
            fontWeight={700}
            letterSpacing={"2.5px"}
          >
            Invite Frens
          </Text>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={4}
          alignItems={"center"}
          justifyContent={"center"}
          w={'90%'}
          border={'4px solid #EAEAEA33'}
          py={'30px'}
        >
            <Text fontSize={"40px"}
            color={"#ffffff"}
            fontWeight={700}
            letterSpacing={"2px"}>
                K {inviteEarnings.toFixed(2)}
            </Text>
          {buttonState === "claim" && (
          <Button 
          w={'60%'}
          h={'40px'}
          borderRadius={'100px'}
          p={'10px 10px'}
          bg={FriendList.length === 0 ? "#E1E1E133" : '#32EAFF'}
          color={'#121212'}
          alignItems={'center'}
          justifyContent={'center'}
          textAlign={'center'}
          gap={2}
          onClick={handleClaim}
          _hover={{bg: FriendList.length === 0 ? "#E1E1E133" : '#32EAFF'}}
          isDisabled={FriendList.length === 0}
          >
            <Text fontSize={'10px'} fontWeight={700}>
              Claim
            </Text>
          </Button>
          )}
          {buttonState === "farming" && (
          <Button 
          display={'flex'}
          isDisabled
          w={'60%'}
          h={'40px'}
          borderRadius={'100px'}
          p={'15px 10px'}
          bg={'#E1E1E133'}
          color={'#EAEAEA'}
          alignItems={'center'}
          justifyContent={'space-between'}
          textAlign={'center'}
          onClick={handleStartFarming}
          _hover={{bg: "#E1E1E133"}}
          >
            <Flex alignItems={'center'} justifyContent={'center'} flex={1} gap={2}>
            <Text fontSize={'15px'} fontWeight={800} mt={-1}>
              Claim in {formatTime(timer)}
            </Text>
            </Flex>
          </Button>
          )}
          
        </Box>
        <Text color={'#eaeaea'} fontSize={'15px'} textAlign={'center'} w={'81%'} fontWeight={500}>
        Score 10% from buddies +2.5% from their referrals.
        Get a ticket play pass for each fren.
        </Text>

        <Box width={"90%"} display={'grid'} gap={5}>
          {FriendList.map((friend) => (
            <Box
            display={'flex'}
            key={friend.id}
            borderRadius="md"
            p={4}
            boxShadow="sm"
            width="100%"
            h={"60px"}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <Flex gap={3} alignItems={'center'}>
            <Image src='../Icons/earnIcon.png' alt={`Box ${friend.id}`} w={'30px'} />
            <Box>
            <Text fontSize={'15px'}>{friend.name}</Text>
            <Text fontSize={'10px'}>0</Text>
            </Box>
            </Flex>
            <Button
              width="88px" height={'40px'} borderRadius={'100px'} fontSize={'10px'} bg={'#FFFFFF33'} color={'#EAEAEA'} p={'10px'}>
                8,946 KP
            </Button>
          </Box>
          )
          )}

        </Box>
        </Flex>

        <Button
        bg={'#E1E1E1'}
        w={'90%'}
        borderRadius={'10px'}
        h={'50px'}
        display={'flex'}
        gap={3}
        onClick={onOpen}>
          <Image src="../Icons/frens.png" w={'30px'}/>
          <Text color={'#001100'} fontSize={'15px'}>Invite a Fren</Text>
        </Button>
        </Flex>
        <NavigationBar />


        {/*  */}
        <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay backdropFilter="blur(10px)" />
        <DrawerContent bg={"#000000"} alignItems={"center"} borderTopRadius={'30px'} py={'20px'}>
          <DrawerHeader fontSize={"20px"} fontWeight={800} color={"#eaeaea"}>
            Invite a fren
          </DrawerHeader>
          <DrawerBody display={"flex"} flexDirection={"column"} gap={3}>
            <Flex w={'90vw'} h={'50vh'} bg={'#ffffff'}
            justifyContent={'center'} alignItems={'center'}>
              <Image src="../Icons/qr-code.png"/>
            </Flex>

            <Button
              w={"100%"}
              h={"40px"}
              borderRadius={"10px"}
              p={"15px 10px"}
              bg={"#ffffff"}
              color={"001100"}
              alignItems={"center"}
              justifyContent={"center"}
              textAlign={"center"}
              gap={2}
              _hover={{bg: "#ffffff"}}
            >
              <Text fontSize={"14px"} fontWeight={600}>
                Send
              </Text>
            </Button>
            <Button
              w={"100%"}
              h={"40px"}
              borderRadius={"10px"}
              p={"15px 10px"}
              bg={"transparent"}
              border={'1px solid #eaeaea'}
              color={"#EAEAEA"}
              alignItems={"center"}
              justifyContent={"center"}
              textAlign={"center"}
              gap={2}
              _hover={{bg: "transparent"}}
            >
              <Text fontSize={"14px"} fontWeight={600}>
                Copy Link
              </Text>
            </Button>
            <Button
              w={"100%"}
              h={"40px"}
              borderRadius={"10px"}
              p={"15px 10px"}
              bg={"#E1E1E11A"}
              color={"#EAEAEA"}
              alignItems={"center"}
              justifyContent={"center"}
              textAlign={"center"}
              gap={2}
              _hover={{bg: "#E1E1E11A"}}
              onClick={onClose}
            >
              <Text fontSize={"14px"} fontWeight={600}>
                Close
              </Text>
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
        </Box>
    )

}

export default Frens;