"use client";

import { useState } from "react";
import { Box, Drawer, IconButton, Typography, Grid } from "@mui/material";
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

// Hamburger Icon SVG to avoid extra dependencies safely
const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

export default function LeaderboardPage() {
  const [selectedEmoji, setSelectedEmoji] = useState<string | undefined>();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1, minHeight: "100vh", bgcolor: "background.default" }}>
        
        {/* Mobile Header */}
        <Box 
          sx={{ 
            display: { xs: "flex", lg: "none" }, 
            alignItems: "center", 
            p: 2, 
            borderBottom: "1px solid #37464F",
            bgcolor: "background.paper" 
          }}
        >
          <IconButton 
            color="inherit" 
            aria-label="open drawer" 
            edge="start" 
            onClick={() => setMobileOpen(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="primary" fontWeight="bold">
            duolingo
          </Typography>
        </Box>

        {/* Mobile Sidebar Drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          ModalProps={{ keepMounted: true }} // Better open performance on mobile
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 250, bgcolor: "background.paper" },
          }}
        >
          <Sidebar />
        </Drawer>

        <Grid container spacing={2} sx={{ minHeight: "100vh", maxWidth: 1200, mx: "auto", pt: { xs: 2, lg: 4 } }}>
          {/* Sidebar - hidden on mobile/tablet, visible on lg and up */}
          <Grid
            size={{ xs: 12, lg: 2.5 }}
            sx={{
              display: { xs: "none", lg: "block" },
              position: { lg: "sticky" },
              top: 0,
              height: { lg: "100vh" },
              overflowY: "auto",
            }}
          >
            <Sidebar />
          </Grid>

          {/* Main Content */}
          <Grid size={{ xs: 12, md: 8, lg: 6.5 }}>
            <LeaderboardMain selectedEmoji={selectedEmoji} />
          </Grid>

          {/* Right Panel - Emoji Status */}
          <Grid
            size={{ xs: 12, md: 4, lg: 3 }}
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
