import React from 'react'

function Ratings(props) {
    const tomatoe = props.currentmovie.Ratings[1] === undefined ? 'N/A' : props.currentmovie.Ratings[1].Value
  return (
    <div className='ratings'>
        <div><img className='tomato' src="https://i0.wp.com/thequeerreview.com/wp-content/uploads/2019/08/img_0981.png?fit=264%2C264&ssl=1" alt="" /></div>
        <div>{tomatoe}</div>
    </div>
  )
}

export default Ratings