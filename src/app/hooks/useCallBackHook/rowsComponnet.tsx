import React, { use, useEffect, useState } from 'react'

function RowsComponents({calculations}: {calculations: () => number[]}) {
    const [rows, setRows] = useState<number[]>([]);

    useEffect(() => {
        console.log("print statement");
        setRows(calculations())
    }, [calculations])
  return (
    <>{rows.map((row, index) => <div key={index}>{row}</div>)}</>
  )
}

export default RowsComponents