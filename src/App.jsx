// import React from 'react'
// import { Route, Routes, useLocation , HashRouter} from 'react-router-dom';
// import DocumentEditorPage from './Pages/DocumentEditorPage'
// import LandingPage from './Pages/LandingPage'
// import LandingNavbar from './Components/Common/LandingNavbar'
// import MainNav from './Components/Common/MainNav';
// import LoginPage from './Pages/LoginPage';
// import ProfilePage from './Pages/ProfilePage';
// import TasksAndGoalsPage from './Pages/TasksAndGoalsPage';
// import HomePage from './Pages/HomePage';
// import DocumentsPage from './Pages/DocumentsPage';
// import './App.css'

// const App = () => {
  
//   const location = useLocation();
//   const isLandingPage = location.pathname === '/';
  
//   return (
//     <div >
//     {isLandingPage ? <LandingNavbar /> : <MainNav />}
//     <Routes>
//       <Route exact path="/" element={<LandingPage />} />
//       <Route path="/Editor" element={<DocumentEditorPage />} />
//       <Route path="/user/auth" element={<LoginPage />} />
//       <Route path="/profile" element={<ProfilePage />} />
//       <Route path="/tasks" element={<TasksAndGoalsPage />} />
//       <Route path="/home" element={<HomePage />} />
//       <Route path="/documents" element={<DocumentsPage />} />
//     </Routes>
//   </div>
//   )
// }
// export default App

import React, { useState } from "react";
import { Brain, Menu, X, Mail, Info } from "lucide-react";
import './app2.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [users, setUsers] = useState([
    { username: "user1", password: "pass1" },
    { username: "user2", password: "pass2" },
    { username: "user3", password: "pass3" },
    { username: "user4", password: "pass4" },
  ]);
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    const userExists = users.some(
      (user) => user.username === username && user.password === password
    );

    if (userExists) {
      setMessage(`Welcome, ${username}!`);
      setIsLoginOpen(false);
    } else {
      setMessage("Invalid credentials. Please try again.");
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (users.length >= 5) {
      setMessage("Signup limit reached. No more users can be added.");
      return;
    }

    const userExists = users.some((user) => user.username === username);

    if (userExists) {
      setMessage("Username already exists. Please choose another one.");
    } else {
      setUsers([...users, { username, password }]);
      setMessage("Signup successful! You can now log in.");
      setIsSignupOpen(false);
    }
  };

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="nav-brand">
          <Brain className="brand-icon" />
          <h1>MindScope</h1>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        <div className={`nav-links ${isMenuOpen ? "show" : ""}`}>
          <a href="#" className="active">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <div className="auth-buttons">
            <button className="login-btn" onClick={() => setIsLoginOpen(true)}>
              Log In
            </button>
            <button className="signup-btn" onClick={() => setIsSignupOpen(true)}>
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {isLoginOpen && (
        <div className="modal">
          <form className="auth-form" onSubmit={handleLogin}>
            <h2>Log In</h2>
            <input type="text" name="username" placeholder="Username" required />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <button type="submit">Log In</button>
            <button type="button" onClick={() => setIsLoginOpen(false)}>
              Close
            </button>
          </form>
        </div>
      )}

      {isSignupOpen && (
        <div className="modal">
          <form className="auth-form" onSubmit={handleSignup}>
            <h2>Sign Up</h2>
            <input type="text" name="username" placeholder="Username" required />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <button type="submit">Sign Up</button>
            <button type="button" onClick={() => setIsSignupOpen(false)}>
              Close
            </button>
          </form>
        </div>
      )}

      {message && <p className="message">{message}</p>}

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Understanding the Human Mind</h1>
            <p>
              Explore the fascinating world of human intelligence and
              consciousness.
            </p>
          </div>
        </section>

        <section className="features">
          <div className="feature-card">
            <h2>Neural Networks</h2>
            <p>
              The human brain contains approximately 86 billion neurons,
              forming complex networks that enable thought, memory, and
              consciousness.
            </p>
          </div>
          <div className="feature-card">
            <h2>Cognitive Functions</h2>
            <p>
              From problem-solving to emotional intelligence, discover how
              different parts of our brain work together to create our unique
              human experience.
            </p>
          </div>
          <div className="feature-card">
            <h2>Intelligence Types</h2>
            <p>
              Explore multiple forms of intelligence including logical,
              emotional, spatial, and creative thinking abilities.
            </p>
          </div>
        </section>

        <section id="about" className="about">
          <div className="section-header">
            <Info className="section-icon" />
            <h2>About Us</h2>
          </div>
          <p>
            We are dedicated to understanding and sharing knowledge about human
            intelligence and cognitive science. Our mission is to make complex
            neuroscience concepts accessible to everyone.
          </p>
        </section>

        <section id="contact" className="contact">
          <div className="section-header">
            <Mail className="section-icon" />
            <h2>Contact Us</h2>
          </div>
          <p>
            Have questions about human intelligence or want to learn more?
            Reach out to our team of experts.
          </p>
          <div className="contact-info">
            <p>Email: info@mindscope.org</p>
            <p>Phone: (555) 123-4567</p>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 MindScope. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
