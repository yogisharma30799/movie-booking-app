import React from 'react';
import  { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShowDetailsPage from './pages/ShowDetailsPage';
import BookingFormPage from './pages/BookingFormPage';
import "./App.css"
const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route exact path="/" element={ <Home/>} />
          <Route path="/show/:showId" element={<ShowDetailsPage/>} />
          <Route path="/booking/:showId" element={<BookingFormPage/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
