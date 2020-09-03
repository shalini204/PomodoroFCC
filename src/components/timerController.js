import React, {Component} from 'react';
import BreakController from './break';
import SessionController from './session';

export default class TimerController extends Component {
    render(){
        return(
            <div className="timerController">
                <BreakController />
                <SessionController/>                

            </div>

        );
    };
};