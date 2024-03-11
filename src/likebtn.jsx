import { useState } from "react";

export default function Likebutton() {
    let ncolor={color:"red",cursor:"pointer", fontSize:"3rem" }
    let [like,setlike]=useState(false)
    let displaylike= (!like)?
                     <i className="fa-regular fa-heart" style={ncolor}></i> 
                     : <i class="fa-solid fa-heart" style={ncolor}></i>
    function handlelike(){
        setlike(!like)
    }
    return (
        <div>
            <p onClick={handlelike}>
                {displaylike}
            </p>
        </div>
    );
}