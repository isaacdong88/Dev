import React from 'react'
import { Link } from 'react-router-dom'

function Experience() {
    return (
        <div className='display'>
            <div className='images'>
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29ycG9yYXRlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
            </div>
    
            <div className='links'>
                <div className='links1'>
                    <h1>Experience</h1>
                </div>
    
                <div className='links2'>
                    <ul>Software Engineering, Per Scholas
                        <li>Front End Development</li>
                        <li>Back End Development</li>
                    </ul>

                    <ul>Assistant Merchant, Haynes Furniture
                        <li>Maintained product data in Excel programs and ensured accurate cost information</li>
                        <li>Assisted in product procurement and transfers from warehouses to 13 regional stores</li>
                        <li>Imported data into STORIS POS weekly and audited for errors to ensure accurate pricing for all stores</li>
                    </ul>
                </div>
    
                <div className='links3'>
                    <Link to='/'>Home</Link>
                    <Link to='/Education'>View My Education</Link>
                    <Link to='/Skills'>View My Skills</Link>
                </div>
            </div>
    
        </div>
      )
}

export default Experience