"use client";
import React, { useState } from "react";

{/* what is useSate -usestate is a fucntion to add state in the fucntional component.
    what is state - state is a variable that is used to store the data  or State is nothing but just values and varibles of your component
  
  */}

function useStateHook() {
  const [count, setCount] = useState(0);
  return (
    <React.Fragment>
      <div style={{ padding: "3rem" }}>useStateHook Counter: {count}</div>

      <button style={{ margin: "3rem" }} onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </React.Fragment>
  );
}

export default useStateHook;
