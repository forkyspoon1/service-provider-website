import React from "react";
import Features from "./Features/Features";
import CompareTable from "./ComparisonTable/Comparison";
import Reviews from "./Reviews/Reviews";
import Pricing from "./Pricing/Pricing";
import Title from "./Title/Title";


function Home () {
    return (
    <>
        <Title />
        <Features />
        <CompareTable />
        <Reviews />
        <Pricing />
    </>
 )
}


export default Home;