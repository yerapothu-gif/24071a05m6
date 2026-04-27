import { useState } from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Destination from "./components/Destination";
import Login from "./components/Login";
import Booking from "./components/Booking";
import Payment from "./components/Payment";
import Footer from "./components/Footer";
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/destination" element={<Destination/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/booking" element={<Booking/>}/>
        <Route path="/payment" element={<Payment/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
