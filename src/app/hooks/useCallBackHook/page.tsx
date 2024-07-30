"use client";
import React, { useCallback, useState } from 'react'
import RowsComponents from './rowsComponnet';

/*
1.Use callback is used to return memoized function.
2.It's also useful fro preventing fucntions from being recreated on the re-rendering.
*/

function UseCallbackHook() {
    const [Number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const cssStyle = {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };

    const calculations = useCallback(() => {

        return [Number *2, Number * 3, Number * 4, Number * 5];
    },[Number]);
  
  
  return (
      <div style={cssStyle}>
          UseMemoHook
          <input
              type="number"
              value={Number}
              onChange={(e) => setNumber(e.target.valueAsNumber)}
          />
          <RowsComponents calculations={calculations}/>
          <button onClick={() => setDark(!dark)}>Toggle</button>
      </div>
  );
}

export default UseCallbackHook