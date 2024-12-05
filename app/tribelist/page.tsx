"use client";
import React, { useState, useEffect } from "react";
import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";
import Link from "next/link";
import { FaCaretRight } from "react-icons/fa6";
import NavigationBar from "../components/NavigationBar";

const TribeList = [
  {
    name: "kingles",
    tribePoints: "2,051,181 KP",
  },
  {
    name: "Coin | Kanal org",
    tribePoints: "2,051,181 KP",
  },
  {
    name: "idle nation |",
    tribePoints: "2,051,181 KP",
  },
  {
    name: "idle nation |",
    tribePoints: "2,051,181 KP",
  },
  {
    name: "Crypto Games & Airdrop",
    tribePoints: "2,051,181 KP",
  },
];

const Tribes = () => {
  return (
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
        justifyContent={"space-between"}
        zIndex="1"
        py={4}
        pb={32}
      >
    
          <Box display={"grid"} p={5} gap={5} w={"100%"}>
            <Flex alignItems={"center"} justifyContent={"space-between"}>
              <Text color={"#eaeaea"} fontSize={"15px"} fontWeight={800}>
                Find a tribe you like
              </Text>
              <Link href={""}>
                <Flex alignItems={"center"} gap={1}>
                  <Text fontSize={"12px"} fontWeight={600} color={"#eaeaea"}>
                    See all
                  </Text>
                  <FaCaretRight size={12} />
                </Flex>
              </Link>
            </Flex>

            <Box display={"grid"} gap={2} borderRadius={'10px'}> 
              {TribeList.map((tribes, index) => (
                <Flex
                  key={index}
                  py={3}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Flex alignItems={'center'} gap={2}>
                    <Image src="../Icons/earnIcon.png" />
                    <Box display={"grid"} gap={'1px'}>
                      <Text
                        fontSize={"15px"}
                        color={"#eaeaea"}
                        fontWeight={600}
                      >{tribes.name}</Text>
                      <Text
                        fontSize={"10px"}
                        color={"#eaeaea"}
                        fontWeight={500}
                      >{tribes.tribePoints}</Text>
                    </Box>
                  </Flex>
                  <FaCaretRight />
                </Flex>
              ))}
            </Box>
          </Box>
      </Flex>
      <NavigationBar />
    </Box>
  );
};

export default Tribes;
