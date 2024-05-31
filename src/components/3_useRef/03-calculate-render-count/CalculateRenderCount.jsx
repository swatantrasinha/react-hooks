import {useState, useRef, useEffect} from 'react'

const CalculateRenderCount = () => {
    const [username, setUsername] = useState('')
    const renderCount= useRef(0);

    useEffect(() => {
      renderCount.current = renderCount.current + 1;
    }, [username])


    

  return (
    <>
    <div>
    <label htmlFor='user-name'>Username</label>
     <input 
         type='text' 
         id='user-name' 
         value={username}  
         onChange={(event) => setUsername(event.target.value)}
         />
    </div>
    <div>This component is rendered {renderCount?.current} many times</div>
    </>
  )
}

export default CalculateRenderCount