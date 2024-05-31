import {useState, useCallback} from 'react';
import ListOfNumbers from './ListOfNumbers';

export const Demo_Solution_Using_UseCallback = () => {
    const [number, setNumber] = useState(1)
    const [dark, setDark] = useState(false)

  const getArrayItems =  useCallback(
    () => { return [ number, number + 1, number+2 ]}
    ,[number])
    
  const theme= {
    backgroundColor: dark? '#333' :  '#FFF',
    color: dark ? '#FFF' : '#333'
  }

  return (
    <div style={theme}>
        <h1> Demo_Need_For_UseCallback </h1>
        <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
        <button onClick={() => setDark(prevDark => !prevDark)}> Toggle Theme</button>
        <ListOfNumbers getNumArrayFunc={getArrayItems} />
    </div>
  )
}
