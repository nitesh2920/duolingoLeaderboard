"use client";

import { Box, Typography } from "@mui/material";

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        p: 2,
        borderRight: { md: "1px solid #374151" }, // Optional border for desktop
      }}
    >
      <Typography variant="h6" color="primary" fontWeight="bold">
        duolingo
      </Typography>
      {/* Placeholder navigation items */}
      {["LEARN", "PRACTICE", "LEADERBOARDS", "QUESTS", "SHOP", "PROFILE", "MORE"].map((item) => (
        <Typography
          key={item}
          variant="button"
          sx={{
            color: item === "LEADERBOARDS" ? "primary.main" : "text.secondary",
            cursor: "pointer",
            "&:hover": { color: "text.primary", bgcolor: "rgba(255,255,255,0.05)" },
            p: 1,
            borderRadius: 2,
          }}
        >
          {item}
        </Typography>
      ))}
    </Box>
  );
}
