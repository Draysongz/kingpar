"use client";
import React, { useState, useEffect } from "react";
import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";
import NavigationBar from "../components/NavigationBar";
import { useUser } from "@/context/context";
const Home = () => {
 const [timer, setTimer] = useState(0); // Remaining time in seconds
 const [pointsEarned, setPointsEarned] = useState(0);
 const [buttonState, setButtonState] = useState("");
 const { user, setUser } = useUser();

 useEffect(() => {
   // Fetch farming state on load
   const fetchFarmingState = async () => {
     if (!user) return;

     try {
       const res = await fetch("/api/getFarmDeets", {
         method: "GET",
         headers: { userId: user.telegramId },
       });

       const data = await res.json();
       if (!res.ok) {
         throw new Error(data.message || "Failed to fetch farming state");
       }

       if (data.isFarming) {
         setTimer(data.remainingTime);
         setPointsEarned(data.pointsEarned);
         setButtonState("farming");
       } else {
        // Check if the user has farmed for the 7 hours
        if (data.pointsEarned > 0) {
          // User has points, so set button to "claim"
          setPointsEarned(data.pointsEarned)
          setButtonState("claim");
        } else {
          // User has not farmed in a while, reset farming state
          setTimer(0);
          setPointsEarned(0);
          setButtonState("start");
        }
      }
     } catch (error) {
       console.error(error);
     }
   };

   fetchFarmingState();
 }, [user]);

 useEffect(() => {
   if (buttonState === "farming" && timer > 0) {
     const interval = setInterval(() => {
       setTimer((prev) => Math.max(prev - 1, 0));
       setPointsEarned((prev) => prev + 0.001);
     }, 1000);

     return () => clearInterval(interval); // Cleanup
   }
 }, [buttonState, timer]);

 const handleStartFarming = async () => {
   try {
     const res = await fetch("/api/farming", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({ userId: user?.telegramId, isClaiming: false }),
     });

     const data = await res.json();
     if (!res.ok) {
       throw new Error(data.message || "Failed to start farming");
     }

     setTimer(7 * 60 * 60); // 7 hours in seconds
     setPointsEarned(0);
     setButtonState("farming");
   } catch (error) {
     console.error(error);
   }
 };

 const handleClaim = async () => {
   try {
     const res = await fetch("/api/farming", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({ userId: user?.telegramId, isClaiming: true }),
     });

     const data = await res.json();
     if (!res.ok) {
       throw new Error(data.message || "Failed to claim points");
     }

     setUser(data.user); // Update user in context
     setTimer(0);
     setPointsEarned(0);
     setButtonState("start");
   } catch (error) {
     console.error(error);
   }
 };

 const formatTime = (seconds: number) => {
   const hrs = Math.round(Math.floor(seconds / 3600));
   const mins = Math.round(Math.floor((seconds % 3600) / 60));
   const secs = Math.round(seconds % 60);
   return `${hrs}h ${mins}m ${secs}s`;
 };
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      bgImage={"linear-gradient(rgb(44, 41, 59), rgb(4, 4, 4) 60%, rgb(44, 41, 59) 85%)"}
      bgRepeat={"no-repeat"}
      bgPosition={"center"}
      bgSize={"cover"}
      width={"100vw"}
      height={"100vh"}
      alignItems={"center"}
      textColor={"white"}
      overflow={"hidden"}
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
        w={"100%"}
        alignItems={"center"}
        py={4}
        h={"88vh"}
        justifyContent={"space-between"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={2}
          alignItems={"center"}
          justifyContent={"center"}
          mt={10}
        >
          <Image
            borderRadius={"55%"}
            src={user ? user.photoUrl : "../Icons/profile.png"}
          />
          <Text color={"#ffffff"} fontSize={"24px"} fontFamily={'StretchPro'} fontWeight={400}>
            {user && user.username}
          </Text>
          <Text
            fontSize={"40px"}
            color={"#ffffff"}
            fontFamily={'StretchPro'}
            fontWeight={400}
          >
            K {user && user.points}
          </Text>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={2}
          alignItems={"center"}
          justifyContent={"center"}
          w={"100%"}
          fontFamily={'body'}
        >
          {buttonState === "claim" && (
            <Button
              w={"60%"}
              h={"60px"}
              borderRadius={"10px"}
              p={"15px 10px"}
              bg={"#297977"}
              color={"#EAEAEA"}
              alignItems={"center"}
              justifyContent={"center"}
              textAlign={"center"}
              gap={2}
              onClick={handleClaim}
            >
              <Text fontSize={"20px"} fontWeight={800}>
                Claim
              </Text>
              <Text fontSize={"10px"} fontWeight={500}>
                {pointsEarned.toFixed(2)}KP
              </Text>
            </Button>
          )}
          {buttonState === "start" && (
            <Button
              w={"60%"}
              h={"60px"}
              borderRadius={"10px"}
              p={"15px 10px"}
              bg={"#E1E1E1"}
              color={"#001100"}
              alignItems={"center"}
              justifyContent={"center"}
              textAlign={"center"}
              gap={2}
              onClick={handleStartFarming}
            >
              <Image src="../Icons/thunder.png" />
              <Text fontSize={"20px"} fontWeight={800}>
                Start Farming
              </Text>
            </Button>
          )}
          {buttonState === "farming" && (
            <Button
              display={"flex"}
              isDisabled
              w={"60%"}
              h={"60px"}
              borderRadius={"10px"}
              p={"15px 15px"}
              bg={"#E1E1E133"}
              color={"#EAEAEA"}
              alignItems={"center"}
              justifyContent={"space-between"}
              textAlign={"center"}
            >
              <Flex
                alignItems={"center"}
                justifyContent={""}
                flex={1}
                gap={2}
              >
                <Image src="../Icons/thunder.png" w={"16px"} />
                <Text fontSize={"20px"} fontWeight={800} mt={-1}>
                  Farming
                </Text>
                {/* <Text textAlign={"center"}>{pointsEarned.toFixed(3)}</Text> */}
              </Flex>

              <Text fontSize={"10px"} textAlign={"left"}>
                {formatTime(timer)}
              </Text>
            </Button>
          )}
        </Box>
      </Flex>
      <NavigationBar />
    </Box>
  );
};

export default Home;
