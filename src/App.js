import React, { useState } from 'react';
import ToDoList from './ToDoList';

const App=()=>{
    
    const [list,setList]=useState("");
    const [items,setItems]=useState([]);



    const inputlist=(e)=>{
        let x=e.target.value;
        setList(x);
    }

    const show=()=>{
        setItems((prevValue)=>{
            return [...prevValue,list];
        })
        setList("");
    }

    const deleteItems=(id)=>{
          console.log("hello pj");  

          setItems((oldItems)=>{
            return oldItems.filter((ele,idx)=>{
               return idx!==id;
            });
          })
    };

    
   
      

   return (
    <>
      <div className='main_div'>
        <div className='center_div'>
            <h1>To do List</h1>
            <input type="text" placeholder="Write item to add" className='input_field' onChange={inputlist} value={list}></input>
            <button className='btn' onClick={show} >+</button>

            <ol>
                
                   { //for javascript 
                    
                    items.map((val,index)=>{
                       return <ToDoList 
                       itemval={val}
                       value={index}
                       id={index}
                       whenclick={deleteItems}
                       />
                       })
                   }
               
            </ol>
        </div>
      </div>
     </>
   );

}


export default App;