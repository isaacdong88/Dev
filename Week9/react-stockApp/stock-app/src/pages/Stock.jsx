import React from 'react'
import { Link } from 'react-router-dom'
import stocks from '../models/ticker'
import { useState } from 'react'

function Stock() {
    const tickerInfo = stocks.map((ticker) => {
        const {name, symbol} = ticker
        return (<Link to={`/stocks/${symbol}`} tick={ticker}><h2>{name} ({symbol})</h2></Link>)
    })
  return (
    tickerInfo
    // <div>
    //     {stocks.map((ticker) => {
    //         const {name, symbol} = ticker
    //         return (
    //             <Link to={`/stocks/${symbol}`} stockticker={ticker}><h2>{name} ({symbol})</h2></Link>
    //         )
    //     })}
    // </div>
  )
}

export default Stock