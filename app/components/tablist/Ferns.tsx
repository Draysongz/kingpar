"use client";
import React, { useState, useEffect } from "react";
import { Box, Button, Text, Image, Flex } from "@chakra-ui/react";
import { FaRegCheckCircle } from "react-icons/fa";
import { TaskResponse } from "@/app/earn/page";
import { useUser } from "@/context/context";

const Ferns = ({ task }: { task: TaskResponse[] }) => {
  const { user, setUser } = useUser();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const [referredUsers, setReferredUsers] = useState<any[]>([]);

  // State for tasks
  const [tasks, setTasks] = useState<TaskResponse[]>([]);

  // Update tasks when `task` prop changes
  useEffect(() => {
    if (task) {
      setTasks(task);
    }
  }, [task]);
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

  // Function to update the claimed status of a task
  const updateTaskClaimed = async (taskId: string) => {
    try {
      const response = await fetch(`/api/completeTasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: user?.id, taskId }),
      });

      if (!response.ok) {
        throw new Error("Failed to claim task");
      }

      const { task: updatedTask, user: updatedUser } = await response.json();
      setTasks((prevTasks) =>
        prevTasks.map((t) => (t.id === updatedTask.id ? updatedTask : t))
      );
      setUser(updatedUser);
    } catch (error) {
      console.error("Error claiming task:", error);
    }
  };

  // Determine the button label
  const getButtonLabel = (claimed: boolean) => {
    if (claimed) return <FaRegCheckCircle />;
    return "Claim";
  };

   const canClaimTask = (task: TaskResponse) => {
     if (task.title === "Invite 10 frens") {
       return referredUsers.length >= 10; // Use the dynamic referral count
     } else if (task.title === "Invite 25 frens") {
       return referredUsers.length >= 10;
     } else if (task.title === "Invite 50 frens") {
       return referredUsers.length >= 10;
     } else if (task.title === "Invite 100 frens") {
       return referredUsers.length >= 10;
     }
     return true;
   };

  // Button click handler
  const handleButtonClick = async (task: TaskResponse) => {
    if (!task.claimed) {
      await updateTaskClaimed(task.id);
    }
  };

  return (
    <Box display={"grid"} w={"100%"} gap={4} fontFamily={'body'}>
      {tasks && tasks.length > 0 ? (
        tasks.map((task, index) => (
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
                <Text fontSize={"15px"} fontWeight={600}>{task.title}</Text>
                <Text fontSize={"10px"} fontWeight={500}>+{task.rewards} KP</Text>
              </Box>
            </Flex>
            <Button
              width="57px"
              height={"30px"}
              borderRadius={"100px"}
              fontSize={"10px"}
              fontWeight={400}
              bg={task.claimed ? "#EAEAEA33" : "#32EAFF"}
              color={task.claimed ? "#121212" : "#FFFFFF"}
              _hover={{
                bg: task.claimed ? "#EAEAEA33" : "#32EAFF",
              }}
              onClick={() => handleButtonClick(task)}
              isDisabled={task.claimed || !canClaimTask(task)}
            >
              {getButtonLabel(task.claimed)}
            </Button>
          </Box>
        ))
      ) : (
        <Text>No tasks available.</Text>
      )}
    </Box>
  );
};

export default Ferns;
