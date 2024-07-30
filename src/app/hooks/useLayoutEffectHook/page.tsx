"use client";
import React, { use, useLayoutEffect, useRef } from "react";

/* useLaylout us used to perform the side effects in the component. It is similar to useEffect but it runs synchronously after the DOM has been updated. 
It is used to perform the DOM operations like changing the width of the element, changing the focus of the element etc.
Useeffect runs after the dom has been updated, so if we want to perform the operation before the dom has been updated we can use useLayoutEffect.
the most common use case of useLayoutEffect is to measure the size of the element before the dom has been updated.
*/

function UseLayoutHook() {
  const [toggle, setToggle] = React.useState(false);
  const textRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    if (textRef.current != null) {
      const dimesion = textRef.current.getBoundingClientRect();
      console.log(dimesion);
      textRef.current.style.paddingTop = `${dimesion.height + "px"}`;
    }
  }, [toggle]);

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <h4 ref={textRef}>UseLayoutHook</h4>}
    </div>
  );
}

export default UseLayoutHook;
