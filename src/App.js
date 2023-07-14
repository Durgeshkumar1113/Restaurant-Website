import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './App.css'
import { Footer } from './components/Footer';
import Feedback from './components/Feedback';
export const App = () => {
return (
  <BrowserRouter>
      <Navbar bg="black" data-bs-theme="dark" className="my-navbar fixed-top ">
      <h1 id='logo'>S</h1><h2 id='logo2'>ilver<br/>poon</h2>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" id='ram'>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" id='ram2'> About</Nav.Link>
            <Nav.Link as={Link} to="/contact" id='ram3'>Contact</Nav.Link>
            <Nav.Link as={Link} to="/feedback" id='ram4'>Feedback</Nav.Link>
          </Nav>

      </Navbar>
    <div className='content'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/feedback' element={<Feedback/>}/>
      </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
 )
}
export default App;