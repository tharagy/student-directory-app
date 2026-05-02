import React from 'react'
import { Link, Links } from 'react-router-dom'

function Header() {
  return (
    <div className='nav'>
        <ul>
    <li className='title'>
        <span>🎓</span>
        Student Directory</li>
    </ul>

   <ul className='page'>
    <li ><Link to="/">Home</Link></li>
    <li><Link to="/">About</Link></li>
   </ul>
   </div>
  )
}

export default Header