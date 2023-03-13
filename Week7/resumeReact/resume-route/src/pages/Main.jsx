import React from 'react'
import { Link } from 'react-router-dom'
import profilePic from '../anonymous.jpg'


function Main() {
  return (
    <div className='display'>
        <div className='images'>
            <img src={profilePic} alt="" />
        </div>

        <div className='links'>
            <div className='links1'>
                <h1>Isaac Dong</h1>
            </div>

            <div className='links2'>
                <p>Front End Software Engineer. Can work collaboratively on any project and have the ability to manage projects independently.</p>
            </div>

            <div className='links3'>
                <Link to='/Experience'>View My Experience</Link>
                <Link to='/Education'>View My Education</Link>
                <Link to='/Skills'>View My Skills</Link>
            </div>
        </div>

    </div>
  )
}

export default Main