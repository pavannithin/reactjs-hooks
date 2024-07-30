"use client";
import React, { use, useEffect, useState } from 'react'

function UseEffectHook() {
    const [count, setCount] = useState(0);
    const [otherCount, setOtherCount] = useState(0);

    const [time, setTime] = useState(0);

/* 
use effect with out array depedenacies will run every time the component is rendered
*/
    // useEffect(() => {
    //     window.document.title= `You clicked ${count} times`;
    // });
/* 
use effect with empty array depedenacies will run only once when the component is rendered    
*/
    useEffect(() => {
        window.document.title= `You clicked ${count} times`;
    }),[];
 /*
 use effect with array depedenacies will run every time the component is rendered, 
 but only when the value of the depedenacies changes
 
 */   
    useEffect(() => {
        window.document.title= `You clicked ${otherCount} times`;
    }),[otherCount];

    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     console.log("interval set");
    //     setTime((prev) => prev + 1);
    //   }, 1000);
    //   return()  => {
    //     console.log("clearing interval");
    //     clearInterval(interval);
    //   } 
    // });
    useEffect(() => {
        console.log("component mounted");
        return () => {
          console.log("component unmounted");
        }
    });

    /* 
    use effect is used to perform side effects in the functional component, like fetching data from API, updating the DOM - document & window, timer fucntions- setInterval &setTimeout, etc.
    */


  return (
    <React.Fragment>
      <div style={{ padding: "3rem" }}>useEffectHook Counter: {count}</div>

      <button style={{ margin: "3rem" }} onClick={() => setCount((prev) => prev + 1)}>Increment</button>

      <div style={{ padding: "3rem" }}>Other Counter: {otherCount}</div>

<button style={{ margin: "3rem" }} onClick={() => setOtherCount((prev) => prev + 1)}>Other Increment</button>
    </React.Fragment>
  )
}

export default UseEffectHook;