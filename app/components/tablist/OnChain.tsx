import React, { useEffect, useState } from "react";
import { Box, Button, Text, Image, Flex } from "@chakra-ui/react";
import { FaRegCheckCircle } from "react-icons/fa";
import { useTonConnectModal } from "@tonconnect/ui-react";
import { useTonConnect } from "@/hooks/useTonConnect";
import { TaskResponse } from "@/app/earn/page";
import { useUser } from "@/context/context";

const OnChain = ({ task }: { task: TaskResponse[] }) => {
  const { user, setUser } = useUser();
  const { open } = useTonConnectModal();
  const { connected } = useTonConnect();

  const [tasks, setTasks] = useState<TaskResponse[]>([]);

  useEffect(() => {
    setTasks(task);
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
    return connected ? "Claim" : "Start";
  };

  // Button click handler
  const handleButtonClick = async (task: TaskResponse) => {
    if (!connected) {
      open(); // Open wallet connection modal
      return;
    }

    if (!task.claimed && !task.completed) {
      // Claim the task
      await updateTaskClaimed(task.id);
    }
  };

  return (
    <Box display={"grid"} w={"100%"} gap={4} fontFamily={"body"}>
      {tasks &&
        tasks.map((box) => (
          <Box
            display={"flex"}
            key={box.id}
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
                src="../Icons/earnIcon.png"
                alt={`Box ${box.id}`}
                w={"30px"}
              />
              <Box>
                <Text fontSize={"15px"} fontWeight={600}>
                  {box.title}
                </Text>
                <Text fontSize={"10px"} fontWeight={500}>
                  +{box.rewards} KP
                </Text>
              </Box>
            </Flex>
            <Button
              width="67px"
              p={"10px"}
              height={"30px"}
              borderRadius={"100px"}
              fontSize={"10px"}
              fontWeight={400}
              bg={
                box.claimed || box.completed
                  ? "#EAEAEA33"
                  : connected
                  ? "#32EAFF"
                  : "#FFFFFF33"
              }
              color={
                box.claimed || box.completed
                  ? "#121212"
                  : connected
                  ? "#121212"
                  : "#EAEAEA"
              }
              _hover={{
                bg:
                  box.claimed || box.completed
                    ? "#EAEAEA33"
                    : connected
                    ? "#32EAFF"
                    : "#FFFFFF33",
              }}
              onClick={() => handleButtonClick(box)}
              isDisabled={box.claimed || box.completed} // Disable button if already claimed or completed
              _disabled={{
                background: "green",
              }}
            >
              {getButtonLabel(box.claimed || !!box.completed)}
            </Button>
          </Box>
        ))}
    </Box>
  );
};

export default OnChain;
