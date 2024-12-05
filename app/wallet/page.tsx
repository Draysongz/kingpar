"use client";
import React from "react";
import { Box, Text, Image, Button, Flex } from "@chakra-ui/react";
import { FaCaretDown } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa6";
import Link from "next/link";
import NavigationBar from "../components/NavigationBar";

const Wallet = () => {
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
        gap={10}
        width="100%"
        alignItems="center"
        justifyContent={"space-between"}
        zIndex="1"
        py={4}
        pb={32}
      >
        <Flex alignItems={'center'}
        justifyContent={'center'} gap={3}>
            <Image src="../Icons/ton.png" w={'20px'} borderRadius={'10px'}/>
            <Text color={'#eaeaea'} fontSize={'20px'} fontWeight={800}>UQX...a09</Text>

            <FaCaretDown />
        </Flex>

        <Text fontSize={'40px'} fontWeight={800}>K0</Text>

        <Flex alignItems={'center'} justifyContent={'space-evenly'} w={'100%'}>
            <Box display={'grid'} alignItems={'center'}
            justifyContent={'center'} textAlign={'center'} gap={2}>
                <Image src="../Icons/bybit.png" w={'50px'} h={'50px'}/>
                <Text fontSize={'12px'} fontWeight={600} color={'#eaeaea'}>Receive</Text>
            </Box>
            <Box display={'grid'} alignItems={'center'}
            justifyContent={'center'} textAlign={'center'} gap={2}>
                <Image src="../Icons/bitget.png" w={'50px'} h={'50px'} borderRadius={'10px'}/>
                <Text fontSize={'12px'} fontWeight={600} color={'#eaeaea'}>Send</Text>
            </Box>
            <Link href={'/history'}>
            <Box display={'grid'} alignItems={'center'}
            justifyContent={'center'} textAlign={'center'} gap={2}>
                <Image src="../Icons/token.png" w={'50px'} h={'50px'} borderRadius={'10px'}/>
                <Text fontSize={'12px'} fontWeight={600} color={'#eaeaea'}>History</Text>
            </Box>
            </Link>
            <Link href={'/points'}>
            <Box display={'grid'} alignItems={'center'}
            justifyContent={'center'} textAlign={'center'} gap={2}>
                <Image src="../Icons/ton.png" w={'50px'} h={'50px'} borderRadius={'10px'}/>
                <Text fontSize={'12px'} fontWeight={600} color={'#eaeaea'}>Points</Text>
            </Box>
            </Link>
        </Flex>

        <Flex w={'90%'} alignItems={'center'} bg={'#E1E1E11A'} h={'60px'} p={'15px 10px'} borderRadius={'10px'}>
            <Flex alignItems={'center'} gap={2}>
                <Image src="../Icons/ton.png" w={'20px'} borderRadius={'10px'}/>
                <Text fontSize={'12px'} fontWeight={500} w={'85%'}>Only TON tokens are shown. Other tokens can’t be spent here</Text>
            </Flex>
            <FaCaretRight />
        </Flex>
        <Flex w={'100%'} alignItems={'center'} h={'60px'} p={'15px 15px'} borderRadius={'10px'} justifyContent={'space-between'} mt={-4}>
            <Flex alignItems={'center'} gap={2}>
                <Image src="../Icons/ton.png" w={'35px'} borderRadius={'10px'}/>
                <Box display={'grid'}>
                <Text fontSize={'12px'} fontWeight={500}>
                    Ton Coin
                </Text>
                <Text fontSize={'10px'}>
                    0 TON
                </Text>
                </Box>
            </Flex>
            <Button w={'70px'} h={'38px'} fontSize={'15px'} borderRadius={'100px'} bg={'#FFFFFF33'} justifyContent={'center'} alignItems={'center'} color={'#eaeaea'}>
                $0
            </Button>
        </Flex>
      </Flex>
      <NavigationBar />
    </Box>
  );
};
export default Wallet;
