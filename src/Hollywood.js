import React from "react";
import Hollywooddata from "./Hollywooddata";

function Hollywood(){
    return(
        <>
            <div className="hollywood-moves-section">
                <h2>HOLLYWOOD MOVIES</h2>
                <div className="hollywoodmovewrapper">
                    {
                        Hollywooddata.map((val) => {
                            return <div className="hollywood-folder">
                                        <div className="hollywood-blog-box">
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

export default Hollywood;