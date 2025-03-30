const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function completeTask(userId, taskId) {
  // Check if the task has already been completed by the user
  const existingCompletion = await prisma.completedTask.findUnique({
    where: {
      userId_taskId: {
        userId: userId,
        taskId: taskId,
      },
    },
  });

  if (existingCompletion) {
    throw new Error("Task has already been completed by this user.");
  }

  // If not completed, create a new completed task record
  const completedTask = await prisma.completedTask.create({
    data: {
      userId: userId,
      taskId: taskId,
    },
  });

  return completedTask;
}
