import React from 'react';
import SignUpLogIn from './pages/SignupLogin';
import Navbar from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="signup-login/*" element={<SignUpLogIn />} />
      </Routes>
    </div>
  );
}

export default App;
