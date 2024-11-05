import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Aboutus from './components/About';
import Contactus from './components/Contact';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from './components/Footer';
import LoginCard from './components/Login';
import Categoriesview from './components/categoriesview';
import ProductView from './components/ProductsingleView';
import Subcategorie from './components/subcategorie';
import Userview from './components/userview';
import Registration from './components/Registration';
import OTPlogin from './components/OTP';




const theme = createTheme({
  typography: {
    fontFamily: 'Changa, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/About" element={<Aboutus />} />
        <Route path="/Contact" element={<Contactus/>} />
        <Route path="/Login" element={<LoginCard/>} />
        <Route path="/categories" element={<Categoriesview/>} />
        <Route path="/ProductView" element={<ProductView/>} />
        <Route path="/Subcategorie" element={<Subcategorie/>} />
        <Route path="/userview" element={<Userview/>} />
        <Route path="/register" element={<Registration/>} />
        <Route path="/cart" element={<OTPlogin/>} />
      </Routes>
      <Footer/>
    </Router>
    </ThemeProvider>
  );
}

export default App;
