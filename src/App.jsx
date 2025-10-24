import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Vehicles from './pages/Vehicles';
import BookNow from './pages/BookNow';
import AdminLogin from './pages/AdminLogin';
import AdminPanel from './pages/AdminPanel';
import Contact from './pages/Contact';
import { SAMPLE_VEHICLES, VEHICLES_KEY } from './utils/constants';
import { loadJSON, saveJSON } from './utils/storage';

export default function App(){
  const [vehicles, setVehicles] = useState(()=> loadJSON(VEHICLES_KEY, SAMPLE_VEHICLES));
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(()=> saveJSON(VEHICLES_KEY, vehicles), [vehicles]);
  const handleSelect = (name) => { window.location.href = `/book?vehicle=${encodeURIComponent(name)}`; };
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home vehicles={vehicles} onSelect={handleSelect}/>}/>
        <Route path='/vehicles' element={<Vehicles vehicles={vehicles} isAdmin={isAdmin}/>}/>
        <Route path='/book' element={<BookNow vehicles={vehicles}/>}/>
        <Route path='/admin-login' element={<AdminLogin onSuccessfulLogin={()=>setIsAdmin(true)}/>}/>
        <Route path='/admin' element={isAdmin? <AdminPanel vehicles={vehicles} setVehicles={setVehicles} onLogout={()=>setIsAdmin(false)}/> : <AdminLogin onSuccessfulLogin={()=>setIsAdmin(true)}/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}
