import React from 'react'
import defaultImage from '../../assets/image-removebg-preview 1.png'
import './Default.css'

function Default() {
  return (
    <div className='default'>
      <img src={defaultImage} className='default-pic' alt='Default Image'/>
      <h1>Pocket Notes</h1>
      <p>Send and receive messages without keeping your phone online.<br/>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
    </div>
  )
}

export default Default
