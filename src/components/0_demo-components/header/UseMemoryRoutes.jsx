import { Route,Outlet, Routes } from 'react-router-dom';
import Demo_UseMemo_Problem from '../../2_use-Memo/Demo_UseMemo_Problem';
import UseMemo_Nav from '../../2_use-Memo/UseMemo_Nav';
import Demo_UseMemo_Solution from '../../2_use-Memo/Demo_UseMemo_Solution';
import Demo_UseMemo_ExploreFurther from '../../2_use-Memo/Demo_UseMemo_ExploreFurther'


const UseMemoryRoutes = () => {
  return (
    <>

  <UseMemo_Nav />

    <Routes>
        <Route index element={UseMemo_Nav} />

        <Route path="problem" element={<Demo_UseMemo_Problem/>} />
        <Route path="solution" element={<Demo_UseMemo_Solution />} />
        <Route path="exploreReferentialEquality" element={<Demo_UseMemo_ExploreFurther />} />
      </Routes>   

      <Outlet />
    </>
  )
}

export default UseMemoryRoutes;