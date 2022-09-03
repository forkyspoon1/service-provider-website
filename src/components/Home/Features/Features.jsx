import React from "react";
import Feature , {featuresArray} from "./Feature.jsx";

function Features () {
    return (
        <section id='FeaturesSection'>
            <div className='container'>
                <div className='row'>
                    {featuresArray.map((feature, index)=>{
                        return(
                            <Feature
                            key = {index}
                            title= {feature.title}
                            description={feature.description}
                            icon={feature.icon}
                            />
                    )
                    })}
                </div>
            </div>
        </section>
    )
}


export default Features;