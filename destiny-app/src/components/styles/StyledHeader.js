import styled from 'styled-components';

export const StyledHeader = styled.div`
  background: #6504b5;

  .header-content {
    padding: 10px 0px 0px 20px;
    max-width: 1280px;
    margin: 0 auto;
    display:flex;

 
  
    h1 {
      font-family: 'Hachi Maru Pop', cursive;
      font-size: 30px;
      padding-left: 20px;
      text-decoration: none;
      color: #fff;
    }
    a:link {
      text-decoration: none;
    }
    a:visited {
      text-decoration: none;
    }
    a:hover {
      text-decoration: none;
    }
    a:active {
      text-decoration: none;
    }
    
    .nav{
      margin-top: 40px;
      text-align: right;
    }
    .nav a {
      font-size: 14px;
      padding-left: 30px;
      color: #fff;
      font-family: 'Open Sans', sans-serif;
    }
  }
`;

export const StyledPawLogo = styled.img`
  width: 40px;
  margin-top: 20px;
`
