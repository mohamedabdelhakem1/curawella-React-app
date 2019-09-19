import React from 'react';
import './App.css';
import NavBar from './components/header/header'
import DoctorInfo from './components/doctorInfo/doctorInfo'
import Booking from './components/booking/booking'
import Reviews from './components/reviews/reviews'
import Footer from './components/footer/footer';
// 
//       <DoctorInfo />
      // <Booking />
      // <Reviews />
      // <Footer />
function App() {
  return (
    <div className="App">
      <NavBar />
      <DoctorInfo />
      <Booking />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
