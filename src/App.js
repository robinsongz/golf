import React from 'react';

import Nav from './Navbar';
import CarouselComponent from './Carousel';
import Footer from './Footer';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <CarouselComponent />
      <Footer />
    </div>
  );
}

export default App;
