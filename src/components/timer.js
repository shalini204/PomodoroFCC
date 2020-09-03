import React, {Component} from 'react';
import './css/timer.css';

// const format = (timeLeftInSeconds) => {
//     let minutes = Math.floor(timeLeftInSeconds/60);
//     if(minutes<10) minutes = '0'+minutes;

//     let seconds = timeLeftInSeconds - 60*minutes;
//     if(seconds<10) seconds ='0'+seconds;

//     return `${minutes}:${seconds}`;
// };



export default class Timer extends Component {
     format = (timeLeftInSeconds) =>{
        let minutes = Math.floor(timeLeftInSeconds/60);
    if(minutes<10) minutes = '0'+minutes;

    let seconds = timeLeftInSeconds - 60*minutes;
    if(seconds<10) seconds ='0'+seconds;

    return `${minutes}:${seconds}`;

    };

    
    render(){
        return(
            <div className="timer">
                <div id="time-left" className="timeLeft">
                    <span>{this.format(this.props.timeLeftInSeconds)}</span>
                </div>
                
                <div id="timer-label" className="timeLabel">
                    <span>{this.props.timeLabel}</span>
                </div>               

            </div>

        );
    };
};