import React from 'react'

function Header() {
  return (
    <div className='nav'>
        <ul>
    <li className='title'>
        <span>🎓</span>
        Student Directory</li>
    </ul>

   <ul className='page'>
    <li ><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
   </ul>
   </div>
  )
}

export default Header