# Duolingo-inspired Leaderboard UI

A highly responsive, perfectly polished frontend clone of the Duolingo Leaderboard screen. This project leverages Next.js App Router and Material UI (MUI) to create a flawlessly responsive 3-column dashboard that adapts from desktop down to mobile with native-like interactive features.

## Project Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/nitesh2920/duolingoLeaderboard.git
   cd examduo
   ```
   
2. **Install dependencies:**
   Make sure you have Node.js installed. Run:
   ```bash
   npm install
   ```
  
3. **Run the development server:**
   ```bash
   npm run dev
   ```
   Navigate to `http://localhost:3000/leaderboard` to view the fully functional Leaderboard!

---

## Folder Structure

The project strictly follows a scalable, feature-driven architecture separating Next.js routes from feature components, types, and data logic:

```bash
examduo/
├── app/
│   ├── page.tsx                           # Simple landing/redirect page
│   └── leaderboard/
│       └── page.tsx                       # Main Leaderboard Layout View, manages Global State
├── components/
│   └── leaderboard/
│       ├── EmojiPanel.tsx                 # Right-side widget to select status emojis
│       ├── LeaderboardItem.tsx            # Individual row showing a user's rank & XP
│       ├── LeaderboardMain.tsx            # The main list container and Empty State
│       └── Sidebar.tsx                    # Left-side navigation menu placeholder
├── data/
│   └── mockUsers.ts                       # Static mock user data
├── types/
│   └── leaderboard.ts                     # TypeScript interfaces (User interface)
└── README.md                              # This documentation file
```

---

## Component Structure

The React component tree emphasizes **separation of concerns** and **lifted state**.

### 1. `LeaderboardPage` (`app/leaderboard/page.tsx`)
- **Role:** The Orchestrator / Shell. 
- **What it does:** Uses MUI's `Grid` to handle the heavy lifting for responsiveness (shifting from a 3-column view on Desktop, to 2-columns on Tablet, and a vertical stack on Mobile). It stores the globally needed `selectedEmoji` state. On mobile, it intercepts the sidebar to render inside a sliding `Drawer` hidden behind a hamburger sidebar button.

### 2. `LeaderboardMain`
- **Role:** The core content area.
- **What it does:** Displays the top "League Badges" (Shields). It maintains a local UI state (`hasStartedLesson`) to toggle between the interactive Skeleton Loading empty state ("START A LESSON") and the fully populated Mock Data List. It maps through `mockUsers.ts` and spins up individual `LeaderboardItem` components.

### 3. `LeaderboardItem`
- **Role:** Pure presentational component. 
- **What it does:** Calculates custom visuals based on the passed-in `rank` (rendering visually impressive Gold, Silver, and Bronze typography for the Top 3 slots). It extracts the user's initials if a profile picture isn't provided. If the row belongs to the current user, it floats the `selectedEmoji` prop inside a stylish status bubble above their avatar!

### 4. `EmojiPanel`
- **Role:** Interactive specific widget.
- **What it does:** Renders the user's top profile stats (fire streak, gems) and the current active avatar. Below it, an interactive CSS Grid maps out selectable emojis. Click logic connects directly to the `setSelectedEmoji` prop parsed down from the main `LeaderboardPage`. It is engineered to seamlessly turn into a fluid horizontally-scrolling row on small mobile screens to save screen real estate.
