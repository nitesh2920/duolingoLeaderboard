"use client";

import { Box, Typography, Button, Skeleton } from "@mui/material";
import { useState } from "react";
import LeaderboardItem from "./LeaderboardItem";
import { mockUsers, currentUserId } from "@/data/mockUsers";

interface LeaderboardMainProps {
  selectedEmoji?: string;
}

export default function LeaderboardMain({ selectedEmoji }: LeaderboardMainProps) {
  const [hasStartedLesson, setHasStartedLesson] = useState(false);

  const renderBadge = (color: string, size: number, isActive: boolean, isLocked: boolean) => (
    <Box
      sx={{
        width: size,
        height: size * 1.2,
        bgcolor: color,
        borderRadius: size > 50 ? "16px 16px 32px 32px" : "12px 12px 24px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: isActive ? `0 4px 12px rgba(255,215,0,0.4)` : "none",
        borderBottom: `4px solid rgba(0,0,0,0.2)`,
        position: "relative",
        opacity: isLocked ? 0.7 : 1,
      }}
    >
      {isActive && (
        <span style={{ fontSize: "1.5rem" }}>🪶</span>
      )}
      {isLocked && (
        <span style={{ fontSize: "1.2rem", opacity: 0.5 }}>🔒</span>
      )}
    </Box>
  );

  return (
    <Box sx={{ width: "100%", pt: { xs: 2, md: 0 }, px: { xs: 2, md: 4 }, maxWidth: 640, mx: "auto" }}>
      
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "flex-end", gap: 2, mb: 4, height: 80 }}>
        {renderBadge("#B98053", 48, false, false)}
        {renderBadge("#C4D4D8", 48, false, false)}
        {renderBadge("#FFD13B", 64, true, false)}
        {renderBadge("#37464F", 48, false, true)}
        {renderBadge("#37464F", 48, false, true)}
      </Box>

      <Box textAlign="center" mb={4}>
        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: "text.primary" }}>
          Gold League
        </Typography>
        
        {!hasStartedLesson ? (
          <Box mt={2}>
            <Typography variant="body1" sx={{ color: "text.primary", mb: 3 }}>
              Complete a lesson to join this week's leaderboard
            </Typography>
            <Button
              variant="outlined"
              onClick={() => setHasStartedLesson(true)}
              sx={{
                color: "#1CB0F6",
                borderColor: "#1CB0F6",
                borderWidth: 2,
                borderRadius: 4,
                px: 4,
                py: 1,
                fontWeight: "bold",
                "&:hover": {
                  borderWidth: 2,
                  borderColor: "#1899D6",
                  bgcolor: "rgba(28, 176, 246, 0.1)",
                },
              }}
            >
              START A LESSON
            </Button>
          </Box>
        ) : (
          <>
            <Typography variant="body1" sx={{ color: "text.secondary", mb: 1 }}>
              Top 10 advance to the next league
            </Typography>
            <Typography variant="body2" sx={{ color: "primary.main", fontWeight: "bold" }}>
              6 days
            </Typography>
          </>
        )}
      </Box>

      <Box
        sx={{
          p: 0,
          bgcolor: "transparent",
        }}
      >
        {!hasStartedLesson ? (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3, opacity: 0.3, mt: 4 }}>
            {[...Array(5)].map((_, i) => (
              <Box key={i} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", px: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Skeleton variant="circular" width={24} height={24} sx={{ bgcolor: "grey.700" }} />
                  <Skeleton variant="circular" width={48} height={48} sx={{ bgcolor: "grey.700" }} />
                  <Skeleton variant="text" width={100} sx={{ fontSize: '1rem', bgcolor: "grey.700" }} />
                </Box>
                <Skeleton variant="text" width={40} sx={{ fontSize: '1rem', bgcolor: "grey.700" }} />
              </Box>
            ))}
          </Box>
        ) : (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 4 }}>
            {mockUsers.map((user, index) => {
              const rank = index + 1;
              const isCurrentUser = user.id === currentUserId;
              
              return (
                <LeaderboardItem
                  key={user.id}
                  user={user}
                  rank={rank}
                  isCurrentUser={isCurrentUser}
                  selectedEmoji={isCurrentUser ? selectedEmoji : undefined}
                />
              );
            })}
          </Box>
        )}
      </Box>
    </Box>
  );
}
