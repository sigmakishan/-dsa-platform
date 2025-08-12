import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import DsaGeneratorPage from './DsaGeneratorPage.jsx';
import LoginPage from './LoginPage.jsx';
import SignupPage from './SignupPage.jsx';

function App() {
  return (
    <Router>
      <div>
        <nav className="bg-white shadow-md">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex justify-between">
              <div className="flex space-x-7">
                <div>
                  <Link to="/" className="flex items-center py-4 px-2">
                    <span className="font-semibold text-gray-700 text-lg">DSA Platform</span>
                  </Link>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Link to="/login" className="py-2 px-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition duration-300">Log In</Link>
                <Link to="/signup" className="py-2 px-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">Sign Up</Link>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<DsaGeneratorPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;