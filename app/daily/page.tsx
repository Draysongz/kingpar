"use client";
import React, {useEffect, useState} from "react";
import { Box, Text, Flex, Image, Button, Spinner } from "@chakra-ui/react";
import Link from "next/link";
import { useUser } from "@/context/context";
import { useRouter } from "next/navigation";

const Daily = () => {
  const {user, setUser} = useUser()
  const [loading, setLoading] = useState(true);
  const [reward, setReward] = useState<number | null>(null);
  const [streak, setStreak] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
   const router = useRouter();


  useEffect(() => {
    if (user) {
      fetch("/api/checkIn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: user.telegramId }),
      })
        .then((res) => {
          if (!res.ok) {
            return res.json().then((data) => {
               if (data.message.toLowerCase() === "already checked in today!") {
                 // Redirect to home if the user has already checked in
                 router.push("/home");
               } else{
              throw new Error(data.message || "Failed to check in");
               }
              
            });
          }
          return res.json();
        })
        .then((data) => {
          console.log(data)
        
            setReward(data.reward);
            setStreak(data.user.checkInStreak);
            setUser(data.user); // Update the user context
          
          setLoading(false);
      })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, []);

 if (loading) {
   return (
     <Flex justify="center" align="center" h="100vh" direction={'column'}>
       <Spinner size="xl" color="white" />
     </Flex>
   );
 }



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
        width="100%"
        alignItems="center"
        justifyContent={"space-between"}
        zIndex="1"
        py={4}
        my={{ base: 5, sm: 10 }}
        h={"100%"}
      >
        <Flex direction={"column"} alignItems={"center"}>
          <Text color={"#32EAFF"} fontSize={"15px"} fontFamily={'body'} fontWeight={700}>
            YOUR DAILY REWARDS
          </Text>
          <Image src="../Icons/bolt.png" w={{ base: "100px", sm: "200px" }} />
          <Text fontSize={"40px"} fontFamily="StretchPro" fontWeight={400}>
            Day {streak}
          </Text>
        </Flex>

        <Flex direction={"column"} alignItems={"center"} gap={5} w={"100%"}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            p={5}
            gap={2}
            w={"90%"}
            border={"4px solid #EAEAEA33"}
          >
            <Text
              fontSize={{ base: "60px", sm: "96px" }}
              color={"#ffffff"}
              fontFamily='StretchPro'
              fontWeight={400}
              letterSpacing={"2px"}
              mt={-5}
            >
              K
            </Text>
            <Text fontSize={"32px"} fontFamily="StretchPro" fontWeight={400} mt={-5}>
              {reward}
            </Text>
            <Text fontSize={"15px"} fontWeight={500} color={'#eaeaea'} fontFamily={'body'}>
              Kingpar Points
            </Text>
          </Box>
          <Text
            color={"#eaeaea"}
            fontSize={"15px"}
            textAlign={"center"}
            w={"81%"}
            fontFamily={'body'}
            fontWeight={500}
          >
            Come back tomorrow for check-in day {streak ? streak + 1 : 1}
            <br /> Tip: Skipping a day resets your check-in.
          </Text>
          <Button
            w={"60%"}
            h={"40px"}
            fontSize={'10px'}
            borderRadius={'10px'}
            color={"#001100"}
            bg={"#E1E1E1"}
            _hover={{ bg: "#E1E1E1" }}
            fontFamily='StretchPro'
            fontWeight={400}
          >
            <Link href={"/home"}>Continue</Link>
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};
export default Daily;
