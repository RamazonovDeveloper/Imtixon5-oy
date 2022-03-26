import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Singlemovie from './components/singleMovieItem/SingleMovie';
import Loginpage from './pages/loginPage/LoginPage';
import Movie from './pages/moviesPage/Movie';
import Search from './pages/searchingPage/Search';
import Page from './pages/tempPage/Page';
import Protected from './providers/protected/Protected';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          
        <Routes>

          <Route path='login' element={<Loginpage/>} />
          <Route path='/' element={
            <Protected>
              <Page/>
            </Protected>
          }/>
          <Route path='/movie' element={
            <Protected>
              <Movie/>
            </Protected>
          }/>
          <Route path='/search' element={
            <Protected>
              <Search/>
            </Protected>
          }/>
          
          {/* <Route path='home' element={<Footer/>}/> */}
          {/* <Route path='movies'/> */}
        </Routes>
        
      </BrowserRouter>

    </div>
  );
}

export default App;
