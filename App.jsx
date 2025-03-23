import React from "react";
import { useState } from "react";
import "../App.css";

function App() {
    const [count ,setcount] =useState(0);

    function increment(){
        setcount(count + 1);
    }

    function decrement(){
        setcount(count - 1);
    }

    return (
        <div>
        <h1>{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
}
export default App;