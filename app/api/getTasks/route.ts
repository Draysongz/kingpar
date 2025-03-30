import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

interface TaskResponse {
  id: string;
  category: string; // TaskCategory
  title: string;
  description?: string | null; // Optional, allow null
  imagePath?: string | null;   // Optional, allow null
  rewards: number;
  taskUrl?: string | null;     // Optional, allow null
  status?: string | null;      // Optional, allow null
  claimed?: boolean;           // Additional field for user-specific progress
  completed?: boolean;         // New field to track if task is completed
}


export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json({ message: 'User ID is required' }, { status: 400 });
    }

    // Fetch all tasks
    const tasks = await prisma.task.findMany();

    // Fetch user's progress on tasks
    const userTasks = await prisma.userTask.findMany({
      where: { userId },
      include: {
        task: true,
      },
    });

    // Fetch completed tasks for this user
    const completedTasks = await prisma.completedTask.findMany({
      where: { userId },
    });

    // Create a set of completed task IDs for quick lookup
    const completedTaskIds = new Set(completedTasks.map((ct: { taskId: string }) => ct.taskId));

    // Map tasks to include progress, claim status, and completion status
    const tasksWithProgress: TaskResponse[] = tasks.map((task: { id: string; title: string; description?: string | null; imagePath?: string | null; rewards: number; taskUrl?: string | null; category: string; status?: string | null; }) => {
      const userTask = userTasks.find((ut: { taskId: string }) => ut.taskId === task.id);
      const isCompleted = completedTaskIds.has(task.id);
      
      return {
        id: task.id,
        title: task.title,
        description: task.description,
        imagePath: task.imagePath,
        rewards: task.rewards,
        taskUrl: task.taskUrl,
        category: task.category,
        status: task.status,
        claimed: userTask?.claimed || isCompleted, // Mark as claimed if either userTask is claimed or task is completed
        completed: isCompleted, // New field to track completion
      };
    });

    return NextResponse.json(tasksWithProgress);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
