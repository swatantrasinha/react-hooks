import { Link } from 'react-router-dom'
import {StyledCustomHookNav} from './CustomHookNav.style';
const CustomHookNav = () => {
  return (
    <StyledCustomHookNav>
    <nav className='custom-hook-nav'>
        <Link className="custom-hook-nav-link" to="/customHook/problem"> Understanding Problem </Link>
        <Link className="custom-hook-nav-link" to="/customHook/solution"> Solution with Custom Hook </Link>
    </nav>
    </StyledCustomHookNav>
  )
}
export default CustomHookNav;