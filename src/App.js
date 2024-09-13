import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, Navigate, Link, useNavigate, useLocation } from 'react-router-dom';

import Dashboard from './Dashboard';
import Devices from './Devices';
import Models from './Models';
import Workflows from './Workflows';
import Runtime from './Runtime';
import Admin from './Admin';
import About from './About';
import Help from './Help';
import NewWorkflow from './NewWorkflow';
import Login from './Login';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function NavBar({ onLogout }) {
  return (
    <nav>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/devices">Devices</Link></li>
        <li><Link to="/models">Models</Link></li>
        <li><Link to="/workflows">Workflows</Link></li>
        <li><Link to="/runtime">Runtime</Link></li>
        <li><Link to="/admin">Admin</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/help">Help</Link></li>
        <li><Button onClick={onLogout}>Logout</Button></li>
      </ul>
    </nav>
  );
}

function ProtectedRoute({ isLoggedIn, children, onLogout }) {
  const location = useLocation();

  if (!isLoggedIn) {
    // Redirect to login if not logged in
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <>
      <header className="app-header">
        <div className="logo"><img src="activity.svg" alt="logo"/>Activity <span>Monitoring</span></div>
        <NavBar onLogout={onLogout} />
      </header>
      {children}
    </>
  );
}

function AppContent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <Container fluid className="baseLayout">
      <Row>
        <Col>
          <div className="app">
            <main>
              <Routes>
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route path="/" element={<ProtectedRoute isLoggedIn={isLoggedIn} onLogout={handleLogout}><Navigate to="/dashboard" replace /></ProtectedRoute>} />
                <Route path="/dashboard" element={<ProtectedRoute isLoggedIn={isLoggedIn} onLogout={handleLogout}><Dashboard /></ProtectedRoute>} />
                <Route path="/devices" element={<ProtectedRoute isLoggedIn={isLoggedIn} onLogout={handleLogout}><Devices /></ProtectedRoute>} />
                <Route path="/models" element={<ProtectedRoute isLoggedIn={isLoggedIn} onLogout={handleLogout}><Models /></ProtectedRoute>} />
                <Route path="/workflows" element={<ProtectedRoute isLoggedIn={isLoggedIn} onLogout={handleLogout}><Workflows /></ProtectedRoute>} />
                <Route path="/runtime" element={<ProtectedRoute isLoggedIn={isLoggedIn} onLogout={handleLogout}><Runtime /></ProtectedRoute>} />
                <Route path="/admin" element={<ProtectedRoute isLoggedIn={isLoggedIn} onLogout={handleLogout}><Admin /></ProtectedRoute>} />
                <Route path="/about" element={<ProtectedRoute isLoggedIn={isLoggedIn} onLogout={handleLogout}><About /></ProtectedRoute>} />
                <Route path="/help" element={<ProtectedRoute isLoggedIn={isLoggedIn} onLogout={handleLogout}><Help /></ProtectedRoute>} />
                <Route path="/new-workflow" element={<ProtectedRoute isLoggedIn={isLoggedIn} onLogout={handleLogout}><NewWorkflow /></ProtectedRoute>} />
                <Route path="*" element={<Navigate to="/dashboard" replace />} />
              </Routes>
            </main>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;