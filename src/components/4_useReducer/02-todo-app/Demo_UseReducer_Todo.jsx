import {useReducer, useState} from 'react'

const Demo_UseReducer_Todo = () => {
    const ACTIONS= {
        ADD_TODO_LIST: 'add-to-todo-list',
        REMOVE_TODO_LIST: 'remove-from-todo-list',
        TOGGLE_TODO_LIST: 'toggle-in-todo-list'
    };
    const getNewTodoItem = (taskName) => {
        return {
            id: Date.now(),
            task: taskName,
            isHighPriority: false,
        }
    }

    const initialState= {
        todoItems:[]
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case ACTIONS.ADD_TODO_LIST: {
                const newTask= getNewTodoItem(action.payload.task)
                 console.log('state now is  ', state);
                return {todoItems: [...state.todoItems, newTask]}
            }

            case ACTIONS.REMOVE_TODO_LIST: {
               const {deleteId}= action.payload;
                
               /*
               const updatedList = state.todoItems.filter(ele => ele.id !== deleteId)
                return {todoItems: [...updatedList]}
                */
               return {todoItems: state.todoItems.filter(ele => ele.id !== deleteId) } // same as above commented code
            }

            case ACTIONS.TOGGLE_TODO_LIST: {
                const {toggleItemId}= action.payload;
                /*
                const updatedItems= state.todoItems.map(ele => {
                    if(ele.id === toggleItemId) {
                        return {...ele, isHighPriority: !ele.isHighPriority}
                    }
                  return ele;
                })

                return {todoItems: [...updatedItems] }
                */
               return { // same as above commented code
                        todoItems: state.todoItems.map(ele => {
                                    if(ele.id === toggleItemId) {
                                        return {...ele, isHighPriority: !ele.isHighPriority}
                                    }
                                    return ele;
                                    })
                    }
            }

            default:
                return state
        }
    }
    const [todoItem, setTodoItem]= useState('');
    const [state, dispatch] = useReducer(reducer,initialState);

    const todoHandler = (e) => {
        e.preventDefault();
        dispatch({
            type: ACTIONS.ADD_TODO_LIST,
            payload: {task: todoItem}
        })
        setTodoItem('');
    }

  return (
    <div className='todo-app'>
        <form onSubmit={todoHandler}>
            <div>
                <label htmlFor='todo-input-item'>Add Item</label>
                <input type='text' id='todo-input-item' value={todoItem} onChange={(event) => setTodoItem(event.target.value)} />
            </div>
            <button type='submit'>Add</button>
        </form>
        <hr />
        <div>
            <h4>Todo Items : {state?.todoItems?.length}</h4>
            
            
            {state.todoItems.map((ele,id) => {
                const uniqueKey= `itemId-${ele.id}-${id}`
                return (
                    <div key={uniqueKey}>
                        <button 
                            onClick={() => dispatch({
                                                type:ACTIONS.TOGGLE_TODO_LIST, 
                                                payload: {toggleItemId:ele.id} 
                                                })}
                            >Toggle</button>

                        <span style={{color: ele.isHighPriority? 'red': 'orange'}}>{ele.task}</span> 

                        <button 
                            onClick={() => dispatch({
                                                type:ACTIONS.REMOVE_TODO_LIST, 
                                                payload: {deleteId:ele.id} 
                                                })}
                            >X</button>


                    </div>
                )
            })
     
            }
        </div>
       
    </div>
  )
}

export default Demo_UseReducer_Todo