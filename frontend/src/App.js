import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar'; // Assuming you have a Navbar component
import Home from './pages/Home'; // Home page component
import Projects from './pages/Projects'; // Home page component
import Login from './pages/Login'; // Home page component
import "./App.css"; // Import your CSS for styling

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/auth" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
