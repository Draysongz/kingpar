import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

interface CompleteTaskRequestBody {
  userId: string;
  taskId: string;
}

// Handler for completing and claiming tasks
export async function POST(request: NextRequest) {
  try {
    const { userId, taskId }: CompleteTaskRequestBody = await request.json();

    // Validate input
    if (!userId || !taskId) {
      return NextResponse.json({ message: 'User ID and Task ID are required' }, { status: 400 });
    }

    // Check if the task exists
    const task = await prisma.task.findUnique({ where: { id: taskId } });
    if (!task) {
      return NextResponse.json({ message: 'Task not found' }, { status: 404 });
    }

    // Check if the user has already completed this task
    const completedTask = await prisma.completedTask.findFirst({
      where: {
        userId: userId,
        taskId: taskId
      }
    });

    if (completedTask) {
      return NextResponse.json({ message: 'Task already completed' }, { status: 400 });
    }

    // Check if the user has a userTask record
    const userTask = await prisma.userTask.findFirst({
      where: { userId, taskId },
    });

    if (!userTask) {
      // Create a userTask record if it doesn't exist
      await prisma.userTask.create({
        data: {
          userId,
          taskId,
          claimed: true,
        },
      });
    } else if (userTask.claimed) {
      // Task reward has already been claimed
      return NextResponse.json({ message: 'Task already completed and claimed' }, { status: 400 });
    } else {
      // Update the existing userTask to claimed
      await prisma.userTask.update({
        where: { id: userTask.id },
        data: { claimed: true },
      });
    }

    // Create a record in CompletedTask to track completion
    await prisma.completedTask.create({
      data: {
        userId,
        taskId,
      },
    });

    // Update the user's rewards
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        points: {
          increment: task.rewards, // Increment user's points by the task's rewards
        },
      },
    });

    return NextResponse.json({
      message: 'Task completed and reward claimed successfully',
      task: userTask,
      user: updatedUser,
    });
  } catch (error) {
    console.error('Error completing task:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
