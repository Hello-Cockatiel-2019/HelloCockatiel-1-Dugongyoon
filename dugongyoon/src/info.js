import React from 'react';
import './App.css';
import Info1 from './Component/Core/info.js'
import Favicon from 'react-favicon';
function Info() {
  
  return (
    <div >
      
      <Favicon url="/logo64.ico"/>
       <Info1/>
    </div>
  );
}

export default Info;