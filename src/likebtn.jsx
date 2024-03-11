import { useState } from "react";

export default function Likebutton() {
    let ncolor={color:"red",cursor:"pointer", fontSize:"3rem" }
    let [liked,setlike]=useState(false)
    let displaylike= (!liked)?
                     <i className="fa-regular fa-heart" style={ncolor}></i> :
                     <i class="fa-solid fa-heart" style={ncolor}></i>
    function handlelike(){
        setlike(!liked)
    }
    return (
        <div>
            <p onClick={handlelike}>
                {displaylike}
            </p>
            <p onClick={handlelike}>
                {liked.toString()}
            </p>
        </div>
    );
}