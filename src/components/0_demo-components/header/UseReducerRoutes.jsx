import { Route,Outlet, Routes } from 'react-router-dom';
import UseReducerHookNav from '../../4_useReducer/UseReducerHookNav';
import Demo_UseReducer_Counter from '../../4_useReducer/01-counter-app/Demo_UseReducer_Counter';
import Demo_UseReducer_Todo from '../../4_useReducer/02-todo-app/Demo_UseReducer_Todo';
const UseReducerRoutes = () => {
  return (
    <>
  <UseReducerHookNav />

    <Routes>
        <Route index element={UseReducerHookNav} />
        <Route path="counterApp" element={<Demo_UseReducer_Counter/>} />
        <Route path="todoApp" element={<Demo_UseReducer_Todo/>} />
      </Routes>   

      <Outlet />
    </>
  )
}

export default UseReducerRoutes;