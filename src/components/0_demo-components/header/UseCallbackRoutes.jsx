import { Route,Outlet, Routes } from 'react-router-dom';
import UseCallbackHookNav from '../../5_useCallback/UseCallbackHookNav';
import Demo_Need_For_UseCallback from '../../5_useCallback/Demo_Need_For_UseCallback';
import { Demo_Solution_Using_UseCallback } from '../../5_useCallback/Demo_Solution_Using_UseCallback';


const UseCallbackRoutes = () => {
  return (
    <>

  <UseCallbackHookNav />

    <Routes>
        <Route index element={UseCallbackHookNav} />

        <Route path="problem" element={<Demo_Need_For_UseCallback/>} />
        <Route path="solution" element={<Demo_Solution_Using_UseCallback />} />
      </Routes>   

      <Outlet />
    </>
  )
}

export default UseCallbackRoutes;