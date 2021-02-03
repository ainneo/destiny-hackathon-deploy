import React from 'react';
import { GlobalStyle } from './components/styles/GlobalStyle';
import { Router } from '@reach/router';
// import Pet from './Pet';
// import NotFound from './NotFound';

import Header from './components/elements/Header';
import Main from './Main';
import Nav from './components/Nav'
import About from './components/About'
import Adopt from './components/Adopt'



const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Router >
        <Main path="/"/>
        <About path ='/About'/>
        <Adopt path ='/Adopt'/>
      </Router>
      <GlobalStyle />
    </div>
  );
}

export default App;