import { Link } from 'react-router-dom'
import {StyledUseReducerHookNav} from './UseReducerHookNav.style';
const UseReducerHookNav = () => {
  return (
    <StyledUseReducerHookNav>
    <nav className='use-reducer-hook-nav'>
        <Link className="use-reducer-hook-nav-link" to="/useReducer/counterApp">Use1: Counter </Link>
        <Link className="use-reducer-hook-nav-link" to="/useReducer/todoApp"> Use2: Todo App </Link>    
    </nav>
    </StyledUseReducerHookNav>
  )
}
export default UseReducerHookNav;