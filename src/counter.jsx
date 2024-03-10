import { useState } from "react";

export default function Counter(){   
    let [count,updater]=useState(0);
    function handlecount(){
        updater(count+1)
    }
    function handlecount2(){
        updater(count-1)
    }
    return (
        <>
            <h1>Counter = {count}</h1>
            <button onClick={handlecount}>increment</button>
            <button onClick={handlecount2}>decrement</button>
        </>


    )
}