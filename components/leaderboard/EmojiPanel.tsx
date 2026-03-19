"use client";

import { Box, Typography, Avatar, Link } from "@mui/material";

interface EmojiPanelProps {
  selectedEmoji?: string;
  setSelectedEmoji: (emoji?: string) => void;
}

const EMOJIS = ["😎", "🎉", "💪", "👀", "🍿", "🇫🇷", "🦉", "💯", "💩", "🏆", "🌮", "🐱"];

export default function EmojiPanel({ selectedEmoji, setSelectedEmoji }: EmojiPanelProps) {
  return (
    <Box sx={{ width: "100%", p: 2, pt: { xs: 2, md: 0 } }}>
      
      {/* Top Profile Stats Bar */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 4, px: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <span>🇫🇷</span>
          <Typography fontWeight="bold">10</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "#FF9600" }}>
          <span>🔥</span>
          <Typography fontWeight="bold">2</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "#1CB0F6" }}>
          <span>💎</span>
          <Typography fontWeight="bold">869</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "#FF4B4B" }}>
          <span>❤️</span>
          <Typography fontWeight="bold">5</Typography>
        </Box>
      </Box>

      {/* Set Your Status Box */}
      <Box
        sx={{
          p: { xs: 3, lg: 2, xl: 3 },
          bgcolor: "transparent",
          borderRadius: 4,
          border: "2px solid #37464F",
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="subtitle1" fontWeight="bold" color="text.primary">
            Set your status
          </Typography>
          <Typography 
            variant="button" 
            color="#1CB0F6"  // Duolingo blue for buttons
            onClick={() => setSelectedEmoji(undefined)}
            sx={{ cursor: "pointer", fontSize: "0.75rem", fontWeight: "bold", "&:hover": { opacity: 0.8 } }}
          >
            CLEAR
          </Typography>
        </Box>

        {/* Centered Avatar Area */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 4, position: "relative", width: "fit-content", mx: "auto" }}>
          <Avatar 
            sx={{ width: 80, height: 80, bgcolor: "primary.dark", fontSize: "2rem", fontWeight: "bold" }} 
          >
            NT
          </Avatar>
          
          {/* Status Bubble */}
          <Box
            sx={{
              position: "absolute",
              top: -8,
              right: -8,
              bgcolor: "background.paper", // white-ish bubble
              borderRadius: "50%",
              width: 32,
              height: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1rem",
              border: "2px solid #131F24", // outline matching page bg
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              color: "#000",
              zIndex: 2,
            }}
          >
            {selectedEmoji || "➕"} {/* Placeholder or selected */}
          </Box>

          {/* Online Dot */}
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              right: 0,
              bgcolor: "#58CC02", // Online green
              borderRadius: "50%",
              width: 16,
              height: 16,
              border: "2px solid #131F24",
              zIndex: 2,
            }}
          />
        </Box>
        
        {/* Emoji Grid / Horizontal Scroll on Mobile */}
        <Box 
          sx={{ 
            display: { xs: "flex", md: "grid" }, 
            gridTemplateColumns: "repeat(6, minmax(0, 1fr))", 
            gap: { xs: 2, md: 0.5, lg: 1 }, 
            width: "100%",
            overflowX: { xs: "auto", md: "hidden" },
            pb: { xs: 2, md: 0 },
            "&::-webkit-scrollbar": { display: "none" }, // Optional: hide scrollbar for clean look
            msOverflowStyle: "none", // IE
            scrollbarWidth: "none", // Firefox
          }}
        >
          {EMOJIS.map((emoji) => (
            <Box
              key={emoji}
              onClick={() => setSelectedEmoji(emoji)}
              sx={{
                width: { xs: 56, md: "100%" },
                minWidth: { xs: 56, md: "auto" },
                aspectRatio: "1/1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: { xs: "1.8rem", md: "1.2rem", lg: "1.5rem" },
                bgcolor: "transparent",
                borderRadius: 2,
                cursor: "pointer",
                border: selectedEmoji === emoji ? "2px solid #1CB0F6" : "2px solid #37464F",
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.05)",
                },
                flexShrink: 0, // critical for horizontal scrolling items
                transition: "all 0.1s ease",
                overflow: "hidden",
              }}
            >
              {emoji}
            </Box>
          ))}
        </Box>
      </Box>

      {/* Footer Links (Hidden on Mobile, moved to bottom of page) */}
      <Box sx={{ mt: 4, px: 2, display: { xs: "none", md: "flex" }, flexWrap: "wrap", justifyContent: "center", gap: 2 }}>
        {["ABOUT", "BLOG", "STORE", "EFFICACY", "CAREERS", "INVESTORS", "TERMS", "PRIVACY"].map((link) => (
          <Link
            key={link}
            href="#"
            underline="none"
            sx={{
              color: "text.secondary",
              fontSize: "0.7rem",
              fontWeight: "bold",
              "&:hover": { color: "text.primary" },
            }}
          >
            {link}
          </Link>
        ))}
      </Box>
    </Box>
  );
}
