import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { getArticlesByTag, getArticlesByWord } from './api';
import './App.css';
import Politics from './components/politics';
import Sport from './components/sport';
import Media from './components/media';
import MainPage from './components/MainPage';




function App() {

  return (
    <BrowserRouter>
      <div className="App">

        <div className='Main-banner'>
          <div className='Navlink-bar'> 
          <NavLink exact to="/">Main</NavLink>  
          <NavLink to="/politics">Politics</NavLink>
          <NavLink to="/sport">Sport</NavLink>
          <NavLink to="/media">Media</NavLink>
          </div>
          <h1>
            Sketchy reporting of House of Commons debates | Brief letters
          </h1>
          <p>
            Simon Jenkins and editors might suggest how readers know which MPs show “intelligence, radicalism and independence”
          </p>
        </div>
        <Routes>
          <Route exact path='/' element={<MainPage />} />
          <Route path='/politics' element={<Politics />} />
          <Route path='/sport' element={<Sport />} />
          <Route path='/media' element={<Media />} />

        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
