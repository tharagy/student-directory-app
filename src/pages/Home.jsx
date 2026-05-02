import React from 'react'
import StudentList from '../components/StudentList'

function Home(props) {

  return (
    <div className='container'>

    <div className='directory'>
        <h3>Student Directory</h3>
        <p>Showing {props.students.length} students</p>
    </div>
        <div className='searchbar'>
    <input type="text" className='search' placeholder='Search by name..'/>    
    <div className='bt-group'>
    <button type='button'>All</button>
    <button type='button'>Entrolled</button>
    <button type='button'>Alumni</button>
    </div>
    </div >
       <StudentList students={props.students} />
    


    </div>
  )
}

export default Home