import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Login from "./screens/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import Shop from "./screens/Shop";
import ProductDetails from "./screens/ProductDetails";
import Programs from './screens/Programs';
import Register from './screens/Register';
import Profile from './screens/Profile';
import Cart from './screens/Cart';
import Checkout from './screens/Checkout';

function App() {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: "#212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435"
    },
    media: { mobile: "768px", tab: "998px" }
  }
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/auth/profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(response => {
      // Check if the response status is 200 OK
      if (response.status === 200) {
        return response.json();
      } else {
        // If the status is not 200, set user to null
        setUser(null);
        throw new Error('User not authenticated');
      }
    })
    .then(data => setUser(data))
    .catch(error => console.error('Error fetching user:', error));
  }, [""]);
  console.log(user)
  return (
    <ThemeProvider theme={theme}>
      {/* <GlobalStyle /> */}
      <BrowserRouter>
        {/* <Header user={user}/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/products/:id" element={<ProductDetails />} />
          <Route path="/shop/cart" element={<Cart />} />
          <Route path="/shop/cart/checkout" element={<Checkout />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/programs" element={<Programs />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
