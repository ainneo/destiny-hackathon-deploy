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
    <h1>Destiny</h1>
  </div>
</StyledHeader>
)

export default Header;