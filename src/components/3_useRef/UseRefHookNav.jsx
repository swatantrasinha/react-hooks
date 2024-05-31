import { Link } from 'react-router-dom'
import {StyledUseRefHookNav} from './UseRefHookNav.style';
const UseRefHookNav = () => {
  return (
    <StyledUseRefHookNav>
    <nav className='use-ref-hook-nav'>
        <Link className="use-ref-hook-nav-link" to="/useRef/use1"> Use1:Focus on Button Click </Link>
        <Link className="use-ref-hook-nav-link" to="/useRef/use2"> Use2: Store Previous State </Link>
        <Link className="use-ref-hook-nav-link" to="/useRef/use3"> Use3: Calculate Render Count </Link>
        
    </nav>
    </StyledUseRefHookNav>
  )
}
export default UseRefHookNav;