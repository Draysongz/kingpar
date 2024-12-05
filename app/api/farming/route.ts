import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { userId, isClaiming } = await request.json();

    if (!userId) {
      return NextResponse.json({ message: 'User ID is required' }, { status: 400 });
    }

    // Fetch the user
    const user = await prisma.user.findUnique({
      where: { telegramId: String(userId) },
    });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    const now = new Date();
    const currentFarmSession = user.currentFarmSession
      ? new Date(user.currentFarmSession)
      : null;

    // Farming session lasts 7 hours
    const farmingDuration = 7 * 60 * 60 * 1000; // 7 hours in milliseconds

    if (isClaiming) {
      // Check if farming session is complete
      const elapsedTime = now.getTime() - (currentFarmSession?.getTime() || 0);

      if (elapsedTime < farmingDuration) {
        return NextResponse.json(
          { message: 'Farming session not complete yet!' },
          { status: 400 }
        );
      }

      // Calculate earned points
      const earnedPoints = (elapsedTime / 1000) * 0.001; // 0.001 per second

      // Update user's balance and reset farming start
      const updatedUser = await prisma.user.update({
        where: { telegramId: String(userId) },
        data: {
          points: user.points + earnedPoints,
          currentFarmSession: null,
        },
      });

      return NextResponse.json({
        message: 'Points claimed successfully!',
        earnedPoints,
        user: updatedUser,
      });
    } else {
      // Start a new farming session
      if (user.currentFarmSession) {
        return NextResponse.json(
          { message: 'Farming session already in progress!' },
          { status: 400 }
        );
      }

      const updatedUser = await prisma.user.update({
        where: { telegramId: String(userId) },
        data: {
          currentFarmSession: now,
        },
      });

      return NextResponse.json({
        message: 'Farming started!',
        user: updatedUser,
      });
    }
  } catch (error) {
    console.error('Error during farming:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
