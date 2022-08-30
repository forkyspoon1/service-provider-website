import React from "react";
import Feature , {featuresArray} from "./Feature.jsx";

function Features () {
    return (
        <section id='featuresSection' className="m-5">
            <div className='container'>
                <div className='row'>
                    {featuresArray.map((feature)=>{
                        return(
                            <Feature
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