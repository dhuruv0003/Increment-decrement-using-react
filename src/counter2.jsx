//Setting up counter using callback function.
// If we want to pass 2 updater function within the given function we need to pass using callback function  

import { useState } from "react";
let init=()=>{
    console.log("funciton initialised");
    return Math.floor(Math.random()*10)
}
export default function Counter2() {

    // if we wnat to initialise the intial state the pass the function without parenthesis.
    //because if we pass function like init() this then function will get executed ever time when we make a call
    let [count, updater] = useState(init);
    let handleCount = () => {
        // updater(count + 11);
        // updater(count +21);
        // earlier the exexctuin was not synchronous
        // But after using callback execution is synchronous
        updater((count)=>{
            return count+1
        })
        updater((count)=>{
            return count+1
        })
    }
    return (
        <div>
            <p>count = {count}</p>
            <button onClick={handleCount}>increment</button>
        </div>
    );
}