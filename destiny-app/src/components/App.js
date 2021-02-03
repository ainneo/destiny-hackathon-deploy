import React from 'react';
import { GlobalStyle } from './styles/GlobalStyle';
import { Router } from '@reach/router';
// import Pet from './Pet';
// import NotFound from './NotFound';

import Header from './elements/Header';
import Main from './Main';


const App = () => {
  return (
    <div>
      <Header />
      <Router />
        <Main path="/" />
      <Router />
      <GlobalStyle />
    </div>
  );
}

export default App;
