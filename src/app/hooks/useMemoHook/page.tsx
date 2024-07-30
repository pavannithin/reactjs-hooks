"use client";
import React, { useMemo, useState } from "react";

/* 
1. useMemo is used to apply Menoization in react.
2. what is Menoization? - Menoizationis technique for impproving the performance of the code, it is used to avoid expensive calculations on every render when the output is the same.
*/
function UseMemoHook() {
  const [Number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const memoCalulations = useMemo(() => {
    return expensiveCalculation(Number);
  }, [Number]);
  
  const cssStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };


return (
    <div style={cssStyle}>
        UseMemoHook
        <input
            type="number"
            value={Number}
            onChange={(e) => setNumber(e.target.valueAsNumber)}
        />
        <h4>calculations: {memoCalulations}</h4> 
        <button onClick={() => setDark(!dark)}>Toggle</button>
    </div>
);
}

export default UseMemoHook;

const expensiveCalculation = (Number: number) => {
    console.log("calculating");
    for (let i = 0; i < 1000000000; i++) {}
    return Number;
  };