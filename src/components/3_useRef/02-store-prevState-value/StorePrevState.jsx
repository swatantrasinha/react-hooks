import {useState,useRef, useEffect} from 'react'

const StorePrevState = () => {
  const [username, setUsername] = useState('')
  const prevUserName = useRef('')

  useEffect( () => {
    prevUserName.current=username;
  }, [username])
  

  return (
    <>
    <h3>Store Prev Value of Username state</h3>
   <div>
     <label htmlFor='user-name'>Username</label>
     <input 
         type='text' 
         id='user-name' 
         value={username}  
         onChange={(event) => setUsername(event.target.value)}
         />
   </div>
   <div>
     <h3>My name is : {username} , earlier it was : {prevUserName?.current}</h3>
   </div>
   </>
   )
}

export default StorePrevState