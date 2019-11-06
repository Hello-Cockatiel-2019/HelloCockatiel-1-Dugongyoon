import React from 'react';
import './App.css';
import Bio from './Component/Core/biology.js'
import Favicon from 'react-favicon';
function Biology() {
  
  return (
    <div>
      
      <Favicon url="/logo64.ico"/>
       <Bio/>
    </div>
  );
}

export default Biology;
