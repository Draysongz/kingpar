import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const userId = request.headers.get("userId");

    if (!userId) {
      return NextResponse.json({ message: 'User ID is required' }, { status: 400 });
    }

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

    const farmingDuration = 7 * 60 * 60 * 1000; // 7 hours in milliseconds

    if (currentFarmSession) {
      const elapsedTime = now.getTime() - currentFarmSession.getTime();
      const remainingTime = Math.max(farmingDuration - elapsedTime, 0);

      return NextResponse.json({
        isFarming: elapsedTime < farmingDuration,
        elapsedTime: elapsedTime / 1000, // in seconds
        remainingTime: remainingTime / 1000, // in seconds
        pointsEarned: (elapsedTime / 1000) * 0.001, // 0.001 per second
      });
    } else {
      return NextResponse.json({
        isFarming: false,
        elapsedTime: 0,
        remainingTime: 0,
        pointsEarned: 0,
      });
    }
  } catch (error) {
    console.error('Error fetching farming status:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
