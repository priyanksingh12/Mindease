import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import Journal from "./pages/Journal";
import Meditations from "./pages/Meditations";
import MoodDetection from "./pages/MoodDetection";
import Profile from "./pages/Profile";
import MiniQuizzes from "./pages/MiniQuizzes";
import Aboutus from "./pages/About";
import Result from "./pages/Result";
import GoogleCallback from "./pages/GoogleCallback";
import Profession from "./pages/Profession";
import Chat from "./pages/Chat";
import Dashboard from "./pages/Dashboard";

const RequireAuth = ({ children }) => {
  const accessToken = localStorage.getItem("accessToken");
  const location = useLocation();

  console.log("RequireAuth check:", { accessToken, path: location.pathname });

  if (!accessToken) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
};

const AppWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/landing" />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/google/callback" element={<GoogleCallback />} />

      <Route
        path="/landing"
        element={
          <>
            <Landing />
            <Footer />
          </>
        }
      />

      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <>
              <Navbar />
              <Dashboard />
              <Footer />
            </>
          </RequireAuth>
        }
      />

      <Route
        path="/profession"
        element={
          <RequireAuth>
            <>
              <Profession />
            </>
          </RequireAuth>
        }
      />

      <Route
        path="/chat"
        element={
          <RequireAuth>
            <>
              <Chat />
            </>
          </RequireAuth>
        }
      />

      <Route
        path="/journal"
        element={
          <RequireAuth>
            <>
              <Navbar />
              <Journal />
              <Footer />
            </>
          </RequireAuth>
        }
      />

      <Route
        path="/meditations"
        element={
          <RequireAuth>
            <>
              <Navbar />
              <Meditations />
              <Footer />
            </>
          </RequireAuth>
        }
      />

      <Route
        path="/mooddetection"
        element={
          <RequireAuth>
            <>
              <Navbar />
              <MoodDetection />
              <Footer />
            </>
          </RequireAuth>
        }
      />

      <Route
        path="/profile"
        element={
          <RequireAuth>
            <>
              <Profile />
            </>
          </RequireAuth>
        }
      />

      <Route
        path="/about"
        element={
          <>
            <Navbar />
            <Aboutus />
          </>
        }
      />

      <Route
        path="/miniques"
        element={
          <RequireAuth>
            <>
              <Navbar />
              <MiniQuizzes />
            </>
          </RequireAuth>
        }
      />

      <Route
        path="/result"
        element={
          <RequireAuth>
            <>
              <Navbar />
              <Result />
              <Footer />
            </>
          </RequireAuth>
        }
      />
    </Routes>
  );
};

const App = () => (
  <Router>
    <AppWrapper />
  </Router>
);

export default App;
