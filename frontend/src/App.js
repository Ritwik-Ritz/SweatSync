import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './Pages/home';
import Navbar from './components/navbar';
import SignUpForm from './Pages/signup';
import LoginForm from './Pages/login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignUpForm />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
