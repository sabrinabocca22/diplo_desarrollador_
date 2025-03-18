import logo from './logo.svg';
import './App.css';
import {Browser, Routes, Route, BrowserRouter } from "react-router-dom" ;

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import ContactoPage from './Pages/ContactoPage';
import HomePage from './Pages/HomePage';
import NosotrosPage from './Pages/NosotrosPage';
import NovedadesPages from './Pages/NovedadesPage'

function App() 
{
  return (
    <div className="App">
     <Header/>
     <BrowserRouter>
     <Nav/>
     <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path="nosotros" element={<NosotrosPage />} />
      <Route path="novedades" element={<NovedadesPages />} />
      <Route path="contacto" element={<ContactoPage />} />  
  </Routes>
  </BrowserRouter>

   <Footer/>
    </div>
  );
}

export default App;
