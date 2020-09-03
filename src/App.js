import React, {Component} from 'react';
import './App.css';
import Timer from './components/timer';
import TimerController from './components/timerController';
import Sound from './components/sound';
import BreakController from './components/break';
import SessionController from './components/session';
import Controller from './components/controller';
import BeepSound from './utils/beep.mp3';



export default class App extends Component {
  constructor(props){
    super(props);

    this.audioBeep = React.createRef();

    this.state = {
      timeLabel: "Session",
      sessionLength: Number.parseInt(this.props.defaultSessionLength,10),
      breakLength: Number.parseInt(this.props.defaultBreakLength,10),
      timeLeftInSeconds: Number.parseInt(this.props.defaultSessionLength,10)*60,
      isStart: false,
      timerId: null,
      // reset:false
  
    };
  }
  handleBreakIncrement = () => {
    console.log("breakIncre");
    if(this.state.breakLength<60){
      this.setState({
        breakLength: this.state.breakLength+1
      });
      if(this.state.timeLabel=="Break"){
        this.setState({
          timeLeftInSeconds: (this.state.breakLength+1) * 60
        });
      }  
    }
    

  };
  handleSessionIncrement = () => {
    if(this.state.sessionLength<60){
      this.setState({
        sessionLength: this.state.sessionLength+1
      });
      if(this.state.timeLabel=="Session"){
        this.setState({
          timeLeftInSeconds: (this.state.sessionLength+1) * 60
        });
      }
    };

    }
    
  handleBreakDecrement = () => {
    if(this.state.breakLength>1){
      this.setState({
        breakLength: this.state.breakLength-1
      });
      if(this.state.timeLabel=="Break"){
        this.setState({
          timeLeftInSeconds: (this.state.breakLength-1) * 60
        });
      }

    }
    
  };
  handleSessionDecrement = () => {
    if(this.state.sessionLength>1){
      this.setState({
        sessionLength: this.state.sessionLength-1
      });
      if(this.state.timeLabel=="Session"){
        this.setState({
          timeLeftInSeconds: (this.state.sessionLength-1) * 60
        });
      }

    }
    
  };

  toggleController = () => {
    if(!this.state.isStart){
      this.setState({
        isStart:!this.state.isStart,
        timerId: setInterval(()=>{
          this.runTimer();
          this.phaseChange();
        },1000)
      });
      //DECREASEtime

    }else{
        this.state.timerId && clearInterval(this.state.timerId);
        this.setState({
          isStart:!this.state.isStart,
          timerId:null
        });
      }
    
  };

  runTimer = () => {
    this.setState({
      timeLeftInSeconds: this.state.timeLeftInSeconds-1
    })
  };

  phaseChange = () => {
    
    if(this.state.timeLeftInSeconds==0){
      console.log("time is up");
      this.audioBeep.current.play();
    }; 
    if(this.state.timeLabel=="Session" && this.state.timeLeftInSeconds<0){
      this.setState({
        timeLabel: "Break",
        timeLeftInSeconds: this.state.breakLength * 60
      })
    }else if(this.state.timeLabel=="Break" && this.state.timeLeftInSeconds<0){
      this.setState({
        timeLabel: "Session",
        timeLeftInSeconds: this.state.sessionLength * 60
      });
    }
  };

  onReset = () => {
    this.audioBeep.current.pause();
    this.audioBeep.current.currentTime = 0;
    this.state.timerId && clearInterval(this.state.timerId);
    this.setState({
      timeLabel: "Session",
      sessionLength: Number.parseInt(this.props.defaultSessionLength,10),
      breakLength: Number.parseInt(this.props.defaultBreakLength,10),
      timeLeftInSeconds: Number.parseInt(this.props.defaultSessionLength,10)*60,
      isStart: false,
      timerId: null,
      //reset:true
       });
  }; 

  
    render(){
      
        return(
            <div className="App">
               
              <div className="pomodoro">      
              <header className="header">
                  <h1>Pomodoro Clock</h1>
                </header>       
               
                <div className="clock">
                  <Timer timeLabel={this.state.timeLabel}                   
                  isStart={this.state.isStart}
                  timeLeftInSeconds={this.state.timeLeftInSeconds}
                  />
                </div>       
                <div className="phase">
                  <Controller isStart={this.state.isStart}
                  toggleController={this.toggleController}
                  onReset={this.onReset}/>
                  <BreakController breakLength={this.state.breakLength} 
                    breakIncrement={this.handleBreakIncrement}
                    breakDecrement={this.handleBreakDecrement}
                    isStart={this.state.isStart}/>

                  <SessionController sessionLength={this.state.sessionLength}
                    sessionIncrement={this.handleSessionIncrement}
                    sessionDecrement={this.handleSessionDecrement}
                    isStart={this.state.isStart}/>

                </div>         
                
                
                <audio id="beep" preload="auto" src={BeepSound} ref={this.audioBeep}></audio>
              </div>                                              

            </div>

        );
    };
};








































// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
