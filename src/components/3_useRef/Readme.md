UseRef hook
=============
use1 : focus on input on button click (aleady used and know well)

Note : 
- When state is changed then component re-renders. 
- Unlike state change, the component does not render when useRef.current value is changed

use 2: Store Previous State
see StorePrevState.jsx


use3 : calculate how any times component renders

Lets say we want to show number of times a component rendered on screen 
there is input textbox that stores name typed by user and on change the value of name in state changes
one approach is below :

----------------------------------------------------------------------------------------------------
const CalculateRenderCount = () => {
  const [username, setUsername] = useState('')
  const [renderCount, setRenderCount] = useState(0)

    useEffect(() => {
        setRenderCount(prevRenderCount => prevRenderCount + 1);
    })


  return (
    <>
        <div>
            <label htmlFor='user-name'>Username</label>
            <input 
                type='text' 
                id='user-name' 
                value={username}  
                onChange={(event) => setUsername(event.target.value)} />
        </div>
        <div>Component rendered {renderCount} times</div>
    </>
    );
}

export default CalculateRenderCount
----------------------------------------------------------------------------------------------------
but this is totally wrong
when we update the state using setRenderCount
the component will re-render again and useEffect will be called and again setRenderCount will be called
it will go on infinite loop

so we cannot use setState hook in this case 
hence we will use useRef - see CalculateRenderCount.jsx
