"use client";
import React from "react";
import { Box, Text, Image, Button, Flex } from "@chakra-ui/react";
import { FaCaretDown } from "react-icons/fa";
import NavigationBar from "../components/NavigationBar";

const History = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      bgImage={"linear-gradient(rgb(44, 41, 59), rgb(4, 4, 4) 60%, rgb(44, 41, 59) 85%)"}
      fontFamily={'body'}
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
        gap={10}
        width="100%"
        alignItems="center"
        justifyContent={"space-between"}
        zIndex="1"
        py={4}
        pb={32}
      >
        <Flex w={'100%'} p={'15px'} alignItems={'center'} justifyContent={'space-between'}> 
            <Text color={'#eaeaea'} fontSize={'15px'} fontWeight={800}>History</Text>

            <Flex alignItems={'center'}
        justifyContent={'center'} gap={3} bg={'#FFFFFF1A'} p={'10px'} borderRadius={'100px'} w={'139px'}>
            <Image src="../Icons/ton.png" w={'20px'} borderRadius={'10px'}/>
            <Text color={'#eaeaea'} fontSize={'12px'} fontWeight={800}>UQX...a09</Text>

            <FaCaretDown />
        </Flex>
        </Flex>
      </Flex>
      <NavigationBar />
    </Box>
  );
};
export default History;
