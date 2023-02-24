// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Home from "./pages/Home/Home";
import AddProject from "./pages/AddProject/AddProject";
import Calendar from "./pages/Calendar/Calendar";
import Contact from "./pages/Contact/Contact";
import Dashboard from "./pages/Dashboard/Dashboard";
import JoinProject from "./pages/JoinProject/JoinProject";
import Login from "./pages/Login/Login";
import Mailbox from "./pages/Mailbox/Mailbox";
import UserProfile from "./pages/UserProfile/UserProfile";
import Roadmap from "./pages/Roadmap/Roadmap";
import Register from "./pages/Register/Register";
import NotFound from "./pages/NotFound/NotFound";
import Progress from "./pages/Progress/Progress";
import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";

function App() {
  const [theme, colorMode] = useMode();
  // const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Home />} />
              <Route path="/add-project" element={<AddProject />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/join-project" element={<JoinProject />} />
              <Route path="/login" element={<Login />} />
              <Route path="/mailbox" element={<Mailbox />} />
              <Route path="/user-profile/:id" element={<UserProfile />} />
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="/register" element={<Register />} />
              <Route path="/progress" element={<Progress />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
