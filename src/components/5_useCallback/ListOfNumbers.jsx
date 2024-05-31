import { useState,useEffect } from 'react'

const ListOfNumbers = ({getNumArrayFunc}) => {
    const [items, setItems]= useState([]);

    useEffect(() => {
        console.log('ListOfNumbers - Updating items ');
    setItems(getNumArrayFunc());
    },[getNumArrayFunc])
    
  return items.map((ele, index) => <div key={`${ele}_${index}`}> {ele} </div>)
}

export default ListOfNumbers;
