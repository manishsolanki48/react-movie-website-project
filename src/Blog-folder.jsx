// import React, { useState } from "react";
// import Bollywooddata from "./Bollywooddata";
// import Hollywooddata from "./Hollywooddata";

// function Blogsection(){
//     const [index,setindex]=useState(0);

//     return(
//         <>
//             <div className="blog-section">
//                 <div className="tabwrapper">
//                     <div className={` tab ${index===0?'active':null} `} onClick={()=>{setindex(0)}}>
//                         <a href="#">all</a>
//                     </div>
//                     <div className={` tab ${index===1?'active':null} `} onClick={()=>{setindex(1)}}>
//                         <a href="#">bollywood</a>
//                     </div>
//                     <div className={` tab ${index===2?'active':null} `} onClick={()=>{setindex(2)}}>
//                         <a href="#">hollywood</a>
//                     </div>
//                     <div className={` tab ${index===3?'active':null} `} onClick={()=>{setindex(3)}}>
//                         <a href="#">tollywood</a>
//                     </div>
//                     <div className={` tab ${index===4?'active':null} `} onClick={()=>{setindex(4)}}>
//                         <a href="#">cartoon</a>
//                     </div>
//                     <div className={` tab ${index===5?'active':null} `} onClick={()=>{setindex(5)}}>
//                         <a href="#">webseries</a>
//                     </div>
//                 </div>
//             </div>
//             <div className="bollywood-moves-section" hidden={index !== 1}>
//                 <h2>BOLLYWOOD MOVIES</h2>
//                 <div className="bollywoodmovewrapper">
//                     {
//                         Bollywooddata.map((val) => {
//                             return <div className="bollywood-folder">
//                                         <div className="bollywood-blog-box">
//                                             <img src={val.image}/>
//                                             <h2>{val.title}</h2>
//                                             <a href={val.moviedetails}>WATCH NOW</a>
//                                         </div>
//                                    </div>
//                         })
//                     }
//                 </div>
//             </div>
//             <div className="hollywood-moves-section">
//                 <h2>HOLLYWOOD MOVIES</h2>
//                 <div className="hollywoodmovewrapper">
//                     {
//                         Hollywooddata.map((val) => {
//                             return <div className="hollywood-folder">
//                                         <div className="hollywood-blog-box">
//                                             <img src={val.image}/>
//                                             <h2>{val.title}</h2>
//                                             <a href={val.moviedetails}>WATCH NOW</a>
//                                         </div>
//                                    </div>
//                         })
//                     }
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Blogsection;