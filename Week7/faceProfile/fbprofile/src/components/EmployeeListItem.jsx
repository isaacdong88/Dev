import React from 'react'
import employeeID from '../models/employees'

function EmployeeListItem(props) {
  // const emp = employeeID.map((player) => {
  //   return (
  //       <div className='listitem'>
  //           <div className='profilepic'>
  //               <img src={player.img} alt="" />
  //           </div>
  //           <div className='playerinfo'>
  //               <div className='playername'>{player.name}</div>
  //               <div className='playerposition'>{player.position}</div>
  //           </div>
  //       </div>    
  //   )
  // });
  // return (
  //   <div>
  //       {emp}
  //   </div>
  // )  
  return (
    <div className='listitem'>
        <div className='profilepic'>
            <img src={props.pic} alt="" />
        </div>
        <div className='playerinfo'>
            <div className='playername'>{props.player}</div>
            <div className='playerposition'>{props.position}</div>
        </div>

    </div>
  )
}

export default EmployeeListItem