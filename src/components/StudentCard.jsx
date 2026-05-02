import React, { useState } from "react";

function StudentCard(props) {
  let StudentData = props.students;
  







  return (
    <>
      <ul className="list">
        {StudentData.map((obj,index) => {
          return (
            <li key ={index} style={{listStyle:"none"}}>
              <div className="card">

           {obj.isActive?<p id="entrolled">✅Entrolled</p>:
                <p id="alumni">🎓 Alumni</p>
           }
                <p id="name">{obj.name}</p>
                <p id="age">Age : {obj.age}</p>
                <p id="course"> Course : {obj.course}</p>
                <p id="number">Student ID : #{obj.id}</p>
                
                <button className="button" onClick={()=>{

              


                }}>
                  Selected</button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default StudentCard;
