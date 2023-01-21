import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <>
    <div className='navbar'>
    <Link to="/" className='anchor'>Home</Link>
    <Link to="/Search" className='anchor'>Search</Link>
    <Link to="/About" className='anchor'>About</Link>
    </div>
    </>
  )
}

export default Menu