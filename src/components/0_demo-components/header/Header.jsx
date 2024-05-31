import { useState } from "react";
import { Link } from "react-router-dom"
import {StyledHeader} from './Header.style';

const Header = () => {
  const [displayUseMemoSubNav, setDisplayUseMemoSubNav] = useState(false)
  return (
    <StyledHeader>
       <header>
        <nav>
            <div className="main-navigation">
                <ul className="my-header">
                    <li> <Link to="/"> Home  </Link> </li>
                    
                    <li> <Link to="/useState"> Use-State </Link> </li>

                    <li>
                      <div className="subNav-label-and-options"
                       onMouseOver={() => setDisplayUseMemoSubNav(true)}
                       onMouseOut={() => setDisplayUseMemoSubNav(false)}> 
                    <div 
                      className="subNav-wrapper">
                    Use-memo  
                    {displayUseMemoSubNav && (
                          <div className="subNav useMemo-subNavs">
                            <Link to="/useMemo"> Use-Memo-Problem </Link> 
                          </div>)} 
                    </div>

                     
                      </div>
                    </li>
                    
                    <li> <Link to="/customHook"> CustomHook</Link> </li>
                    <li> <Link to="/about"> About </Link> </li>
                </ul>
                </div>

         
           
        </nav>
    </header>

    </StyledHeader>
   
  )
}

export default Header;
