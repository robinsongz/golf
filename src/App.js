import React from 'react';

import Nav from './Components/Navbar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Cards from './Components/Cards';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
