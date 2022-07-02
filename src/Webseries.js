import React from "react";
import Webseriesdata from "./Webseriesdata";

function Webseries(){
    return(
        <>
            <div className="webseries-moves-section">
                <h2>WEBSERIES</h2>
                <div className="webseriesmovewrapper">
                    {
                       Webseriesdata.map((val) => {
                            return <div className="webseries-folder">
                                        <div className="webseries-blog-box">
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

export default Webseries;