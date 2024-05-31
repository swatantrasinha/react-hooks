import {useReducer} from 'react'

const Demo_UseReducer_Counter = () => {
    const ACTIONS= {
        INCREMENT: 'increment',
        DECREMENT: 'decrement'
    }
    const initialState= {
        count:0
    };
    const reducer= (state, action) => {
        switch (action.type) {
            case ACTIONS.INCREMENT: {
                return {count : state.count + 1}
            }

            case ACTIONS.DECREMENT: {
                return {count : state.count - 1}
            }

            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer,initialState);

  return (
    <div className='counter-app'>
        <button onClick={() => dispatch({type:ACTIONS.DECREMENT})} > - </button>
           <span> {state.count} </span>
        <button onClick={() => dispatch({type:ACTIONS.INCREMENT})} > + </button>
    </div>
  )
}

export default Demo_UseReducer_Counter