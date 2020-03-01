import React from 'react';

import Nav from '../Navbar';
import Header from './Header';
import Footer from '../Footer';
import Cards from './Cards';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  
      <div className="App">
        <Header />
        <Cards />
      </div>
   
  );
}

export default App;
