import { Link } from 'react-router-dom'
import {StyledUseMemoNav} from './UseMemo_Nav.style';
const UseMemo_Nav = () => {
  return (
    <StyledUseMemoNav>
    <nav className='use-memo-nav'>
        <Link className="use-memo-nav-link" to="/useMemory/problem"> Understanding Problem </Link>
        <Link className="use-memo-nav-link" to="/useMemory/solution"> Solution with useMemo </Link>
        <Link className="use-memo-nav-link" to="/useMemory/exploreReferentialEquality"> Explore Referential Equality </Link>
    </nav>
    </StyledUseMemoNav>
  )
}
export default UseMemo_Nav;