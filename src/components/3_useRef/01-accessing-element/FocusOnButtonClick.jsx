import { useRef, useState} from 'react'

const FocusOnButtonClick = () => {
    const [username, setUsername] = useState('')
    const inputRef= useRef(null)
   
    const clickHanlder= () => {
        console.log('clickHanlder');
        inputRef.current.focus()
    }

  return (
   <>
   <h3>Focus on Inout on Button Click</h3>
  <div>
    <label htmlFor='user-name'>Username</label>
    <input 
        ref={inputRef} 
        type='text' 
        id='user-name' 
        value={username}  
        onChange={(event) => setUsername(event.target.value)}
        />
  </div>
  <div>
    <button onClick={clickHanlder}>Focus</button>
  </div>
  </>
  )
}

export default FocusOnButtonClick