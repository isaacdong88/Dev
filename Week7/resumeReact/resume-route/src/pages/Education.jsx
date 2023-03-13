import React from 'react'
import { Link } from 'react-router-dom'

function Education() {
    return (
        <div className='display'>
            <div className='images'>
                <img src="https://www.educationworld.in/wp-content/uploads/2020/10/UN-2.jpg" alt="" />
            </div>
    
            <div className='links'>
                <div className='links1'>
                    <h1>Education</h1>
                </div>
    
                <div className='links2'>
                    <ul>University of Virginia
                        <li>Bachelor of Arts, Economics</li>
                        <li>2015-2019</li>
                        <li>GPA: 3.7</li>
                    </ul>
                </div>
    
                <div className='links3'>
                    <Link to='/'>Home</Link>
                    <Link to='/Experience'>View My Experience</Link>
                    <Link to='/Skills'>View My Skills</Link>
                </div>
            </div>
    
        </div>
      )
}

export default Education