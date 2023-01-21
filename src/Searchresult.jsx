import React from 'react'

const Searchresult = (props) => {
    const image=`https://source.unsplash.com/600x400/?${props.name}`
  return (
    
    <>
    <img src={image} alt="mytime" className='imagee'></img>
    </>
  )
}

export default Searchresult