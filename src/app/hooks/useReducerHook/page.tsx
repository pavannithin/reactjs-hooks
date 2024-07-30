"use client";
import React, { useReducer, useState } from "react";

/* 
1.Userreducer is used to manage the state of the component, it is an alternative to useState.
2.In other words, useReducer is a hook that is used for state management in React.
3.State mangement is used to manage all the states of application in simple and efficient way.
*/

const ACTION = { INCREMENT: "increment", DECREMENT: "decrement" };
const initialState = { count: 0 };
function reducer(state: any, action: any) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function UseReducerHook() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>Count: {state.count}</div>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Increment</button>
    </>
  );
}

export default UseReducerHook;
