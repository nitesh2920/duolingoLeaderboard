import { Box, Typography, Avatar } from "@mui/material";
import { User } from "@/types/leaderboard";

interface LeaderboardItemProps {
  user: User;
  rank: number;
  isCurrentUser: boolean;
  selectedEmoji?: string; // Phase 4 feature
}

export default function LeaderboardItem({ user, rank, isCurrentUser, selectedEmoji }: LeaderboardItemProps) {
  // Rank colors
  const getRankColor = (r: number) => {
    if (r === 1) return "#FFD13B"; // Gold
    if (r === 2) return "#C4D4D8"; // Silver
    if (r === 3) return "#B98053"; // Bronze
    return "text.secondary"; // Default
  };

  const getRankStyle = (r: number) => {
    if (r <= 3) {
      return {
        color: getRankColor(r),
        fontWeight: "bold",
        fontSize: "1.2rem",
      };
    }
    return {
      color: "text.secondary",
      fontWeight: "bold",
      fontSize: "1rem",
    };
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        p: 2,
        borderRadius: 4,
        bgcolor: isCurrentUser ? "rgba(255,255,255,0.1)" : "transparent",
        "&:hover": {
          bgcolor: isCurrentUser ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.05)",
        },
        transition: "background-color 0.2s ease",
        mb: 1,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 2, md: 3 } }}>
        <Typography sx={{ width: 24, textAlign: "center", ...getRankStyle(rank) }}>
          {rank}
        </Typography>
        
        <Box sx={{ position: "relative" }}>
          <Avatar 
            src={user.avatarUrl} 
            sx={{ width: 48, height: 48, bgcolor: "grey.700", fontWeight: "bold" }} 
            alt={user.username} 
          >
            {user.username.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase()}
          </Avatar>
          {selectedEmoji && isCurrentUser && (
            <Box
              sx={{
                position: "absolute",
                top: -8,
                right: -8,
                bgcolor: "background.paper",
                borderRadius: "50%",
                width: 24,
                height: 24,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
                border: "2px solid #1E293B",
              }}
            >
              {selectedEmoji}
            </Box>
          )}
        </Box>

        <Typography 
          variant="body1" 
          fontWeight="bold" 
          sx={{ color: isCurrentUser ? "text.primary" : "text.primary" }}
        >
          {user.username} {isCurrentUser && "(You)"}
        </Typography>
      </Box>

      <Typography variant="body2" sx={{ color: "text.secondary", fontWeight: "bold" }}>
        {user.xp} XP
      </Typography>
    </Box>
  );
}
