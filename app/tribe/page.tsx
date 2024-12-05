"use client";
import React, { useState, useEffect } from "react";
import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";
import Link from "next/link";
import { FaCaretRight } from "react-icons/fa6";
import NavigationBar from "../components/NavigationBar";

const TribeList = [
  {
    name: "KingparVND",
    tribePoints: "111,994,752,910 KP",
  },
  {
    name: "Dan Cay Airdrop",
    tribePoints: "111,994,752,910 KP",
  },
  {
    name: "TON Station",
    tribePoints: "111,994,752,910 KP",
  },
];

const Tribe = () => {
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
        <Flex direction={"column"} alignItems={"center"} gap={5}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={3}
            alignItems={"center"}
            justifyContent={"center"}
            textAlign={"center"}
            mt={10}
          >
            <Image src="../Icons/frens.png" w={"100px"} />
            <Text
              w={"60%"}
              fontSize={"36px"}
              color={"#EAEAEA"}
              fontWeight={700}
              lineHeight={"42.19px"}
            >
              Start your tribe journey
            </Text>
            <Text
              color={"#eaeaea"}
              fontSize={"15px"}
              textAlign={"center"}
              w={"65%"}
              fontWeight={500}
              letterSpacing={"2px"}
            >
              Farm 10% faster as a new tribe member or owner.
            </Text>
            <Link href={'/tribelist'}>
            <Button
              w={"90px"}
              h={"30px"}
              borderRadius={"100px"}
              p={"10px"}
              bg={"#ffffff"}
              _hover={{ bg: "#ffffff" }}
              color={"#000000"}
              fontSize={"10px"}
            >
              Join tribe
            </Button>
            </Link>
          </Box>
          <Box display={"grid"} p={5} gap={5} w={"100%"}>
            <Flex alignItems={"center"} justifyContent={"space-between"}>
              <Text color={"#eaeaea"} fontSize={"15px"} fontWeight={800}>
                Top tribes
              </Text>
              <Link href={'/tribelist'}>
                <Flex alignItems={"center"} gap={1}>
                  <Text fontSize={"12px"} fontWeight={600} color={"#eaeaea"}>
                    See all
                  </Text>
                  <FaCaretRight size={12} />
                </Flex>
              </Link>
            </Flex>

            <Box display={"grid"} bg={"#FFFFFF1A"} gap={2} borderRadius={'10px'}> 
              {TribeList.map((tribes, index) => (
                <Flex
                  key={index}
                  p={5}
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
                  <Button
                    color={"#121212"}
                    fontSize={"10px"}
                    fontWeight={400}
                    bg={"#32eaff"}
                    _hover={{ bg: "#32eaff" }}
                    w={"60px"}
                    h={"30px"}
                    borderRadius={"100px"}
                    p={"10px"}
                  >
                    Claim
                  </Button>
                </Flex>
              ))}
            </Box>
          </Box>
        </Flex>
      </Flex>
      <NavigationBar />
    </Box>
  );
};

export default Tribe;
