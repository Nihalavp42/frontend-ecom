import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Admin from './Components/Admin/Admin';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import ProductDetails from './Components/ProductDetails/ProductDetails'; // Import the new component for product details

function App() {
  return (
    
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/header" element={<Header />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/product/:productId" element={<ProductDetails />} /> {/* Route for product details */}
        </Routes>
        <Footer />
      </>
    
  );
}

export default App;
