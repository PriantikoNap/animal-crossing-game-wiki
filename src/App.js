import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

import "./Global.css"
import FISHDOC from './FishDoc'
import CREATURES from './CreatureDoc'

function App() {
  
  return (
    <div className="App">
      <div className="container-fluid">
      <CREATURES />
     {/* <FISHDOC /> */}
     </div>
    </div>
  );
}

export default App;