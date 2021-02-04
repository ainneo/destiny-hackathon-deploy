import React from 'react';
import { GlobalStyle } from './components/styles/GlobalStyle';
import { Router } from '@reach/router';

import Header from './components/elements/Header';
import Main from './Main';
import About from './components/About'


const App = () => {
  return (
    <div>

      <Header />

      <Router >
        <Main path="/"/>
        <About path ='about'/>
      </Router>

      <GlobalStyle />

    </div>
  );
}

export default App;