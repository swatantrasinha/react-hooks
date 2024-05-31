import  {useState} from 'react'

const Demo_UseState = () => {

  const calculateCounter2 = () => {
    console.log('inside calculateCouunt');
    const value= 500;
    return value;
  }

// const [counter2, setCounter2]= useState(calculateCounter2());
   const [counter2, setCounter2]= useState(() => calculateCounter2());

  const [countAndTheme, setCountAndTheme] = useState({
    count: 100, 
    theme: 'light' 
  });

  const clickHandler = () => {
    console.log('button - clickHandler !!');
    setCountAndTheme(prevCountAndTheme => {
      return {
        ...prevCountAndTheme,
        count: prevCountAndTheme.count +1,
      }
    })
  }
  const clickHandler2 = () => {
    console.log('button - clickHandler2 !!');
    setCounter2(prevCounter2 => prevCounter2 + 1);
  }

  return (
    <div>
      <div>
        Counter : {countAndTheme.count}
        <button onClick={clickHandler} > Add Counter</button>
      </div>

      <div>
        Counter2: {counter2}
        <button onClick={clickHandler2} > Increment Counter2</button>
      </div>
     

    </div>
  )
}

export default Demo_UseState;