"use client";
import React, { useRef} from 'react'

/* 
1.UserRef is used to store the reference of the DOM element or the value of the variable,
2.UseRef allows us to access dom elements.
3.For creating mutable varibles which will not cause the re-render of the component.
*/

function UseRefHook() {
    // const [name, setName] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const handleChange=()=>{
        if (inputRef.current) {
            inputRef.current.style.width = "1000px";
        }
        inputRef.current?.focus();
    }
    // React.useEffect(() => {
    //     count.current = count.current + 1;
    // });
  return (
    <div>
        <input type='text' ref={inputRef}/>
        {/* <h2>{name}</h2> */}
        <button onClick={handleChange}>click</button>
    </div>
  )
}

export default UseRefHook