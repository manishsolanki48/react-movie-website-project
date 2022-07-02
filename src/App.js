import React, { useState } from 'react';
import './App.css';
import Topheader from './Top-header';
import Bollywood from './Bollywood';
import Hollywood from './Hollywood';
import Tollywood from './Tollywood';
import Cartoon from './Cartoon';
import Webseries from './Webseries';
import Bannersection from './Banner-section';
import Tabsection from './Tab-section';
// import Blogsection from './Blog-folder';

function App() {
  return (
    <>
    <Topheader></Topheader>
      <Bannersection></Bannersection>
      <Tabsection></Tabsection>
      <Bollywood></Bollywood>
      <Hollywood></Hollywood>
      <Tollywood></Tollywood>
      <Cartoon></Cartoon>
      <Webseries></Webseries>
      {/* <Blogsection></Blogsection> */}
    </>
  );
}

export default App;
