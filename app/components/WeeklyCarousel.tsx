import React, { useState, useEffect } from "react";
import { Box, Text, Flex, Button, Spinner } from "@chakra-ui/react";
import { useUser } from "@/context/context";
import { TaskResponse } from "@/app/earn/page";

const WeeklyCarousel = () => {
  const { user } = useUser();
  const [weeklyTasks, setWeeklyTasks] = useState<TaskResponse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeeklyTasks = async () => {
      if (!user) return;

      try {
        setLoading(true);
        const response = await fetch(`/api/getTasks?userId=${user.id}`);

        if (!response.ok) {
          throw new Error("Failed to fetch tasks");
        }

        const tasks = await response.json();

        // Get a mix of tasks from different categories for the weekly carousel
        // Limit to 3 tasks for the carousel
        const selectedTasks = [
          ...tasks.filter((task) => task.category === "ONCHAIN").slice(0, 1),
          ...tasks.filter((task) => task.category === "SOCIALS").slice(0, 1),
          ...tasks.filter((task) => task.category === "FRENS").slice(0, 1),
        ].slice(0, 3);

        setWeeklyTasks(selectedTasks);
      } catch (error) {
        console.error("Error fetching weekly tasks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeeklyTasks();
  }, [user]);

  return (
    <Flex
      overflowX="scroll"
      width="90%"
      mx="auto"
      borderRadius="md"
      boxShadow="lg"
      fontFamily={"body"}
      css={{
        "&::-webkit-scrollbar": {
          display: "none", // Hides the scrollbar for a cleaner look
        },
      }}
    >
      {loading ? (
        <Flex justify="center" width="100%" p={4}>
          <Spinner color="#EAEAEA" />
        </Flex>
      ) : weeklyTasks.length > 0 ? (
        weeklyTasks.map((task) => (
          <Box
            key={task.id}
            justifyContent={"space-evenly"}
            mr="10px"
            p={4}
            bg="#EAEAEA33"
            borderRadius="20px"
            cursor="pointer"
            minWidth="200px"
          >
            <Text fontSize="20px" fontWeight={800}>
              {task.title}
            </Text>
            <Text fontSize={"10px"} fontWeight={500} color={"#eaeaea"} mb={3}>
              +{task.rewards} KP
            </Text>
            <Flex w={"100%"} justifyContent={"space-between"}>
              <Button
                bg={"#121212"}
                w={"60px"}
                h={"30px"}
                borderRadius={"100px"}
                p={"10px"}
                color={"#EAEAEA"}
                fontSize={"10px"}
                _hover={{ bg: "#121212" }}
              >
                {task.claimed || task.completed ? "Done" : "Start"}
              </Button>
              <Flex
                w={"66px"}
                h={"34px"}
                borderRadius={"100px"}
                border={
                  task.claimed || task.completed ? "5px solid #121212" : ""
                }
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text fontSize={"10px"} fontWeight={400} color={"#EAEAEA"}>
                  {task.claimed || task.completed ? "1/1" : "0/1"}
                </Text>
              </Flex>
            </Flex>
          </Box>
        ))
      ) : (
        <Box p={4} textAlign="center" width="100%">
          <Text color="#EAEAEA">No weekly tasks available</Text>
        </Box>
      )}
    </Flex>
  );
};

export default WeeklyCarousel;
