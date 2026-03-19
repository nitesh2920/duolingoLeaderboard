"use client";

import { useState } from "react";
import { Box, Grid } from "@mui/material";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Sidebar from "@/components/leaderboard/Sidebar";
import LeaderboardMain from "@/components/leaderboard/LeaderboardMain";
import EmojiPanel from "@/components/leaderboard/EmojiPanel";

// Duolingo-inspired dark theme for this specific page preview
// (In a real app, this would be global, but adding it here ensures it looks right based on requirements)
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#131F24", // Duolingo dark background approximation
      paper: "#1E293B",   // Slightly lighter for cards/panels
    },
    primary: {
      main: "#58CC02", // Duolingo green
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#AFAFAF",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default function LeaderboardPage() {
  const [selectedEmoji, setSelectedEmoji] = useState<string | undefined>();

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1, minHeight: "100vh", bgcolor: "background.default" }}>
        <Grid container spacing={2} sx={{ minHeight: "100vh", maxWidth: 1200, mx: "auto", pt: 4 }}>
          {/* Sidebar - hidden on mobile, visible on md and up */}
          <Grid
            size={{ xs: 12, md: 3, lg: 2.5 }}
            sx={{
              display: { xs: "none", md: "block" },
              position: { md: "sticky" },
              top: 0,
              height: { md: "100vh" },
              overflowY: "auto",
            }}
          >
            <Sidebar />
          </Grid>

          {/* Main Content */}
          <Grid size={{ xs: 12, md: 6, lg: 6.5 }}>
            <LeaderboardMain selectedEmoji={selectedEmoji} />
          </Grid>

          {/* Right Panel - Emoji Status */}
          <Grid
            size={{ xs: 12, md: 3, lg: 3 }}
            sx={{
              position: { md: "sticky" },
              top: 0,
              height: { md: "100vh" },
              overflowY: "auto",
            }}
          >
            <EmojiPanel selectedEmoji={selectedEmoji} setSelectedEmoji={setSelectedEmoji} />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
