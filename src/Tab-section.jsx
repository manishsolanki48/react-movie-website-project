import React, { useState } from "react";

function Tabsection(){
    const [index,setindex]=useState(0);

    return(
        <>
            <div className="tab-secxtion">
                <div className="tabwrapper">
                    <div className="tab" onClick={()=>{setindex(0)}}>
                        <a href="#">all</a>
                    </div>
                    <div className="tab" onClick={()=>{setindex(1)}}>
                        <a href="#">bollywood</a>
                    </div>
                    <div className="tab" onClick={()=>{setindex(2)}}>
                        <a href="#">hollywood</a>
                    </div>
                    <div className="tab" onClick={()=>{setindex(3)}}>
                        <a href="#">tollywood</a>
                    </div>
                    <div className="tab" onClick={()=>{setindex(4)}}>
                        <a href="#">cartoon</a>
                    </div>
                    <div className="tab" onClick={()=>{setindex(5)}}>
                        <a href="#">webseries</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tabsection;