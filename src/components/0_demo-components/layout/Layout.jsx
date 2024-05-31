import { useRoutes, Link, Routes, Route } from 'react-router-dom';
import Home from '../home/Home.jsx';
// import About from '../about/About.jsx';
import About from '../../dummy-components/About.jsx';
import Demo_UseState from '../../1_use-state/Demo_UseState.jsx';
import Demo_UseMemo_Problem from '../../2_use-Memo/Demo_UseMemo_Problem.jsx';
import Header from '../header/Header.jsx';
import {StyledLayout} from './Layout.style.js';
import Book from '../book/Book.jsx';
import NewBook from '../book/NewBook.jsx';
import NotFound from '../notFound/NotFound.jsx';
import { BookNav } from '../header/BookNav.jsx';
import UseMemoryRoutes from '../header/UseMemoryRoutes'
import CustomHookRoutes from '../header/CustomHookRoutes.jsx';
import Demo_Need_For_CustomHook from '../../6_customHooks/Demo_Need_For_CustomHook.jsx';
import UseCallbackRoutes from '../header/UseCallbackRoutes.jsx';
import UseRefRoutes from '../header/UseRefRoutes.jsx';
import UseReducerRoutes from '../header/UseReducerRoutes.jsx';
import Team from '../../dummy-components/Team.jsx';
import Dashboard from '../../dummy-components/Dashboard.jsx';

 const Layout = () => {
    const element= useRoutes([
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
            path: '/useState',
            element: <Demo_UseState />
        },
        {
            path: '/useMemo',
            element: <Demo_UseMemo_Problem />
        },
        {
          path: '/useMemory',
          element: <Demo_UseMemo_Problem />
        },
        {
          path: '/customHook',
          element: <Demo_Need_For_CustomHook />
        },
        {
          path: '*',
          element: <h1>Page Not Found</h1>
        }
      ])

    // eslint-disable-next-line no-unused-vars
      const method1Basic = () => {
        return (
          <>
            <nav>
              <ul>
                <li> <Link to="/">Home</Link></li>
                <li> <Link to="/books">BookList</Link></li>
                <li> <Link to="/useState">UseState</Link></li>
                <li> <Link to="/useMemory">UseMemory</Link></li>
                <li> <Link to="/useCallback">UseCallback</Link></li>
                <li> <Link to="/useRef">UseRef</Link></li>
                <li> <Link to="/useReducer">UseReducer</Link></li>
                <li> <Link to="/customHook">Custom Hook</Link></li>
              </ul>
            </nav>

            {/* <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/book/:id" element={<Book/>} />
              <Route path="/book/new" element={<NewBook/>} />
              <Route path="*" element={<NotFound />} />
            </Routes> */}
            {/* Above commented code is working, re-written below in different way  */}

             <Routes>
                <Route path="/" element={<Home/>} />
                
                <Route path="/books" element={<BookNav />}>
                    
                    <Route path=":id" element={<Book/>} />
                    <Route path="new" element={<NewBook/>} />
                </Route>

                <Route path="/useState" element={<Demo_UseState/>} />
               
                <Route path="/useMemory/*" element={<UseMemoryRoutes />} />
                <Route path="/useCallback/*" element={<UseCallbackRoutes />} />

                <Route path="/useRef/*" element={<UseRefRoutes />} />
                <Route path="/useReducer/*" element={<UseReducerRoutes />} />

                <Route path="/customHook/*" element={<CustomHookRoutes />} />
               
                <Route path="/about" element={<About/>} />
                <Route path="*" element={<NotFound />} />
            </Routes> 

            {/* lets try something */}
          
              {/* <Routes> */}
                  {/* <Route path="/about"  element={<About/>} />
                  <Route path="/about/team"  element={<Team/>} /> */}

                {/* <Route path="/about" element={<About />}>  
                    <Route path="team" element={<Team />} />
                </Route> */}
               
               {/* <Route path="/" element={ <Dashboard /> } >
                </Route> */}
            {/* </Routes> */}

          </>
        )
      };

      // eslint-disable-next-line no-unused-vars
      const method2UseRoutes = () => (
        <>
          <Header/>
          <main className='my-layout'>
            {element}
          </main>
        </>
  );


  return (
    <StyledLayout>
      {method1Basic()}
      {/* {method2UseRoutes()} */}
    </StyledLayout>
    
  )
}
export default Layout;