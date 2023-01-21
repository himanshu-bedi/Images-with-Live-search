import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    
    <div style={{position:'absolute',top:'50%',left:'50%',transform: 'translate(-50%,-50%)',backgroundColor:'black',color:'white',fontSize:'80px',width:'800px'}}>Hi Guys How are you?</div>
    <Link to="/Search" style={{position :'absolute',top:'70%',left:'50%',transform: 'translate(-50%,-50%)'}}><button style={{padding:'6px 8px'}}>Search Images</button></Link>
    </>
  );
}

export default Home