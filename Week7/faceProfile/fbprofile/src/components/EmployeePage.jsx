import React from 'react'
import Header from './Header'
import employeeID from '../models/employees'

function EmployeePage() {
  return (
    <div className='employeepage'>
        <Header title={'Player'}/>
        <div className='mainPic'><img src={employeeID[1].img} alt="" /></div>
        <div>Kobe Bean Bryant was an American professional basketball player. A shooting guard, he spent his entire 20-year career with the Los Angeles Lakers in the National Basketball Association.</div>
    </div>
  )
}

export default EmployeePage