import React from "react";
import Tollywooddata from "./Tollywooddata";

function Tollywood(){
    return(
        <>
            <div className="tollywood-moves-section">
                <h2>TOLLYWOOD MOVIES</h2>
                <div className="tollywoodmovewrapper">
                    {
                        Tollywooddata.map((val) => {
                            return <div className="tollywood-folder">
                                        <div className="tollywood-blog-box">
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

export default Tollywood;