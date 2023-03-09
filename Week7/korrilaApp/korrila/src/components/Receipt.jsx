import React from 'react'

function Receipt(props) {
  return (
    <div className='receiptDets'>
        <div>
            <h2>{props.ticket.person}</h2>
        </div>
        <div>
            <span>Main:</span>&nbsp;{props.ticket.order.main}
        </div>
        <div>
            <span>Protein:</span>&nbsp;{props.ticket.order.protein}
        </div>
        <div>
            <span>Rice:</span>&nbsp;{props.ticket.order.rice}
        </div>
        <div>
            <span>Sauce:</span>&nbsp;{props.ticket.order.sauce}
        </div>
        <div>
            <span>Drink:</span>&nbsp;{props.ticket.order.drink}
        </div>
        <div>
            <span>Cost:</span>&nbsp;{props.ticket.order.cost}
        </div>
    </div>
  )
}

export default Receipt