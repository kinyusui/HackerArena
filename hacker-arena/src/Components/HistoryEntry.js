import React from 'react';
import '../Styles/HistoryEntry.css';

const HistoryEntry = (props) => {  
  return (
    <div className="historyEntry card text-center" >
      <div className="card-header">
        {(Object.values(props.game[0].winners).filter(items=>{
          return items === (props.profile.username)
        }).length > 0 ) ? <h1 className="historyWin">WIN</h1> : <h1 className="historyLoss">LOSS</h1>}
        <p>Winner : {Object.values(props.game[0].winners)} </p>
      </div>
      <div className="card-body">
        <h3 className="card-title">{props.game[0].problem.title}</h3>
        <p className="card-text">{props.game[0].problem.description}</p>
        <p className="card-text">Tags : {props.game[0].problem.tags}</p>
        <p className="card-text">Duration : {Math.floor(props.game[0].timeTaken)} seconds</p>
        <p className="card-text">Date : {(new Date(props.game[0].timeStamp)+"")}</p>
      </div>
    </div>
)};

export default HistoryEntry;