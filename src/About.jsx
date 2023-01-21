import {Link} from 'react-router-dom';
import React from 'react'

const About = () => {
  return (
   <>
   
   <div style={{position:'absolute',top:'50%',left:'50%',transform: 'translate(-50%,-50%)',backgroundColor:'#adad9c',color:'black',fontSize:'30px',width:'800px',textAlign:'center'}}>Type anything you want to search for...<br/>It will try to show most appropriate results.<br/>Thanks!!</div>
   <Link to="/Search" style={{position :'absolute',top:'70%',left:'50%',transform: 'translate(-50%,-50%)'}}><button style={{padding:'6px 8px'}}>Search Images</button></Link>
   </>
  )
}

export default About;