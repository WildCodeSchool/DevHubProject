import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import SignIn from "./pages/SignIn/SignIn";
import NotFound from "./pages/NotFound/NotFound";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="add-project" element={<AddProject />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/join-project" element={<JoinProject />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mailbox" element={<Mailbox />} />
          <Route path="/userprofile/:id" element={<UserProfile />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
