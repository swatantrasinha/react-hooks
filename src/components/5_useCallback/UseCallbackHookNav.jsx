import { Link } from 'react-router-dom'
import {StyledUseCallbackHookNav} from './UseCallbackHookNav.style';
const UseCallbackHookNav = () => {
  return (
    <StyledUseCallbackHookNav>
    <nav className='use-callback--hook-nav'>
        <Link className="use-callback-hook-nav-link" to="/useCallback/problem"> Understanding Problem </Link>
        <Link className="use-callback-hook-nav-link" to="/useCallback/solution"> Solution with UseCallback Hook </Link>
    </nav>
    </StyledUseCallbackHookNav>
  )
}
export default UseCallbackHookNav;