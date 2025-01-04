"use client";
import React from "react";
import { Box, Text, Image, Button, Flex } from "@chakra-ui/react";

const Start = () => {
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
        justifyContent={"center"}
        zIndex="1"
        py={4}
        pb={32}
        h={'100%'}
      >
        <Image src="../Icons/logo.png"/>

        <Text fontSize={'40px'}  fontWeight={500} position={'absolute'} bottom={16}>KINGPAR</Text>
      </Flex>
    </Box>
  );
};
export default Start;
