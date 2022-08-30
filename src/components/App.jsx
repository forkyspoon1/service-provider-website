import React from 'react';
import Navbar from './Navbar/Navbar.jsx';
import Home from './Home/Home.jsx';
import Features from './Features/Features.jsx';
import CompareTable from './ComparisonTable/Comparison.jsx';
import Reviews from './Reviews/Reviews.jsx';
import Pricing from './Pricing/Pricing.jsx';
import Footer from './Footer/Footer.jsx';



function App () {

return (
    <>
        <Navbar />
        <Home />
        <Features />
        <CompareTable />
        <Reviews />
        <Pricing />
        <Footer />
    </>
)
}

export default App;