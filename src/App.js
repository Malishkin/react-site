import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import './App.css'
import Header from './components/Header';
import FooterPage from './components/FooterPage';
import HomePage from './pages/HomePage';
import Contacts from './pages/Contacts';
import Ensembles from './pages/Ensembles';
import About from './pages/About';

function App() {
  return (
    <div style={{direction: "rtl"}}>
     <Header />
     <main className='py-3'>
     <Router>
        <Routes>
          
          <Route path='/' element={<HomePage/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
          <Route path='/ensembles' element={<Ensembles/>}/>
          <Route path='/about' element={<About/>}/>
         
        </Routes>
      </Router>
     </main>
     <FooterPage/>
    </div>
  );
}

export default App;
