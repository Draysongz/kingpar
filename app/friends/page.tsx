"use client";
import React, { useState, useEffect } from "react";
import { Box, Flex, Image, Text, Button, Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure, useClipboard } from "@chakra-ui/react";
import NavigationBar from "../components/NavigationBar";
import { initUtils } from "@telegram-apps/sdk";
import { useUser } from "@/context/context";





const Frens = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
    const { user } = useUser();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [referredUsers, setReferredUsers] = useState<any[]>([]);
    const { onCopy,  hasCopied } = useClipboard(
      `https://t.me/kingpar_bot?start=${user?.telegramId}`
    );
    const handleInviteFriend = () => {
      const utils = initUtils();
      const inviteLink = `https://t.me/kingpar_bot?start=${user?.telegramId}`;
      const shareText = `Join me on this awesome Telegram mini app!`;
      const fullUrl = `https://t.me/share/url?url=${encodeURIComponent(
        inviteLink
      )}&text=${encodeURIComponent(shareText)}`;
      utils.openTelegramLink(fullUrl);
    };

    const fetchReferredUsers = async (userId: string) => {
      try {
        const response = await fetch(`/api/getReferredUsers?userId=${userId}`);

        if (!response.ok) {
          throw new Error("Failed to fetch referred users");
        }

        const data = await response.json();
        setReferredUsers(data.referredUsers);
        console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    useEffect(() => {
      if (user) {
        fetchReferredUsers(user.telegramId);
      }
    }, [user]);



  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    return `${hrs}h ${mins}m`;
  };




    return (
      <Box
        display={"flex"}
        flexDirection={"column"}
        bgImage={
          "linear-gradient(rgb(44, 41, 59), rgb(4, 4, 4) 60%, rgb(44, 41, 59) 85%)"
        }
        bgRepeat={"no-repeat"}
        bgPosition={"center"}
        bgSize={"cover"}
        width={"100vw"}
        height={"100vh"}
        alignItems={"center"}
        textColor={"white"}
        overflowY={"scroll"}
        fontFamily={"body"}
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
              gap={2}
              alignItems={"center"}
              justifyContent={"center"}
              mt={5}
            >
              <Image src="../Icons/logo.png" w={"150px"} />
              <Text fontSize={"27px"} color={"#ffffff"} fontWeight={700}>
                Invite Frens
              </Text>
            </Box>

            <Text
              color={"#eaeaea"}
              fontSize={"15px"}
              textAlign={"center"}
              w={"81%"}
              fontWeight={500}
            >
              Score 10% from buddies +2.5% from their referrals. Get a ticket
              play pass for each fren.
            </Text>

            <Box width={"90%"} display={"grid"} gap={5} fontWeight={500}>
              {referredUsers &&
                referredUsers.length > 0 &&
                referredUsers.map((user, index) => {
                  return (
                    <Box
                      display={"flex"}
                      key={user.id}
                      borderRadius="md"
                      p={4}
                      boxShadow="sm"
                      width="100%"
                      h={"60px"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <Flex gap={3} alignItems={"center"}>
                        <Image
                          src={
                            user && user.photoUrl
                              ? user.photoUrl
                              : "/Icons/profile.png"
                          }
                          alt={`user`}
                          w={"30px"}
                          borderRadius={"full"}
                        />
                        <Box>
                          <Text fontSize={"15px"}>{user.username}</Text>
                        </Box>
                      </Flex>
                      <Button
                        width="88px"
                        height={"40px"}
                        borderRadius={"100px"}
                        fontSize={"10px"}
                        fontWeight={500}
                        bg={"#FFFFFF33"}
                        color={"#EAEAEA"}
                        p={"10px"}
                        
                      >
                        {user.points} KP
                      </Button>
                    </Box>
                  );
                })}

              {referredUsers && referredUsers.length <= 0 && (
                <Box
                  width={"100%"}
                  h={"100%"}
                  bg={"#12161E"}
                  borderRadius={"10px"}
                  fontSize={"14px"}
                  fontWeight={500}
                  display={"flex"}
                  mx={"auto"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  color={"#f2f2f2"}
                  p={8}
                >
                  You haven’t invited anyone yet
                </Box>
              )}
            </Box>
          </Flex>

          <Button
            bg={"#E1E1E1"}
            w={"60%"}
            fontWeight={500}
            borderRadius={"10px"}
            h={"50px"}
            display={"flex"}
            gap={3}
            onClick={onOpen}
          >
            <Image src="../Icons/frens.png" w={"30px"} />
            <Text color={"#001100"} fontSize={"10px"}>
              Invite a Fren
            </Text>
          </Button>
        </Flex>
        <NavigationBar />

        {/*  */}
        <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay backdropFilter="blur(10px)" bg={"transparent"} />
          <DrawerContent
            bg={"#000000"}
            alignItems={"center"}
            borderTopRadius={"30px"}
            py={"20px"}
          >
            <DrawerHeader
              fontSize={"20px"}
              fontWeight={800}
              color={"#eaeaea"}
              fontFamily={"body"}
            >
              Invite a fren
            </DrawerHeader>
            <DrawerBody
              display={"flex"}
              flexDirection={"column"}
              gap={3}
              alignItems={"center"}
            >
              <Flex
                w={"90vw"}
                h={"50vh"}
                bg={"#ffffff"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Image src="../Icons/qr-code.png" />
              </Flex>

              <Button
                w={"60%"}
                h={"40px"}
                borderRadius={"10px"}
                p={"15px 10px"}
                bg={"#ffffff"}
                color={"001100"}
                alignItems={"center"}
                justifyContent={"center"}
                textAlign={"center"}
                gap={2}
                _hover={{ bg: "#ffffff" }}
                fontFamily="StretchPro"
                onClick={handleInviteFriend}
              >
                <Text fontSize={"10px"} fontWeight={400}>
                  Send
                </Text>
              </Button>
              <Button
                w={"60%"}
                h={"40px"}
                borderRadius={"10px"}
                p={"15px 10px"}
                bg={"transparent"}
                border={"1px solid #eaeaea"}
                color={"#EAEAEA"}
                alignItems={"center"}
                justifyContent={"center"}
                textAlign={"center"}
                gap={2}
                fontFamily="StretchPro"
                _hover={{ bg: "transparent" }}
                onClick={onCopy}
              >
                <Text fontSize={"10px"} fontWeight={400}>
                  {hasCopied ? "Copied" : "Copy Link"}
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
                fontFamily="StretchPro"
                _hover={{ bg: "#E1E1E11A" }}
                onClick={onClose}
              >
                <Text fontSize={"10px"} fontWeight={400}>
                  Close
                </Text>
              </Button>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    );

}

export default Frens;