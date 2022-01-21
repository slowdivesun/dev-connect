import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import React, { Fragment } from 'react';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Landing />
    </Fragment>
  );
};

export default App;
