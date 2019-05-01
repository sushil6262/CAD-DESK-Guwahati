import React from 'react';
import './App.css';
import FirstLayout from './component/TopContainer'
import SecondContainer from './component/SecondContainer'
import 'primereact/resources/primereact.min.css';

function App() {
  return (
    <div>
      <FirstLayout/>
      <SecondContainer/>
    </div>
  );
}

export default App;
