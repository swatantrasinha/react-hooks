import {useState, useMemo} from 'react'

const Demo_UseMemo_Solution = () => {
    const slowFunction= (num) => {
        let temp=0;
        console.log("Calling Slow Function !!!");
        for (let index = 0; index < 1000000000; index++) {
           temp++;
        }
        console.log('temp final value is : ', temp);
        return num * 2;
    }
    
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
    // const doubleNumber= slowFunction(number);
    const doubleNumber= useMemo(() => slowFunction(number), [number])

    const themeStyles= {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white': 'black' 
    };

  return (
    <>
        <h1>Demo_UseMemo Solution </h1>
        <div>
            <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} /> 
            <button onClick={() => setDark(prevDark => !prevDark)}> Change Theme </button>
            <div style={themeStyles}> {doubleNumber}</div>
        </div>
    </>
    
  )
}

export default Demo_UseMemo_Solution;

