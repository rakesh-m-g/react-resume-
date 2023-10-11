import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import 'bootstrap/dist/js/bootstrap.min.js';
import React from 'react';
import  Example from './resume/button-popup.js';

 
import { Sidebar,ResumeMain} from './resume/resume.js';
function App() {
  return (

  <div className="App">
    <div className="sp-div row ">
      <div className='col-12 res-page-full col-lg-10 '>
        <ResumeMain/>
      </div>
      <div className="sidebar-main col-0 col-lg-2">
        <Sidebar/>
        < Example/>

      </div>

    </div>
  </div>
  

  );
}

export default App;
