import React from "react";
import Bollywooddata from "./Bollywooddata";

function Bollywood(){
    return(
        <>
            <div className="bollywood-moves-section">
                <h2>BOLLYWOOD MOVIES</h2>
                <div className="bollywoodmovewrapper">
                    {
                        Bollywooddata.map((val) => {
                            return <div className="bollywood-folder">
                                        <div className="bollywood-blog-box">
                                            <img src={val.image}/>
                                            <h2>{val.title}</h2>
                                            <a href={val.moviedetails}>WATCH NOW</a>
                                        </div>
                                   </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Bollywood;