import React from 'react'

function Home() {
  return (
    <>
    <div className='directory'>
        <h4>Student Directory</h4>
        <p>Showing 6 students</p>
    </div>
        <div className='searchbar'>
    <input type="text" className='search' placeholder='Search by name..'/>    
    <div className='bt-group'>
    <button type='button'>All</button>
    <button type='button'>Entrolled</button>
    <button type='button'>Alumini</button>
    </div>
    </div >
    


    </>
  )
}

export default Home