"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Carousel from "../components/Carousel";
import NavigationBar from "../components/NavigationBar";
import WeeklyCarousel from "../components/WeeklyCarousel";
import NewTab from "../components/tablist/NewTab";
import OnChain from "../components/tablist/OnChain";
import Socials from "../components/tablist/Socials";
import Academy from "../components/tablist/Academy";
import Ferns from "../components/tablist/Ferns";
import Farming from "../components/tablist/Farming";

const Earn = () => {
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
        gap={5}
        width="100%"
        justifyContent="center"
        overflow="visible"
        zIndex="1"
        py={4}
        pb={32}
      >
        <Text fontSize={"20px"} fontWeight={800} ml={5}>
          Earn
        </Text>
        <Carousel />

        <Text fontSize={"20px"} fontWeight={800} ml={5}>
          Weekly
        </Text>
        <WeeklyCarousel />

        <Tabs variant="unstyled">
          <TabList
            overflowX="scroll"
            css={{
              "&::-webkit-scrollbar": {
                display: "none", // Hides the scrollbar for a cleaner look
              },
            }}
          >
            <Tab
              fontSize={"17px"}
              color={"#EAEAEA33"}
              _selected={{ color: "#EAEAEA" }}
            >
              New
            </Tab>
            <Tab
              fontSize={"17px"}
              color={"#EAEAEA33"}
              _selected={{ color: "#EAEAEA" }}
            >
              OnChain
            </Tab>
            <Tab
              fontSize={"17px"}
              color={"#EAEAEA33"}
              _selected={{ color: "#EAEAEA" }}
            >
              Socials
            </Tab>
            <Tab
              fontSize={"17px"}
              color={"#EAEAEA33"}
              _selected={{ color: "#EAEAEA" }}
            >
              Academy
            </Tab>
            <Tab
              fontSize={"17px"}
              color={"#EAEAEA33"}
              _selected={{ color: "#EAEAEA" }}
            >
              Frens
            </Tab>
            <Tab
              fontSize={"17px"}
              color={"#EAEAEA33"}
              _selected={{ color: "#EAEAEA" }}
            >
              Farming
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <NewTab />
            </TabPanel>
            <TabPanel>
              <OnChain />
            </TabPanel>
            <TabPanel>
              <Socials />
            </TabPanel>
            <TabPanel>
              <Academy />
            </TabPanel>
            <TabPanel>
              <Ferns />
            </TabPanel>
            <TabPanel>
              <Farming />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
      <NavigationBar />
    </Box>
  );
};

export default Earn;
