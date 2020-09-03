import React, {Component} from 'react';
import beep from '../utils/beep.mp3' 

export default class Sound extends Component {
    

    render(){
        let beepAudio = document.getElementById("beep");
        let counter=0;
        if(this.props.timeLeftInSeconds==0){
            beepAudio.play();
            counter=1;           

        }
        if(this.props.reset && beepAudio.playing){
            beepAudio.pause();
            
        }
        
        return(
            
            
            <div className="sound">
                <audio id="beep">
                    <source src={beep} type="audio/mpeg"></source>
                </audio>
            </div>

        )
    }
};