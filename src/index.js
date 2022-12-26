import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
// JSX 

let greeting="Good morning";
const date=new Date();
const hr=date.getHours();

const stylecss={
    fontSize:'40px',
    borderRadius:'5px'
};

if(hr>=8&&hr<=12)
{
    greeting="Good Morning";
    stylecss.color='red';
    
}
else if(hr>=13&&hr<=18)
{
    greeting="Good Evening";
    stylecss.color='yellow';
}
else
{
    greeting="Good Night";
    stylecss.color='grey';
}
ReactDOM.render(
    <>
    <div className='try'>
    <h1 className='greet'>Hello Sir <span style={stylecss}>{greeting}</span></h1>
    </div>
    </>,
    document.getElementById('root')
)