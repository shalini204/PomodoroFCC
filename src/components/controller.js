import React, {Component} from 'react';
import './css/controller.css';



export default class Controller extends Component {
    
    render(){
        return(
            <div className="controller">                
                <div className="grid-container">
                    <div className="grid-item">
                        {this.props.isStart ? 
                            <button id="start_stop" className="controls" onClick={this.props.toggleController}>Pause</button> : 
                            <button id="start_stop" className="controls" onClick={this.props.toggleController}>Start</button>
                        }                                                 
                        
                    </div>
                    <div className="grid-item">
                        <button id="reset" className="controls" onClick={this.props.onReset}>Reset</button>
                    </div>
                    
                </div>

            </div>

        );
    };
};