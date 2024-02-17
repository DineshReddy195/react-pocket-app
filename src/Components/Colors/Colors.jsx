import React from 'react'

function Colors({isSelected,col,onClick}) {
    const handleClick=()=>{
        onClick(col);
    }
  return (
    <div>
       <li className={`colour ${isSelected ? 'selected' : ''}`}  style={{backgroundColor:col}} onClick={handleClick} ></li>
    </div>
  ) 
}

export default Colors
