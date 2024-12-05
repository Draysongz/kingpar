"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type UserData = {
  id: string;
  telegramId: string;
  username: string;
  photoUrl?: string; // Optional field
  level: number;
  points: number;
  referralCount: number;
  referredBy?: string; // Optional field
  profitPerHour: number;
  lastEarningsUpdate: Date;
  lastCheckIn?: Date; // Optional field
  currentFarmSession? : Date
  checkInStreak: number;
  createdAt: Date;
  updatedAt: Date;
};

type UserContextType = {
  user: UserData | null;
  setUser: (user: UserData) => void;
  clearUser: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserData | null>(null);

  const clearUser = () => setUser(null); // Function to clear user data

  return (
    <UserContext.Provider value={{ user, setUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
