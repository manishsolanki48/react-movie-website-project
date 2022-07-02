import React, {useState} from "react";

function Topheader(){
    const [modal, setModal] =useState(false);
     
    function toggleModal(){setModal(!modal)}
    return(
        <>  
            <a href="#" onClick={toggleModal} className="show-btn"><i class="fa-solid fa-bars"></i></a>
            {modal &&(
                <div className="top-header">
                <div className="topheaderwrapper">
                    <div className="logo">MOVIES</div>
                    <div className="top-header-folder">
                        <div className="menu">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About-US</a></li>
                            <li><a href="#">Service</a></li>
                            <li><a href="#">Contect</a></li>
                        </div>
                        <input type="serach" className="search" placeholder="Search"/>
                    </div>
                </div>
            </div>
            )}
            <div className="top-header-section">
                <div className="topheaderwrappersection">
                    <div className="logo-section">MOVIES</div>
                    <div className="top-header-folder-section">
                        <div className="menu-folder">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About-US</a></li>
                            <li><a href="#">Service</a></li>
                            <li><a href="#">Contect</a></li>
                        </div>
                        <input type="menu-serach" className="search" placeholder="Search"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Topheader;