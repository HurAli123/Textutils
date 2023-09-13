import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";




//components

//.................................................................................................................................
const App = () => {

  //Constant to change and track dark and light mode
  const[mode,setmode]=useState("light")
  const toggleMode = () => {
    if(mode==="light"){
      setmode("dark")
      document.body.style.background="black"
      document.body.style.color="white"
    }
    else {
      setmode("light")
      document.body.style.background="white"
      document.body.style.color="black"
    }
  }

//.................................................................................................................................
  return (
  <BrowserRouter>
    <Routes>

      <Route path="/" 
        element = {<>
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
          <TextForm heading="TextUtils - Modify Your Text :"  mode={mode} />
      </>}/>      

    </Routes>
   </BrowserRouter>
  )
};
//.................................................................................................................................

export default App;
