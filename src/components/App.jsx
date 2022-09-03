import React from 'react';
import Navbar from './Navbar/Navbar.jsx';
import Home from './Home/Home.jsx';
import Support from './Support/Support.jsx';
import Footer from './Footer/Footer.jsx';
import {Routes, Route} from 'react-router-dom';

function App () {

return (
    <>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Support" element={<Support />} />
    </Routes>
    <Footer />
    </>
)
}

export default App;