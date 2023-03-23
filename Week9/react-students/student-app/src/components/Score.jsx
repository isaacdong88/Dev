import React from "react";

function Score(props) {
    const scoredate = props.score.scores.map((data) => {
        return (<div>Date: {data.date} Score:{data.score}</div>)
    })

    return (
        <div>
            {/* Date: {props.score.scores[0].date} Score: {props.score.scores[0].score} <br></br>
            Date: {props.score.scores[1].date} Score: {props.score.scores[1].score} <br></br>
            Date: {props.score.scores[2].date} Score: {props.score.scores[2].score} */}
            {scoredate}
        </div>
    )
}

export default Score