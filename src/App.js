import React from 'react';
import SignUpLogIn from './pages/SignupLogin';
import { Route,Routes } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';

import './App.css';
// import { useDispatch } from 'react-redux';
// import { loginStatus } from './redux/store/userLoginSlice';
function App() {
  // const dispatch = useDispatch();

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path="signup-login/*" element={<SignUpLogIn />} />
      </Routes>
    </div>
  );
}

export default App;
