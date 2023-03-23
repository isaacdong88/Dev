import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import stocks from '../models/ticker'



function Ticker() {
    // console.log(stockticker)
    const params = useParams()
    const symbols = params.symbol
    const ticker = stocks.filter((data) => data.symbol === symbols)[0]

    return (
        <div className='stock-info'>
            <div>Company Name: {ticker.name} ({ticker.symbol})</div>
            <div>Last Price: ${ticker.lastPrice}</div>
            <div>Opening Price: ${ticker.open}</div>
            <div>High: ${ticker.high}</div>
            <div>Low: ${ticker.low}</div>
        </div>
    )

}

export default Ticker