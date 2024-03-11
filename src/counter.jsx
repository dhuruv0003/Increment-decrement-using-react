import { useState } from "react";

export default function Counter(){   
    let [count,updater]=useState(0);

    // console.log("render new count");
    // console.log(`count is ${count}`);
    let handlecount=()=>{
        updater(count+1)
        // console.log(`inside count ${count}`);
    }
    
    // whenever the updater function is called the whole page is re renderd agaain and again.
    //Real value update render hone ka baad hoti hai.
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