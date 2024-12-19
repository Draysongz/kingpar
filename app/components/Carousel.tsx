import React, { useState } from "react";
import {
  Box,
  Text,
  Flex,
  Image,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

const Carousel = () => {
    const [balance, setBalance] = useState(30600);
    const [claimPoints, setClaimPoints] =useState(30.23);

    const handleClaim = () => {
        setBalance(balance + claimPoints);
      };


  // Array containing slide data
  const slides = [
    {
      id: 1,
      title: "MemeFi Quest Round 2",
      prize: "599",
      imagePath: "../Icons/memefi.png",
      taskDone: "0",
      drawerContent: [
        {
          id: 1,
          imagePath: "../Icons/memefi.png",
          title: "Join MemeFi on TG",
          linkPath: "",
        },
        {
          id: 2,
          imagePath: "../Icons/memefi.png",
          title: "Join MemeFi on X",
          linkPath: "",
        },
        {
          id: 3,
          imagePath: "../Icons/memefi.png",
          title: "Play MemeFi",
          linkPath: "",
        },
        {
          id: 4,
          imagePath: "../Icons/telegram.png",
          title: "Make a TON Transaction",
          linkPath: "",
        },
      ],
    },
    {
      id: 2,
      title: "Subscribe to Kingpar Telegram",
      prize: "200",
      imagePath: "../Icons/telegram.png",
      taskDone: "0",
    },
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      overflowX="scroll"
      width="90%"
      mx="auto"
      fontFamily={'body'}
      borderRadius="md"
      boxShadow="lg"
      css={{
        "&::-webkit-scrollbar": {
          display: "none", // Hides the scrollbar for a cleaner look
        },
      }}
    >
      {slides.map((slide) => (
        <Box
          key={slide.id}
          flex="0 0 95%"
          justifyContent={"space-evenly"}
          mr="10px"
          p={4}
          h={"183px"}
          bg="#EAEAEA33"
          borderRadius="20px"
          cursor={slide.id === 1 ? "pointer" : "default"}
        >
          <Image src={slide.imagePath} w={"54px"} mb={2} />
          <Text fontSize="18px" fontWeight={800}>
            {slide.title}
          </Text>
          <Text fontSize={"10px"} fontWeight={500} color={"#eaeaea"} mb={3}>
            +{slide.prize} KP
          </Text>
          <Flex w={"100%"} justifyContent={"space-between"}>
            <Button
              bg={"#121212"}
              w={"60px"}
              h={"30px"}
              borderRadius={"100px"}
              p={"5px"}
              fontFamily='StretchPro'
              color={"#EAEAEA"}
              fontSize={"10px"}
              onClick={slide.id === 1 ? onOpen : undefined}
              _hover={{ bg: "#121212" }}
            >
              Open
            </Button>
            <Flex
              w={"66px"}
              h={"34px"}
              borderRadius={"100px"}
              border={"5px solid #121212"}
              fontFamily="StretchPro"
              justifyContent={"center"}
              p={'5px'}
              alignItems={"center"}
            >
              <Text fontSize={"10px"} fontWeight={400} color={"#EAEAEA"}>
                {" "}
                {slide.taskDone}/4
              </Text>
            </Flex>
          </Flex>
        </Box>
      ))}
      {/*  */}

      <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay backdropFilter="blur(10px)" bg="transparent" />
        <DrawerContent bg={"#000000"} alignItems={"center"} borderTopRadius={'30px'} py={'20px'}>
          <DrawerHeader fontSize={"20px"} fontWeight={800} color={"#eaeaea"}>
            MemeFi Quest Round 2 - 0/4
          </DrawerHeader>
          <DrawerBody display={"flex"} flexDirection={"column"} gap={2} fontFamily={'body'}>
            <Image src="../Background/memefiBanner.png" />
            <Text
              fontSize={"13px"}
              fontWeight={500}
              color={"#eaeaea"}
              textAlign={"center"}
            >
              Join MemeFi an discover newest features, create SUI wallet in
              MemeFi within 3 days and share 1% airdrop allocation rserved for
              Kingpar Usrs. You will be eligible only if you ar e among users
              who completed Round 1
            </Text>
            <Flex direction={"column"} gap={3}>
              {slides[0].drawerContent?.map((box) => (
                <Flex
                  key={box.id}
                  w={"100%"}
                  h={"55px"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Flex alignItems={"center"} gap={3}>
                    <Image src={box.imagePath} w={"35px"} />
                    <Text fontSize={'15px'} fontWeight={600} color={"#eaeaea"}>{box.title}</Text>
                  </Flex>
                  <Button
                    bg={"#ffffff"}
                    fontFamily='StretchPro'
                    borderRadius={'100px'}
                    w={"57px"}
                    h={"30px"}
                    fontSize={'10px'}
                    fontWeight={400}
                    _hover={{ bg: "#ffffff" }}
                  >
                    Start
                  </Button>
                </Flex>
              ))}
            </Flex>
            <Button
              isDisabled
              w={"60%"}
              mx={'auto'}
              h={"42px"}
              borderRadius={"10px"}
              p={"15px 10px"}
              bg={"#297977"}
              color={"#EAEAEA"}
              alignItems={"center"}
              justifyContent={"center"}
              textAlign={"center"}
              gap={2}
              _hover={{bg: "#297977"}}
            >
              <Text fontFamily='StretchPro' fontSize={"10px"} fontWeight={400}>
                Claim
              </Text>
              <Text fontSize={"10px"} fontWeight={500} lineHeight={'11.72px'}>
                {claimPoints}KP
              </Text>
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Carousel;
