"use client";

import { Box, Typography, Button, ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Link from "next/link";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#131F24",
      paper: "#1E293B",
    },
    primary: {
      main: "#58CC02",
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

export default function Home() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          p: 3,
        }}
      >
        <Typography variant="h3" fontWeight="bold" color="primary" gutterBottom>
          duolingo
        </Typography>
        <Typography variant="h6" color="text.secondary" mb={4} textAlign="center">
          Welcome to the ExamDuo Clone!
        </Typography>

        <Link href="/leaderboard" passHref>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              fontWeight: "bold",
              px: 6,
              py: 2,
              borderRadius: 4,
              boxShadow: "0 4px 0 #58a700",
              "&:hover": {
                bgcolor: "#61e002",
                boxShadow: "0 4px 0 #58a700",
              },
            }}
          >
            GO TO LEADERBOARD
          </Button>
        </Link>
      </Box>
    </ThemeProvider>
  );
}
