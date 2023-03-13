import React from 'react'
import Buttons from './Buttons'

function Posts(props) {
  return (
    <div className='post'>
        <div className='date'>
            {props.article.date}
        </div>

        <div className='title'>
            {props.article.title}
        </div>

        <div className='media'>
            <img src={props.article.image} alt="" />
        </div>

        <div className='content'>

            <img src="https://www.pngplay.com/wp-content/uploads/5/Alphabet-L-Free-PNG.png" alt="" />
 
            <p>{props.article.content}</p>
        </div>
        <Buttons />
        <hr />
    </div>
  )
}

export default Posts