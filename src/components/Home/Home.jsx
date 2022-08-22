import React from "react";
import HoldingPhone from "../../Assets/holding_phoneWords.png";
import Form from "./Form";


function Home () {
    return (
    <section id="homeSection">

        <div className="container-fluid">
         <div className="row">
            <div className="col-lg-6">
                <img className="holdingPhone"src={HoldingPhone}></img>
            </div>
            <div className="col-lg-6">
                <Form />
            </div>
         </div>
        </div>
            
    </section>
 )
}


export default Home;