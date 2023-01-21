import React from 'react'
import { useState } from 'react'
import Searchresult from './Searchresult';

const Search = () => {

    const [searched,setSearched]=useState('');
    const updateit=(e)=>{
        setSearched(e.target.value);
        console.log(searched);
    }
  return (
   
    <>
    <div className='search'>
     <input type="text" placeholder='Search anything'  onChange={updateit} className='searchinput' />
     </div>
      {searched===""?null:<Searchresult name={searched}/>}
    </>
  )
}

export default Search