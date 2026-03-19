import { User } from "@/types/leaderboard";

export const currentUserId = "user-1";

export const mockUsers: User[] = [
  { id: "user-2", username: "Vikram Singh", xp: 1250 },
  { id: "user-3", username: "Pooja Reddy", xp: 1100, avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026701d" },
  { id: "user-4", username: "Siddharth Verma", xp: 950 },
  { id: "user-8", username: "Rahul Sharma", xp: 820 },
  { id: "user-9", username: "Priya Patel", xp: 740, avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e39026702d" },
  { id: "user-10", username: "Amit Singh", xp: 680 },
  { id: "user-11", username: "Neha Gupta", xp: 512 },
  { id: "user-12", username: "Karan Desai", xp: 450, avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d" },
  { id: "user-13", username: "Anjali Reddy", xp: 320 },
  { id: "user-1", username: "Nitesh Tiwari", xp: 215 }, // current user at rank 10
];
