import React, {Component} from 'react';
import './css/duration.css';
export default class SessionController extends Component {
    handleIncrement = () => {
        this.props.sessionIncrement()
    };
    handleDecrement = () => {
        this.props.sessionDecrement()
    };
    render(){
        return(
            <div className="session">
                
                <span id="session-label" className="label">Session Length:</span><br/>
                <button id="session-decrement" className="incDec" disabled={this.props.isStart} onClick={this.handleDecrement}>-</button>
                <span id="session-length" className="length">{this.props.sessionLength}</span>
                <button id="session-increment" className="incDec" disabled={this.props.isStart} onClick={this.handleIncrement}>+</button>

            </div>

        );
    };
};