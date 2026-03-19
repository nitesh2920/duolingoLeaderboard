import { User } from "@/types/leaderboard";

export const currentUserId = "user-1";

export const mockUsers: User[] = [
  { id: "user-8", username: "Rahul Sharma", xp: 12 },
  { id: "user-9", username: "Priya Patel", xp: 12 },
  { id: "user-10", username: "Amit Singh", xp: 10 },
  { id: "user-11", username: "Neha Gupta", xp: 9 },
  { id: "user-12", username: "Karan Desai", xp: 7, avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d" },
  { id: "user-13", username: "Anjali Reddy", xp: 6 },
  { id: "user-1", username: "Nitesh Tiwari", xp: 5 }, // current user
];
