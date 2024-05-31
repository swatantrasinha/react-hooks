import { Route,Outlet, Routes } from 'react-router-dom';
import FocusOnButtonClick from '../../3_useRef/01-accessing-element/FocusOnButtonClick';
import UseRefHookNav from '../../3_useRef/UseRefHookNav';
import StorePrevState from '../../3_useRef/02-store-prevState-value/StorePrevState';
import CalculateRenderCount from '../../3_useRef/03-calculate-render-count/CalculateRenderCount';
const UseRefRoutes = () => {
  return (
    <>

  <UseRefHookNav />

    <Routes>
        <Route index element={UseRefHookNav} />
        <Route path="use1" element={<FocusOnButtonClick/>} />
        <Route path="use2" element={<StorePrevState/>} />
        <Route path="use3" element={<CalculateRenderCount/>} />
      </Routes>   

      <Outlet />
    </>
  )
}

export default UseRefRoutes;