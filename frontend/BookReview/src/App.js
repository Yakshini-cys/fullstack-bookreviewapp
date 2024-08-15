// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Browse from './pages/Browse';
import MyReviews from './pages/MyReviews';
import MyProfile from './pages/MyProfile';
import Recommendations from './pages/Recommendations';
import BookResult from './pages/BookResult';
import withAuth from './Config/withAuth';
const ProtectedHome = withAuth(Home);
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> 
        <Route path='/home' element={<ProtectedHome/>}/> 
        <Route path='/browse' element={<Browse/>}/>
        <Route path='/my-reviews' element={<MyReviews/>}/>
        <Route path='/profile' element={<MyProfile/>}/>
        <Route path='/recommendations' element={<Recommendations/>}/>
        <Route path="/book/:bookId" element={<BookResult />} />
      </Routes>
    </Router>
  );
};

export default App;
