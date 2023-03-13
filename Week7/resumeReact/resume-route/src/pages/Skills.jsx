import React from 'react'
import { Link } from 'react-router-dom'

function Skills() {
    return (
        <div className='display'>
            <div className='images'>
                <img src="https://www.herzing.edu/sites/default/files/2020-09/how-to-become-software-engineer.jpg" alt="" />
            </div>
    
            <div className='links'>
                <div className='links1'>
                    <h1>Skills</h1>
                </div>
    
                <div className='links2'>
                    <ul>Hard Skills
                        <li>JavaScript</li>
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>React</li>
                        <li>Excel</li>
                    </ul>
                    <ul>Soft Skills
                        <li>Problem Solving</li>
                        <li>Communication</li>
                        <li>Analytical</li>
                        <li>Time Management</li>
                    </ul>
                </div>
    
                <div className='links3'>
                    <Link to='/'>Home</Link>
                    <Link to='/Experience'>View My Experience</Link>
                    <Link to='/Education'>View My Education</Link>
                </div>
            </div>
    
        </div>
      )
}

export default Skills