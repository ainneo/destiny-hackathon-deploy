import React from 'react';
import { Link } from '@reach/router';

import pawLogo from '../images/paw.png';

import { 
    StyledHeader, 
    StyledPawLogo, 
} from '../styles/StyledHeader';


const Header = () => (
<StyledHeader>
  <div className="header-content">
    <Link to="/">
      <StyledPawLogo src={pawLogo} alt="rmdb-logo" />
    </Link>
    <Link to="/">
    <h1>Destiny</h1>
    </Link>

    <nav className="nav">
     {/* <Link to="/adopt">Adopt</Link> */}
     <Link to="/about">About / Contact</Link>
   </nav>
   
  </div>
</StyledHeader>
)

export default Header;