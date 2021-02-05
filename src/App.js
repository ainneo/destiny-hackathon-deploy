import React from 'react';
import { GlobalStyle } from './components/styles/GlobalStyle';
import { Router } from '@reach/router';

import Header from './components/elements/Header';
import Main from './Main';
import About from './components/About'
import Adopt from './components/Adopt'


const App = () => {
  return (
    <div>

      <Header />

      <Router >
        <Main path="/"/>
        <Adopt path ='/:petId'/>
        <About path ='about'/>
      </Router>

      <GlobalStyle />

    </div>
  );
}

export default App;