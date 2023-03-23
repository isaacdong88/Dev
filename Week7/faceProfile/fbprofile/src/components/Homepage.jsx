import React from 'react'
import EmployeeList from './EmployeeList'
import Header from './Header'
import SearchBar from './SearchBar'

function Homepage() {
  return (
    <div className='homepage'>
        <Header title={'NBA Player'}/>
        <SearchBar />
        <EmployeeList />
    </div>
  )
}

export default Homepage