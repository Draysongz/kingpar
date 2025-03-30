import React, { useEffect, useState } from "react";
import { Box, Button, Text, Image, Flex } from "@chakra-ui/react";
import { FaRegCheckCircle } from "react-icons/fa";
import { TaskResponse } from "@/app/earn/page";
import { useUser } from "@/context/context";

const Socials = ({ task }: { task: TaskResponse[] }) => {
  const { user, setUser } = useUser();
  const [tasks, setTasks] = useState<TaskResponse[]>([]);

  useEffect(() => {
    if (task) {
      setTasks(task);
    }
  }, [task]);

  // Function to update the claimed status of a task
  const updateTaskClaimed = async (taskId: string) => {
    try {
      const response = await fetch(`/api/completeTasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: user!.id, taskId }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error claiming task:", errorData.message);
        return;
      }

      const { task: updatedTask, user: updatedUser } = await response.json();

      // Update the local tasks state to reflect the claimed task
      setTasks((prevTasks) =>
        prevTasks.map((t) =>
          t.id === taskId ? { ...t, claimed: true, completed: true } : t
        )
      );

      setUser(updatedUser);
    } catch (error) {
      console.error("Error claiming task:", error);
    }
  };

  // Determine the button label
  const getButtonLabel = (claimed: boolean) => {
    if (claimed) return <FaRegCheckCircle size={"15px"} />;
    return "Start";
  };

  // Button click handler
  const handleButtonClick = async (task: TaskResponse) => {
    if (!task.claimed && !task.completed) {
      await updateTaskClaimed(task.id);
    }
  };

  return (
    <Box display={"grid"} w={"100%"} gap={4} fontFamily={"body"}>
      {tasks && tasks.length > 0 ? (
        tasks.map((task) => (
          <Box
            display={"flex"}
            key={task.id}
            borderRadius="md"
            p={2}
            boxShadow="sm"
            width="100%"
            h={"60px"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Flex gap={3} alignItems={"center"}>
              <Image
                src={task.imagePath || "../Icons/earnIcon.png"}
                alt={task.title}
                w={"30px"}
              />
              <Box>
                <Text fontSize={"15px"} fontWeight={600}>
                  {task.title}
                </Text>
                <Text fontSize={"10px"} fontWeight={500}>
                  +{task.rewards} KP
                </Text>
              </Box>
            </Flex>
            <Button
              width="67px"
              height={"30px"}
              borderRadius={"100px"}
              fontSize={"10px"}
              fontWeight={400}
              bg={task.claimed || task.completed ? "#EAEAEA33" : "#32EAFF"}
              color={task.claimed || task.completed ? "#121212" : "#FFFFFF"}
              _hover={{
                bg: task.claimed || task.completed ? "#EAEAEA33" : "#32EAFF",
              }}
              onClick={() => handleButtonClick(task)}
              isDisabled={task.claimed || task.completed}
            >
              {getButtonLabel(task.claimed || !!task.completed)}
            </Button>
          </Box>
        ))
      ) : (
        <Text>No social tasks available.</Text>
      )}
    </Box>
  );
};

export default Socials;
