import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Dashboard from './Dashboard';
import Devices from './Devices';
import Models from './Models';
import Workflows from './Workflows';
import Runtime from './Runtime';
import Admin from './Admin';
import About from './About';
import Help from './Help';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="app-header">
          <h1>Activity Monitoring</h1>
          <nav>
            <ul>
              <li><a href="/">Dashboard</a></li>
              <li><a href="/devices">Devices</a></li>
              <li><a href="/models">Models</a></li>
              <li><a href="/workflows">Workflows</a></li>
              <li><a href="/runtime">Runtime</a></li>
              <li><a href="/admin">Admin</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/help">Help</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/devices" element={<Devices />} />
            <Route path="/models" element={<Models />} />
            <Route path="/workflows" element={<Workflows />} />
            <Route path="/runtime" element={<Runtime />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/about" element={<About />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}


export default App;
