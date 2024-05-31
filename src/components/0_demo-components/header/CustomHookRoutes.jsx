import { Route,Outlet, Routes } from 'react-router-dom';
import Demo_Need_For_CustomHook from '../../6_customHooks/Demo_Need_For_CustomHook';
import CustomHookNav from '../../6_customHooks/CustomHookNav';
import { InputWithCustomHook } from '../../6_customHooks/InputWithCustomHook';

const CustomHookRoutes = () => {
  return (
    <>

  <CustomHookNav />

    <Routes>
        <Route index element={CustomHookNav} />
        <Route path="problem" element={<Demo_Need_For_CustomHook/>} />
        <Route path="solution" element={<InputWithCustomHook />} />
      </Routes>   

      <Outlet />
    </>
  )
}

export default CustomHookRoutes;