import React from 'react';
import './App.css';
import Index from './Component/Core/home.js'
import Favicon from 'react-favicon';

function App() {
  
  return (
    <div>
      <Favicon url="/logo64.ico"/>
       <Index/>
    </div>
  );
}

export default App;
