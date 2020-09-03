import React, {Component} from 'react';
import './css/duration.css';

export default class BreakController extends Component {
    handleIncrement = () => {
        this.props.breakIncrement()
    };
    handleDecrement = () => {
        this.props.breakDecrement()
    };
    render(){
        //console.log(this.props);
        return(
            <div className="break">
                
                <span id="break-label" className="label">Break Length:</span><br/>
                <button id="break-decrement" className="incDec" disabled={this.props.isStart} onClick={this.handleDecrement}>-</button>
                <span id="break-length" className="length">{this.props.breakLength}</span>
                <button id="break-increment" className="incDec" disabled={this.props.isStart} onClick={this.handleIncrement}>+</button>

            </div>

        );
    };
};