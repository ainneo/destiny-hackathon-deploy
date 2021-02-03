import styled from 'styled-components';

export const StyledHeader = styled.div`
  height: 100px;
  background: #6504b5;
  padding: 0 20px;
  box-sizing: border-box;

  .header-content {
    max-width: 1280px;
    padding: 20px 0px;
    margin: 0 auto;
    box-sizing: border-box;
    color: #fff;
    display:flex;
  
    h1 {
      font-family: 'Hachi Maru Pop', cursive;
      font-size: 30px;
      padding-left: 20px;
    }

    @media screen and (max-width: 500px) {
      max-width: 1280px;
      min-height: 0px;
    }
  }
`;

export const StyledPawLogo = styled.img`
  width: 40px;
  margin-top: 20px;

  // @media screen and (max-width: 500px) {
  // }
`;

// font-family: 'Hachi Maru Pop', cursive;
// font-family: 'Open Sans', sans-serif;
// font-family: 'Roboto', sans-serif;
// font-family: 'Roboto Slab', serif;
