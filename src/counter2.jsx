//Setting up counter using callback function.
// If we want to pass 2 updater function within the given function we need to pass using callback function  

import { useState } from "react";
export default function Counter2() {
    let [count, updater] = useState(0);
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