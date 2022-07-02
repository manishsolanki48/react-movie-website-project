import React from "react";
import Cartoondata from "./Cartoondata";

function Cartoon(){
    return(
        <>
            <div className="cartoon-moves-section">
                <h2>CARTOON MOVIES</h2>
                <div className="cartoonmovewrapper">
                    {
                        Cartoondata.map((val) => {
                            return <div className="cartoon-folder">
                                        <div className="cartoon-blog-box">
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

export default Cartoon;