import React, { Component } from 'react';
import './App.css';
import bag from './Fruits'
import Display from './Display'
import Base from './Base/Base'


function App() {

  const things = bag.map((item) => {
    return (
      <Display
        title={item.title}
        desc={item.desc}
        comp={item.comp}
      />)
  })

  return (
    <div className="App">


      {things}
      <Base />



    </div >
  );
}

export default App;
