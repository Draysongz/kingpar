"use client";
import React from "react";
import { Box, Text, Image, Button, Flex, Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel, } from "@chakra-ui/react";
import { FaCaretRight } from "react-icons/fa";
import NavigationBar from "../components/NavigationBar";

const Points = () => {
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
        <Flex
          w={"100%"}
          p={"15px"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Text color={"#eaeaea"} fontSize={"15px"} fontWeight={800}>
            Points
          </Text>

          <Button w={'70px'} h={'38px'} fontSize={'15px'} borderRadius={'100px'} bg={'#FFFFFF33'} justifyContent={'center'} alignItems={'center'} color={'#eaeaea'}>
                $0
            </Button>
        </Flex>

        <Tabs variant="unstyled" 
         w={'90%'}>
          <TabList w={'100%'} borderRadius={'10px'} bg={'#ffffff33'}>
            <Tab  w={'50%'} borderRadius={'10px'} color={'#EAEAEA'} fontSize={'12px'} fontWeight={800} _selected={{bg: "#32EAFF", color: "#000000"}}>Balances</Tab>
            <Tab  w={'50%'} borderRadius={'10px'} color={'#EAEAEA'} fontSize={'12px'} fontWeight={800} _selected={{bg: "#32EAFF", color: "#000000"}}>History</Tab>
          </TabList>
          <TabPanels>
            <TabPanel display={'flex'} flexDirection={'column'} p={0} pt={5} gap={5} >
            <Flex w={'100%'} alignItems={'center'} bg={'#E1E1E11A'} h={'50px'} p={'15px 10px'} borderRadius={'10px'} justifyContent={'space-between'}>
            <Flex alignItems={'center'} gap={2}>
                <Image src="../Icons/ton.png" w={'20px'} borderRadius={'10px'}/>
                <Text fontSize={'12px'} fontWeight={500}>Earn more in Drop game, Tasks and Quests</Text>
            </Flex>
            <FaCaretRight />
        </Flex>

        <Box
            display={'flex'}
            borderRadius="md"
            boxShadow="sm"
            width="100%"
            h={"60px"}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <Flex gap={3} alignItems={'center'}>
            <Image src='../Icons/earnIcon.png' w={'30px'} />
            <Box>
            <Text fontSize={'15px'} fontWeight={600}>Kingpar Points</Text>
            <Text fontSize={'10px'}>+250KP</Text>
            </Box>
            </Flex>
            <Button height={'30px'} borderRadius={'100px'} fontSize={'10px'} alignItems={'center'} justifyContent={'center'} textAlign={'center'} bg={'#FFFFFF33'} color={'#32EAFF'}
            >
              Ready to claim
            </Button>
          </Box>
            </TabPanel>
            <TabPanel>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
      <NavigationBar />
    </Box>
  );
};
export default Points;
