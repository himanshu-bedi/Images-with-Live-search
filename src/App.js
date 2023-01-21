import React from 'react';
import Home from './Home'

import About from './About';
import {Route , Routes} from 'react-router-dom';
import Menu from './Menu';

import Search from './Search';
import './index.css';

const App=()=>{
    
 
  return(
    
      <>
      <Menu/>
      <Routes>
         <Route exact path="/" element={<Home/>}></Route>
         <Route exact path="/About" element={<About/>}></Route>
         {/* <Route exact path="/Contact" element={<Contact/>}></Route>
         <Route exact path='/User/:fname/:lname' element={<User/>}></Route> */}
         <Route exact path='/Search' element={<Search/>}></Route>
      </Routes>
      </>
   );

}


export default App;
