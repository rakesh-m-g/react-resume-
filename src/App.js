import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import React from 'react';

 
import { Sidebar,ResumeMain} from './resume/resume.js';
function App() {
  return (

  <div className="App">
    <div className="row">
      <div className="sidebar-main col-0 col-lg-2">
        <Sidebar/>
      </div>
      <div className='col-12 col-lg-10'>
        <ResumeMain/>
      </div>
    </div>
  </div>

  );
}

export default App;
