import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";

function Pricing () {
    return(
     
        <section id="PricingSection">
        <h1>Plans</h1>
            <div className="container">
                <div className="row">

                <div className="col-lg-4">
                <div className="card text-center" >
                    <div className="card-body">
                        <h3 className="card-title card-header">Standard 14.99/mo</h3>
                        <div className="card-text">
                        <ul>
                        <li>Speeds up to 1gb/minute</li>
                        <li>Mutliple device supported</li>
                        <li>testing</li>
                        <li>testing</li>
                        </ul>
                        </div>
                        <a href="#homeSection" className="btn btn-primary">Button</a>
                    </div>
                </div>
                </div>

                <div className="col-lg-4">
                <div className="card text-center" >
                    <div className="card-body">
                        <h3 className="card-title card-header">Family 29.99/mo <FontAwesomeIcon icon={faThumbsUp}/></h3>
                        <div className="card-text">
                        <ul>
                        <li>Discount Available for Families</li>
                        <li>Speeds up to 3gb/minute</li>
                        <li>Multiple device supported</li>
                        </ul>
                        </div>
                        <a href="#homeSection" className="btn btn-primary">Button</a>
                    </div>
                </div>
                </div>

                <div className="col-lg-4">
                <div className="card text-center" >
                    <div className="card-body">
                        <h3 className="card-title card-header">Premium 49.99/mo</h3>
                        <div className="card-text">
                        <ul>
                        <li>Speeds up to 5gb/minute</li>
                        <li>Multiple device supported</li>
                        <li>Unlimited</li>
                        <li>Free PEP Fiber Hoodie</li>
                        </ul>
                        </div>
                        <a href="#homeSection" className="btn btn-primary">Button</a>
                    </div>
                </div>
                </div>

                </div>
            </div>
        </section>
    
    )
}

export default Pricing;