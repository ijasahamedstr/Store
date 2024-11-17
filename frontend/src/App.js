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
import Motordisability from './components/Motordisability';
import Medicine from './components/categories/medicine';
import EncyclopediaofDisability from './components/categories/Encyclopedia-of-Disability';
import Courses from './components/categories/Courses';
import Donations from './components/categories/Donations';
import Test from './components/test';
import Hearingdisability from './components/categories/Hearing-disability';
import Visualimpairment from './components/categories/Visual-impairment';
import Autism from './components/categories/Autism';
import Learningdifficulties from './components/categories/Learning-difficulties';

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
        <Route path="/أعاقة حركية" element={<Products/>} />
        <Route path="/إعاقة سمعية" element={<Aboutus />} />
        <Route path="/إعاقة بصرية" element={<Contactus/>} />
        <Route path="/من نحن" element={<Aboutus/>} />
        <Route path="/اتصل بنا" element={<Contactus/>} />
        <Route path="/Login" element={<LoginCard/>} />
        <Route path="/categories" element={<Categoriesview/>} />
        <Route path="/ProductView" element={<ProductView/>} />
        <Route path="/Subcategorie" element={<Subcategorie/>} />
        <Route path="/userview" element={<Userview/>} />
        <Route path="/register" element={<Registration/>} />
        <Route path="/cart" element={<Test/>} />
        <Route path="/dashboard" element={<OTPlogin/>} />
        <Route path="/Motor-disability" element={<Motordisability/>} />
        <Route path="/Hearing-disability" element={<Hearingdisability/>} />
        <Route path="/Visual-impairment" element={<Visualimpairment/>} />
        <Route path="/Autism" element={<Autism/>} />
        <Route path="/Learning-difficulties" element={<Learningdifficulties/>} />
        <Route path="/categories/medicine" element={<Medicine/>} />
        <Route path="/categories/Encyclopedia-of-Disability" element={<EncyclopediaofDisability/>} />
        <Route path="/categories/Courses" element={<Courses/>} />
        <Route path="/categories/donations" element={<Donations/>} />
      </Routes>
      <Footer/>
    </Router>
    </ThemeProvider>
  );
}

export default App;
