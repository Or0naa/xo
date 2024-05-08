import React from 'react'
import BackArrow from '../../components/BackArrow'
import Frame from '../../components/Frame'
import { NavLink } from 'react-router-dom'
import barcode from '../../barcode.png'

export default function CreateGame() {
 
  return (
    <div>
      <nav>
      <NavLink to="/menu">
      <BackArrow />
     </NavLink>
     </nav>
      <Frame>
        Your Code
        </Frame>
        <h1>Send message</h1>
      <a href='https://wa.link/lime1k' >This is your link </a> 
      <h1>Scan Barcode</h1>
      <img src={barcode}></img>
        loader

        waiting for oponent
    </div>
  )
}
