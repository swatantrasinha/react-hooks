import {useState, useMemo, useEffect} from 'react'

const Demo_UseMemo_ExploreFurther = () => {
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

   
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // const themeStyles= {   // uncomment to see referencial equality problem
    //     backgroundColor: dark ? 'black' : 'white',
    //     color: dark ? 'white': 'black' 
    // }; 

    const themeStyles= useMemo(() =>  (  // solution for above problem
      {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white': 'black' 
      }
    ), [dark])

    useEffect(() => {
      console.log('useEffect for themeStyles ');
    }, [themeStyles])
    

  return (
    <>
        <h1>Demo_UseMemo Explore Further-  Referencial Equality</h1>
        <div>
            <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} /> 
            <button onClick={() => setDark(prevDark => !prevDark)}> Change Theme </button>
            <div style={themeStyles}> {doubleNumber}</div>
        </div>
    </>
    
  )
}

export default Demo_UseMemo_ExploreFurther;

